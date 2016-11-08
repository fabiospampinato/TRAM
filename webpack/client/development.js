
/* =========================================================================
 * REPONAME - Webpack - Client - Development
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

const path = require ( 'path' ),
      webpack = require ( 'webpack' ),
      BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin,
      CopyWebpackPlugin = require ( 'copy-webpack-plugin' ),
      ForkCheckerPlugin = require ( 'awesome-typescript-loader' ).ForkCheckerPlugin;

/* CONFIG */

const config = {
  devtool: 'eval',
  entry: {
    client: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/client/index.tsx'
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve ( 'dist/public/js' ),
    publicPath: '/public/js/',
    filename: 'client.js',
    pathinfo: true
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      }, {
        test: /\.jsx$/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
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
    new ForkCheckerPlugin (),
    new webpack.LoaderOptionsPlugin ({
      debug: true
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
      'process.env': {
        CLIENT: JSON.stringify ( true ),
        NODE_ENV: JSON.stringify ( 'development' )
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin (),
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoErrorsPlugin (),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    //   statsFilename: '../../meta/stats.json'
    // })
  ]
};

/* EXPORT */

module.exports = config;
