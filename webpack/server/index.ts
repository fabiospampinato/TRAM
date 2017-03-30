
/* ================================================================================
 * TRAM - Webpack - Server
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import merge from 'conf-merge';
import * as fs from 'fs';
import * as path from 'path';
import * as webpack from 'webpack';
import baseConfig from '../base';

/* ENVIRONMENT */

const ENVIRONMENT = process.env.NODE_ENV || 'development';

/* EXTERNALS */

const externals = {};

fs.readdirSync ( 'node_modules' )
  .filter ( mod => !mod.startsWith ( '.' ) )
  .forEach ( mod => externals[mod] = `commonjs ${mod}` );

/* CONFIG */

const envConfig = require ( `./${ENVIRONMENT}` ).default;

const config = {
  externals,
  output: {
    path: path.resolve ( 'dist' ),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.json$/,
      include: path.resolve ( 'settings' ),
      use: 'json-strip-loader'
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin ({
      context: __dirname,
      name: path.resolve ( 'dist/server.vendor.js' ),
      manifest: require ( '../../dist/meta/server.vendor.json' ),
      sourceType: 'commonjs2'
    })
  ],
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
};

/* EXPORT */

export default [merge ( {}, baseConfig, config, envConfig )]; //FIXME: Webpack's stats issue: https://github.com/webpack/webpack/issues/4118
