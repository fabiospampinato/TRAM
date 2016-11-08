
/* =========================================================================
 * REPONAME - Server
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as bodyParser from 'body-parser';
import * as Chalk from 'chalk';
import * as compression from 'compression';
import * as express from 'express';
import {graphqlConnect, graphiqlExpress} from 'graphql-server-express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {renderToString} from 'react-dom/server';
import {AppContainer} from 'react-hot-loader';
import {RouterContext, createMemoryHistory, match} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Client, Schema} from 'api';
import {configureStore} from '../redux/store';
import Environment from 'modules/environment';
import Settings from 'modules/settings';
import routes from 'ui/routes';
import {Html} from 'ui/components';
const manifest = require ( '../../dist/meta/manifest.json' );

/* APP */

const app = express ();

app.use ( compression () );

if ( Environment.isDevelopment ) {

  const webpack = require ( 'webpack' ),
        config = require ( '../../webpack/client/development' ),
        compiler = webpack ( config ),
        devMiddleware = require ( 'webpack-dev-middleware' ),
        hotMiddleware = require ( 'webpack-hot-middleware' );

  app.use ( devMiddleware ( compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true
  }));

  app.use ( hotMiddleware ( compiler ) );

}

app.use ( favicon ( path.join ( __dirname, '../assets/favicon.ico' ) ) );

app.use ( express.static ( path.join ( __dirname, '../dist/assets' ) ) );

app.use ( '/public', express.static ( path.join ( __dirname, '../dist/public' ) ) );

app.use ( Settings.graphql.endpoint, bodyParser.json (), graphqlConnect ({
  schema: Schema
}));

if ( Environment.isDevelopment ) {

  app.use ( Settings.graphql.interface, graphiqlExpress ({
    endpointURL: Settings.graphql.endpoint,
  }));

}

app.get ( '*', ( req, res ) => {

  const location = req.url,
        memoryHistory = createMemoryHistory ( req.originalUrl ),
        store = configureStore ( memoryHistory ),
        history = syncHistoryWithStore ( memoryHistory, store );

  match ( { history, routes, location }, ( err, redirectLocation, renderProps ) => {

    if ( err ) {

      res.status ( 500 ).send ( err.message );

    } else if ( redirectLocation ) {

      res.redirect ( 302, redirectLocation.pathname + redirectLocation.search );

    } else if ( renderProps ) {

      const page = (
        <Html manifest={manifest}>
          <AppContainer>
            <ApolloProvider store={store} client={Client} key="provider">
              <RouterContext {...renderProps} />
            </ApolloProvider>
          </AppContainer>
        </Html>
      );

      res.status ( 200 ).send ( `<!doctype html>${renderToString ( page )}` );

    } else {

      res.status ( 404 ).send ( 'Not Found?' );

    }

  });

});

/* LISTEN */

app.listen ( Settings.server.port, Settings.server.host, err => {
  if ( err ) return console.error ( Chalk.bgRed ( err ) );
  console.info ( Chalk.black.bgGreen ( `Listening at ${Settings.server.url}` ) );
});
