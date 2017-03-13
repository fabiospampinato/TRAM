
/* ================================================================================
 * TRAM - Webpack - Test
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import {CheckerPlugin} from 'awesome-typescript-loader';

/* EXTERNALS */

const externals = {};

fs.readdirSync ( 'node_modules' )
  .filter ( mod => !mod.startsWith ( '.' ) )
  .forEach ( mod => externals[mod] = `commonjs ${mod}` );

/* ENTRY */

const files = glob.sync ( 'src/**/?(*.)?(app-)+(test|spec)?(s).ts?(x)' ),
      entry = {};

files.forEach ( file => entry[file.replace ( 'src/', '' )] = `./${file}` );

/* CONFIG */

const config = {
  entry,
  externals,
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve ( 'src' ),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve ( 'dist/tests' ),
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
    new CheckerPlugin ()
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
