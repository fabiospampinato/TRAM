
/* ================================================================================
 * TRAM - Webpack - Test
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

process.env.TEST = true; //FIXME: A bit too hacky

/* IMPORT */

import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import * as merge from 'webpack-merge';
import * as baseConfig from './base';

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

export default merge ( baseConfig, config );
