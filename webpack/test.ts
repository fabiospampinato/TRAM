
/* ================================================================================
 * TRAM - Webpack - Test
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

process.env.TEST = true; //FIXME: A bit too hacky

/* IMPORT */

import * as _ from 'lodash';
import merge from 'conf-merge';
import * as glob from 'glob';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import baseConfig from './base';

/* ENTRY */

const ONLY = process.env.ONLY,
      SKIP = process.env.SKIP,
      onlyRegex = ONLY && new RegExp ( ONLY ),
      skipRegex = SKIP && new RegExp ( SKIP ),
      files = glob.sync ( 'src/**/?(*.)?(app-)+(test|spec)?(s).ts?(x)' ),
      entry = {};

files.forEach ( file => {
  if ( onlyRegex && !file.match ( onlyRegex ) ) return;
  if ( skipRegex && file.match ( skipRegex ) ) return;
  entry[file.replace ( 'src/', '' )] = `./${file}`;
});

if ( !_.size ( entry ) ) process.exit ();

/* CONFIG */

const config = {
  entry,
  externals: [nodeExternals ()],
  output: {
    path: path.resolve ( 'dist/tests' ),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.json$/,
      include: path.resolve ( 'settings' ),
      use: 'json-strip-loader'
    }]
  },
  target: 'node'
};

/* EXPORT */

export default merge ( {}, baseConfig, config );
