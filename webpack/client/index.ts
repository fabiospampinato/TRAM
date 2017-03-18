
/* ================================================================================
 * TRAM - Webpack - Client
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

process.env.CLIENT = true; //FIXME: A bit too hacky

/* IMPORT */

import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as ManifestPlugin from 'webpack-manifest-plugin';
import baseConfig from '../base';

/* ENVIRONMENT */

const ENVIRONMENT = process.env.NODE_ENV || 'development';

/* CONFIG */

const envConfig = require ( `./${ENVIRONMENT}` ).default;

const config = {
  output: {
    path: path.resolve ( 'dist/public' )
  },
  module: {
    rules: [{
      test: /\.json$/,
      include: path.resolve ( 'settings' ),
      use: {
        loader: 'json-strip-loader',
        options: {
          key: 'secret'
        }
      }
    }]
  },
  plugins: [
    new ManifestPlugin ({
      fileName: '../meta/manifest.client.json',
      publicPath: '/public/'
    }),
    new CopyWebpackPlugin ([{
      from: path.resolve ( 'assets' ),
      to: path.resolve ( 'dist/assets' )
    }]),
    new webpack.DllReferencePlugin ({
      context: __dirname,
      manifest: require ( '../../dist/meta/client.vendor.json' ),
      sourceType: 'var'
    })
  ]
};

/* EXPORT */

export default merge ( baseConfig, config, envConfig );
