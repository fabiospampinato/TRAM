
/* =================================================================================
 * ARRRT - Server - Hot
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as Chalk from 'chalk';
import * as express from 'express';
import * as webpack from 'webpack';
import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';
import Settings from 'modules/settings';

/* APP */

const app = express (),
      config = require ( '../../webpack/client/development' ),
      compiler = webpack ( config );

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

/* LISTEN */

app.listen ( Settings.hotServer.port, Settings.hotServer.host, err => {
  if ( err ) return console.error ( Chalk.bgRed ( err ) );
  console.info ( Chalk.black.bgGreen ( `[HOT] Listening at ${Settings.hotServer.url}` ) );
});
