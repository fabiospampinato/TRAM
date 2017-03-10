
/* ================================================================================
 * TRAM - Webpack - Client - Vendor
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as path from 'path';
import * as webpack from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import * as ManifestPlugin from 'webpack-manifest-plugin';

/* ALIAS */

const alias = _.fromPairs ( Object.keys ( _ ).map ( key => [`lodash.${key}`, `lodash/${key}`] ) );

/* CONFIG */

const config = {
  entry: {
    'client.vendor': ['./src/client/vendor.ts']
  },
  resolve: {
    alias,
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve ( 'dist/public' ),
    filename: 'client.vendor.[chunkhash].js',
    library: 'vendor',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: path.resolve ( 'dist/meta/client.vendor.json' ),
      name: 'vendor',
      context: __dirname
    }),
    new ManifestPlugin ({
      fileName: '../meta/manifest.client.vendor.json',
      publicPath: '/public/'
    }),
    new webpack.DefinePlugin ({
      'typeof window': JSON.stringify ( 'object' )
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
