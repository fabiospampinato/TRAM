
/* ================================================================================
 * TRAM - Server
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as bodyParser from 'body-parser';
import * as Chalk from 'chalk';
import * as compression from 'compression';
import * as express from 'express';
import {graphqlConnect, graphiqlExpress} from 'graphql-server-express';
import * as path from 'path';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {ApolloProvider} from 'react-apollo';
import {AppContainer} from 'react-hot-loader';
import {RouterContext, createMemoryHistory, match} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Apollo, Schema} from 'api';
import Settings from 'modules/settings';
import routes from 'ui/routes';
const manifest = require ( '../../dist/meta/manifest.json' );
import {HTML} from 'ui/components';
import {configureStore} from '../redux/store';

/* APP */

const app = express ();

app.use ( compression () );


app.use ( express.static ( path.join ( __dirname, 'assets' ) ) );

app.use ( '/public', express.static ( path.join ( __dirname, 'public' ) ) );

}));

app.use ( Settings.graphql.url, bodyParser.json (), ( req, res, next ) => graphqlConnect ({
  schema: Schema,
  context: req
})( req, res, next ));

if ( Settings.graphiql.enabled ) {

  app.use ( Settings.graphiql.url, graphiqlExpress ({
    endpointURL: Settings.graphql.url
  }));

}

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
