
/* ================================================================================
 * TRAM - Webpack - Server
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as fs from 'fs';
import * as path from 'path';
import * as webpack from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {CheckerPlugin} from 'awesome-typescript-loader';

/* ENVIRONEMNT */

const ENVIRONMENT = process.env.NODE_ENV || 'development',
      DEVELOPMENT = ENVIRONMENT === 'development',
      PRODUCTION = !DEVELOPMENT;

/* EXTERNALS */

const externals = {};

fs.readdirSync ( 'node_modules' )
  .filter ( mod => !mod.startsWith ( '.' ) )
  .forEach ( mod => externals[mod] = `commonjs ${mod}` );

/* CONFIG */

const config = {
  entry: {
    server: ['./src/server/index.tsx'],
    'server.hot': ['./src/server/hot.ts']
  },
  externals,
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve ( 'dist' ),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.json$/,
      loader: 'json-strip-loader'
    }, {
      test: /\.scss$/,
      loaders: ['isomorphic-style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      loaders: ['isomorphic-style-loader', 'css-loader']
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'url?limit=1000&name=images/[hash].[ext]'
    }]
  },
  plugins: [
    new CheckerPlugin (),
    new webpack.DllReferencePlugin ({
      context: __dirname,
      name: path.resolve ( 'dist/server.vendor.js' ),
      manifest: require ( '../../dist/meta/server.vendor.json' ),
      sourceType: 'commonjs2'
    }),
    new webpack.DefinePlugin ({
      'ENVIRONMENT': JSON.stringify ( ENVIRONMENT ),
      'DEVELOPMENT': JSON.stringify ( DEVELOPMENT ),
      'PRODUCTION': JSON.stringify ( PRODUCTION ),
      'CLIENT': JSON.stringify ( false ),
      'SERVER': JSON.stringify ( true ),
      'process.env.NODE_ENV': JSON.stringify ( ENVIRONMENT )
    }),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    //   statsFilename: '../dist/meta/stats.json'
    // })
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

export default config;
