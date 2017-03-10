
/* ================================================================================
 * TRAM - Webpack - Server - Vendor
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as path from 'path';
import * as webpack from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

/* ALIAS */

const alias = _.fromPairs ( Object.keys ( _ ).map ( key => [`lodash.${key}`, `lodash/${key}`] ) );

/* CONFIG */

const config = {
  entry: {
    'server.vendor': ['./src/server/vendor.ts']
  },
  resolve: {
    alias,
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve ( 'dist' ),
    filename: 'server.vendor.js',
    library: 'vendor',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: path.resolve ( 'dist/meta/server.vendor.json' ),
      name: 'vendor',
      context: __dirname
    }),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    //   statsFilename: '../dist/meta/stats.json'
    // })
  ]
};

/* EXPORT */

export default config;
