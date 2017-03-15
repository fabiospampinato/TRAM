
/* ================================================================================
 * TRAM - Webpack - Client - Development
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as path from 'path';
import * as webpack from 'webpack';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import {CheckerPlugin} from 'awesome-typescript-loader';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import * as ManifestPlugin from 'webpack-manifest-plugin';
import Settings from '../../src/modules/settings';

/* CONFIG */

const config = {
  devtool: 'inline-source-map',
  entry: {
    client: [
      'react-hot-loader/patch',
      `webpack-hot-middleware/client?path=${Settings.hotServer.url}/__webpack_hmr`,
      './src/client/index.tsx'
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve ( 'dist/public' ),
    publicPath: `${Settings.hotServer.url}/public/`,
    filename: 'client.js',
    pathinfo: true
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'source-map-loader'
    }, {
      enforce: 'pre',
      test: /\.tsx?$/,
      use: 'source-map-loader'
    }, {
      test: /\.tsx?$/,
      loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
    }, {
      test: /\.json$/,
      include: path.resolve ( 'src' ),
      loader: 'json-strip-loader'
    }, {
      test: /\.json$/,
      include: path.resolve ( 'settings' ),
      loader: 'json-strip-loader?key=secret'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.eot(\?.*)?$/,
      loader: 'file?name=fonts/[hash].[ext]'
    }, {
      test: /\.(woff|woff2)(\?.*)?$/,
      loader: 'file-loader?name=fonts/[hash].[ext]'
    }, {
      test: /\.ttf(\?.*)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
    }, {
      test: /\.svg(\?.*)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'url?limit=1000&name=images/[hash].[ext]'
    }]
  },
  plugins: [
    new CheckerPlugin (),
    new webpack.LoaderOptionsPlugin ({
      debug: true
    }),
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
    }),
    new webpack.DefinePlugin ({
      'typeof window': JSON.stringify ( 'object' ),
      'process.env': {
        NODE_ENV: JSON.stringify ( 'development' ),
        CLIENT: JSON.stringify ( true )
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin ( true ),
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoEmitOnErrorsPlugin (),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    //   statsFilename: '../dist/meta/stats.json'
    // })
  ]
};

/* EXPORT */

export default config;
