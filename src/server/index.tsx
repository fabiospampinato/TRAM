
/* ================================================================================
 * TRAM - Server
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import 'isomorphic-fetch';
import * as _ from 'lodash';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as Chalk from 'chalk';
import * as compression from 'compression';
import createHistory from 'history/createMemoryHistory';
import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import * as session from 'express-session';
import * as ConnectMongo from 'connect-mongo';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import * as path from 'path';
import * as React from 'react';
import {ApolloProvider, renderToStringWithData} from 'react-apollo';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {configureApollo, Schema} from 'api';
import Mongoose from 'api/mongoose';
import passport from 'api/auth/passport';
import Settings from 'modules/settings';
import sendMessage from 'modules/send_message';
import {App, HTML} from 'ui/components';
import {configureStore} from '../redux/store';

const manifestClient = require ( '../../dist/meta/manifest.client.json' ); //FIXME: Ugly
const manifestClientVendor = require ( '../../dist/meta/manifest.client.vendor.json' ); //FIXME: Ugly

/* APP */

const app = express ();

app.use ( compression () );

app.use ( favicon ( path.join ( __dirname, 'assets/favicon.ico' ) ) );

app.use ( bodyParser.json () );

app.use ( bodyParser.urlencoded ({
  extended: false
}));

app.use ( cookieParser () );

app.use ( '/assets', express.static ( path.join ( __dirname, 'assets' ) ), sendMessage ( 404, 'Resource not found' ) );

app.use ( '/public', express.static ( path.join ( __dirname, 'public' ) ), sendMessage ( 404, 'Resource not found' ) );

const MongoStore = ConnectMongo ( session );

app.use ( session ( _.extend ( {}, Settings.session, {
  store: new MongoStore ( _.extend ( {}, Settings.session.store, {
    mongooseConnection: Mongoose.connection
  }))
})));

app.use ( passport.initialize () );

app.use ( passport.session () );

if ( Settings.morgan.enabled ) {

  app.use ( morgan ( 'dev' ) );

}

app.use ( Settings.graphql.url, graphqlExpress ( req => ({
  schema: Schema,
  context: req
})));

if ( Settings.graphiql.enabled ) {

  app.use ( Settings.graphiql.url, graphiqlExpress ({
    endpointURL: Settings.graphql.url
  }));

}

app.post ( '/login', passport.authenticate ( 'local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get ( '/logout', ( req, res ) => {
  req.logout ();
  res.redirect ( '/' );
});

app.get ( '*', async ( req, res ) => {

  //TODO: Implement 500 errors
  //TODO: Implement 404 status code

  const history = createHistory (),
        Apollo = configureApollo ( req ),
        store = configureStore ( history, Apollo ),
        context = {};

  let app = (
    <ApolloProvider store={store} client={Apollo}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  if ( DEVELOPMENT ) {

    const {AppContainer} = require ( 'react-hot-loader' );

    app = (
      <AppContainer>
        {app}
      </AppContainer>
    );

  }

  const content = await renderToStringWithData ( app );

  if ( context.url ) return res.redirect ( 301, context.url );

  const state = { apollo: Apollo.getInitialState () },
        html = <HTML manifests={[manifestClient, manifestClientVendor]} content={content} state={state} />;

  res.status ( 200 ).send ( `<!doctype html>${renderToString ( html )}` );

});

/* LISTEN */

const {protocol, host, port, url} = Settings.server;

app.listen ( port, host, err => {

  if ( err ) return console.error ( Chalk.bgRed ( err ) );

  if ( Settings.graphiql.enabled ) {

    console.info ( Chalk.black.bgGreen ( `[GRAPHIQL] Available at ${protocol}://${host}:${port}${Settings.graphiql.url}` ) );

  }

  console.info ( Chalk.black.bgGreen ( `[APP] Listening at ${url}` ) );

});
