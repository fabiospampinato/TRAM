
/* ================================================================================
 * TRAM - Webpack - Client - Development
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as webpack from 'webpack';
import Settings from '../../src/modules/settings';

/* CONFIG */

const config = {
  entry: {
    client: [
      'react-hot-loader/patch',
      `webpack-hot-middleware/client?path=${Settings.hotServer.url}/__webpack_hmr`,
      './src/client/index.ts'
    ]
  },
  output: {
    publicPath: `${Settings.hotServer.url}/public/`
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: ['react-hot-loader/webpack', 'awesome-typescript-loader']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin ()
  ]
};

/* EXPORT */

export default config;
