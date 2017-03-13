
/* ================================================================================
 * TRAM - Server
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as Chalk from 'chalk';
import * as compression from 'compression';
import * as express from 'express';
import * as session from 'express-session';
import * as ConnectMongo from 'connect-mongo';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import * as path from 'path';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {ApolloProvider} from 'react-apollo';
import {AppContainer} from 'react-hot-loader';
import {RouterContext, createMemoryHistory, match} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Apollo, Schema} from 'api';
import Mongoose from 'api/mongoose';
import passport from 'api/auth/passport';
import Settings from 'modules/settings';
import routes from 'ui/routes';
import {HTML} from 'ui/components';
import {configureStore} from '../redux/store';

const manifestClient = require ( '../../dist/meta/manifest.client.json' ); //FIXME: Ugly
const manifestClientVendor = require ( '../../dist/meta/manifest.client.vendor.json' ); //FIXME: Ugly

/* APP */

const app = express ();

app.use ( compression () );

app.use ( bodyParser.json () );

app.use ( bodyParser.urlencoded ({
  extended: false
}));

app.use ( cookieParser () );

app.use ( express.static ( path.join ( __dirname, 'assets' ) ) );

app.use ( '/public', express.static ( path.join ( __dirname, 'public' ) ) );

const MongoStore = ConnectMongo ( session );

app.use ( session ( _.extend ( {}, Settings.session, {
  store: new MongoStore ( _.extend ( {}, Settings.session.store, {
    mongooseConnection: Mongoose.connection
  }))
})));

app.use ( passport.initialize () );

app.use ( passport.session () );

app.use ( Settings.graphql.url, graphqlExpress ( req => ({
  schema: Schema,
  context: { user: req.user }
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

app.get ( '*', ( req, res ) => {

  const location = req.url,
        memoryHistory = createMemoryHistory ( req.originalUrl ),
        store = configureStore ( memoryHistory ),
        history = syncHistoryWithStore ( memoryHistory, store );

  match ( { history, routes, location }, ( err, redirect, props ) => {

    if ( err ) {

      res.status ( 500 ).send ( err.message );

    } else if ( redirect ) {

      res.redirect ( 302, redirect.pathname + redirect.search );

    } else if ( props ) {

      const html = (
        <HTML manifests={[manifestClient, manifestClientVendor]}>
          <AppContainer>
            <ApolloProvider store={store} client={Apollo} key="provider">
              <RouterContext {...props} />
            </ApolloProvider>
          </AppContainer>
        </HTML>
      );

      res.status ( 200 ).send ( `<!doctype html>${renderToString ( html )}` );

    } else {

      res.status ( 404 ).send ( 'Not Found!' );

    }

  });

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
