
/* ================================================================================
 * TRAM - Webpack - Client - Production
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

//TODO: Rewrite

/* IMPORT */

import * as path from 'path';
import * as webpack from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

/* CONFIG */

const config = {
  bail: true,
  entry: {
    client: ['./src/client'],
    vendor: [
      './src/vendor',
      'react',
      'react-dom',
      'react-router',
      'react-helmet',
      'react-redux',
      'react-router-redux',
      'redux'
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
    publicPath: '/public/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
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
      loaders: ExtractTextPlugin.extract ({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.css$/,
      loaders: ExtractTextPlugin.extract ({
        fallback: 'style-loader',
        use: 'css-loader'
      })
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
    new webpack.optimize.OccurrenceOrderPlugin (),
    new webpack.optimize.DedupePlugin (),
    new webpack.optimize.CommonsChunkPlugin ({
      name: 'vendor',
      filename: '[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new CopyWebpackPlugin ([{
      from: path.resolve ( 'assets' ),
      to: path.resolve ( 'dist/assets' )
    }]),
    new webpack.optimize.UglifyJsPlugin ({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin ({
      filename: '[name].[hash].css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin ({
      'typeof window': JSON.stringify ( 'object' ),
      'process.env': {
        NODE_ENV: JSON.stringify ( 'production' ),
        CLIENT: JSON.stringify ( true )
      }
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
