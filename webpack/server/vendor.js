
/* =========================================================================
 * REPONAME - Webpack - Server - Vendor
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

const path = require ( 'path' ),
      webpack = require ( 'webpack' ),
      BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

/* ALIAS */

let alias = {},
    lodashMethods = ['assign', 'clonedeep', 'countby', 'flatten', 'forown', 'has', 'identity', 'isequal', 'isnull', 'isnumber', 'isundefined', 'mapvalues', 'merge', 'pick'];

lodashMethods.forEach ( method => alias[`lodash.${method}`] = `lodash/${method}` );

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
    //   statsFilename: '../../meta/stats.json'
    // })
  ]
};

/* EXPORT */

module.exports = config;
