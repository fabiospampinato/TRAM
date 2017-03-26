
/* ================================================================================
 * TRAM - Webpack - Base - Production
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

/* CONFIG */

const config = {
  bail: true,
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react-native', ['env', {
            targets: {
              browsers: ['ie >= 10', 'ie_mob >= 10', 'edge >= 13', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10']
            }
          }]]
        }
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract ({
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract ({
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin ({
      debug: false,
      minimize: true
    }),
    new webpack.DefinePlugin ({
      'module.hot': JSON.stringify ( false )
    }),
    new ExtractTextPlugin ({
      filename: '[name].[hash].css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin ({
      mangle: {
        screw_ie8: true,
        keep_fnames: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    })
  ]
};

/* EXPORT */

export default config;
