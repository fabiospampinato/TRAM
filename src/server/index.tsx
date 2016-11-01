
/* IMPORT */

import 'isomorphic-fetch';
import * as bodyParser from 'body-parser';
import * as Chalk from 'chalk';
import * as compression from 'compression';
import * as express from 'express';
import {graphqlConnect, graphiqlExpress} from 'graphql-server-express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import * as ReactDOMServer from 'react-dom/server';
import {createMemoryHistory, match} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {ReduxAsyncConnect, loadOnServer} from 'redux-connect';
import Client from '../api/client';
import Schema from '../api/schema';
import {configureStore} from '../redux/store';
import routes from '../routes';
import {Html} from '../containers';
import Environment from '../modules/environment';
import Settings from '../modules/settings';
let manifest = require ( '../../build/manifest.json' );

/* APP */

let app = express ();

app.use ( compression () );

app.use ( favicon ( path.join ( __dirname, '../assets/favicon.ico' ) ) );

if ( Environment.isDevelopment ) {

  let webpack = require ( 'webpack' ),
      config = require ( '../../webpack/development' ),
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
    quiet: true,
  }));

  app.use ( hotMiddleware ( compiler ) );

}

app.use ( express.static ( path.join ( __dirname, '../assets' ) ) );

app.use ( '/public', express.static ( path.join ( __dirname, '../build/public' ) ) );

app.use ( Settings.graphql.endpoint, bodyParser.json (), graphqlConnect ({
  schema: Schema
}));

if ( Environment.isDevelopment ) {

  app.use ( Settings.graphql.interface, graphiqlExpress ({
    endpointURL: Settings.graphql.endpoint,
  }));

}

app.get ( '*', ( req, res ) => {

  let location = req.url,
      memoryHistory = createMemoryHistory ( req.originalUrl ),
      store = configureStore ( memoryHistory ),
      history = syncHistoryWithStore ( memoryHistory, store );

  function renderHTML ( markup ) {
    let html = ReactDOMServer.renderToString (
      <Html markup={markup} manifest={manifest} store={store} />
    );
    return `<!doctype html> ${html}`;
  }

  match ( { history, routes, location }, ( err, redirectLocation, renderProps ) => {

    if ( err ) {

      res.status ( 500 ).send ( err.message );

    } else if ( redirectLocation ) {

      res.redirect ( 302, redirectLocation.pathname + redirectLocation.search );

    } else if ( renderProps ) {

      let asyncRenderData = Object.assign ( {}, renderProps, {store} );

      loadOnServer ( asyncRenderData ).then ( () => {
        let markup = ReactDOMServer.renderToString (
          <ApolloProvider store={store} client={Client} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </ApolloProvider>
        );
        res.status ( 200 ).send ( renderHTML ( markup ) );
      });

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
