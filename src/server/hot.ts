
/* ================================================================================
 * TRAM - Server - Hot
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as Chalk from 'chalk';
import * as express from 'express';
import * as webpack from 'webpack';
import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';
import Settings from 'modules/settings';
import configs from '../../webpack/client';

/* APP */

const app = express (),
      config = configs[0], //FIXME: Webpack's stats issue: https://github.com/webpack/webpack/issues/4118
      compiler = webpack ( config );

app.use ( devMiddleware ( compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  hot: true,
  lazy: false,
  noInfo: true,
  overlay: true,
  quiet: true
}));

app.use ( hotMiddleware ( compiler ) );

/* LISTEN */

const {port, host, url} = Settings.hotServer;

app.listen ( port, host, err => {

  if ( err ) return console.error ( Chalk.bgRed ( err ) );

  console.info ( Chalk.black.bgGreen ( `[HOT] Listening at ${url}` ) );

});
