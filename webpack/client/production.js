
/* =================================================================================
 * ARRRT - Webpack - Client - Production
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

//TODO: Rewrite

/* IMPORT */

const path = require ( 'path' ),
      webpack = require ( 'webpack' ),
      BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin,
      ExtractTextPlugin = require ( 'extract-text-webpack-plugin' );

/* CONFIG */

const config = {
  bail: true,
  resolve: {
    modules: [
      path.resolve ( __dirname ),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: {
    client: './src/client',
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
  output: {
    path: path.resolve ( './build/public' ),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        include: path.resolve ( './src' ),
        loader: ExtractTextPlugin.extract ( 'style-loader', 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]' )
      }, {
        test: /\.css$/,
        exclude: path.resolve ( './src' ),
        loader: ExtractTextPlugin.extract ( 'style-loader', 'css-loader' )
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
      filename: 'js/[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin ({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin ( 'css/[name].[hash].css' ),
    new webpack.DefinePlugin ({
      'process.env': {
        CLIENT: JSON.stringify ( true ),
        NODE_ENV: JSON.stringify ( 'production' )
      }
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
