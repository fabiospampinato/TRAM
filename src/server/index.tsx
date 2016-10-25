
/* IMPORT */

import 'isomorphic-fetch';
import * as Chalk from 'chalk';
import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as favicon from 'serve-favicon';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {createMemoryHistory, match} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {ReduxAsyncConnect, loadOnServer} from 'redux-connect';
import {configureStore} from '../redux/store';
import routes from '../routes';
import {Html} from '../containers';
import settings from '../modules/settings';
let manifest = require ( '../../build/manifest.json' );

/* APP */

let app = express ();

app.use ( compression () );

if ( settings.env !== 'production' ) {

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

app.use ( favicon ( path.join ( __dirname, '../assets/favicon.ico' ) ) );

app.use ( '/public', express.static ( path.join ( __dirname, '../build/public' ) ) );

app.get ( '*', ( req, res ) => {

  let location = req.url;
  let memoryHistory = createMemoryHistory ( req.originalUrl );
  let store = configureStore ( memoryHistory );
  let history = syncHistoryWithStore ( memoryHistory, store );

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
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );
        res.status ( 200 ).send ( renderHTML ( markup ) );
      });

    } else {

      res.status ( 404 ).send ( 'Not Found?' );

    }

  });

});

/* LISTEN */

app.listen ( settings.port, settings.host, err => {
  if ( err ) return console.error ( Chalk.bgRed ( err ) );
  console.info ( Chalk.black.bgGreen ( `Listening at http://${settings.host}:${settings.port}` ) );
});
