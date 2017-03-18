
/* ================================================================================
 * TRAM - Webpack - Base
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as path from 'path';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';
import {CheckerPlugin} from 'awesome-typescript-loader';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

/* ENVIRONMENT */

const ENVIRONMENT = process.env.NODE_ENV || 'development',
      DEVELOPMENT = ENVIRONMENT !== 'production',
      CLIENT = !!process.env.CLIENT,
      ANALYZE = !!process.env.ANALYZE;

/* ALIAS */

const alias = _.fromPairs ( Object.keys ( _ ).map ( key => [`lodash.${key}`, `lodash/${key}`] ) );

/* CONFIG */

const envConfig = require ( `./${ENVIRONMENT}` ).default;

const config = {
  resolve: {
    alias,
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.json$/,
      include: path.resolve ( 'src' ),
      use: 'json-strip-loader'
    }, {
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader'
    }, {
      test: /\.(ttf|eot|woff|woff2)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[hash].[ext]'
        }
      }
    }, {
      test: /\.(svg|jpe?g|png|gif)(\?.*)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'images/[hash].[ext]'
        }
      }
    }]
  },
  plugins: [
    new CheckerPlugin (),
    new webpack.NoEmitOnErrorsPlugin (),
    new webpack.DefinePlugin ({
      ENVIRONMENT: JSON.stringify ( ENVIRONMENT ),
      DEVELOPMENT: JSON.stringify ( DEVELOPMENT ),
      PRODUCTION: JSON.stringify ( !DEVELOPMENT ),
      CLIENT: JSON.stringify ( CLIENT ),
      SERVER: JSON.stringify ( !CLIENT ),
      'typeof window': JSON.stringify ( CLIENT ? 'object' : null ),
      'process.env.NODE_ENV': JSON.stringify ( ENVIRONMENT )
    })
  ]
};

if ( ANALYZE ) {

  config.plugins.push ( new BundleAnalyzerPlugin ({
    generateStatsFile: true,
    openAnalyzer: false,
    statsFilename: '../dist/meta/analyze.json'
  }));

}

/* EXPORT */

export default merge ( config, envConfig );
