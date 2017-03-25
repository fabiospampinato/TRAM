
/* ================================================================================
 * TRAM - Webpack - Server - Vendor
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import baseConfig from '../base';

/* CONFIG */

const config = {
  entry: {
    'server.vendor': ['./src/server/vendor.ts']
  },
  output: {
    path: path.resolve ( 'dist' ),
    library: 'vendor',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: path.resolve ( 'dist/meta/server.vendor.json' ),
      name: 'vendor',
      context: __dirname
    })
  ],
  target: 'node'
};

/* EXPORT */

export default [merge ( baseConfig, config )]; //FIXME: Webpack's stats issue: https://github.com/webpack/webpack/issues/4118
