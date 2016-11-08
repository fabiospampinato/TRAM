
/* =================================================================================
 * ARRRT - Webpack - Server
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

const fs = require ( 'fs' ),
      path = require ( 'path' ),
      webpack = require ( 'webpack' ),
      BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin,
      ForkCheckerPlugin = require ( 'awesome-typescript-loader' ).ForkCheckerPlugin;

/* EXTERNALS */

let externals = {};

fs.readdirSync ( 'node_modules' )
  .filter ( mod => ['.bin'].indexOf ( mod ) === -1 )
  .forEach ( mod => externals[mod] = `commonjs ${mod}` );

/* CONFIG */

const config = {
  entry: {
    server: './src/server/index.tsx',
    'server.hot': './src/server/hot.ts'
  },
  externals,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        test: /\.jsx$/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        loaders: ['isomorphic-style-loader', 'css-loader']
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }]
  },
  plugins: [
    new ForkCheckerPlugin (),
    new webpack.DllReferencePlugin ({
      context: __dirname,
      name: path.resolve ( 'dist/server.vendor.js' ),
      manifest: require ( '../../dist/meta/server.vendor.json' ),
      sourceType: 'commonjs2'
    }),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    //   statsFilename: '../../meta/stats.json'
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

module.exports = config;
