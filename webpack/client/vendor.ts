
/* ================================================================================
 * TRAM - Webpack - Client - Vendor
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

process.env.CLIENT = true; //FIXME: A bit too hacky

/* IMPORT */

import merge from 'conf-merge';
import * as path from 'path';
import * as webpack from 'webpack';
import * as ManifestPlugin from 'webpack-manifest-plugin';
import baseConfig from '../base';

/* CONFIG */

const config = {
  entry: {
    'client.vendor': ['./src/client/vendor.ts']
  },
  output: {
    path: path.resolve ( 'dist/public' ),
    filename: 'client.vendor.[chunkhash].js',
    library: 'vendor'
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
    })
  ]
};

/* EXPORT */

export default merge ( {}, baseConfig, config );
