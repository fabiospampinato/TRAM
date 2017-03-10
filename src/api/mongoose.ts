
/* ================================================================================
 * TRAM - API - Mongoose
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as Chalk from 'chalk';
import * as Mongoose from 'mongoose';
import * as timestamp from 'mongoose-timestamp';
import {findAnyoneOrCreatePlugin, findOneOrCreatePlugin} from 'api/plugins';
import Settings from 'modules/settings';
import Environment from 'modules/environment';

/* MONGOOSE */

Mongoose.Promise = global.Promise;

if ( Environment.isServer ) {

  const {url, options} = Settings.mongodb;

  Mongoose.connect ( url , options, err => {

    if ( err ) return console.error ( Chalk.bgRed ( err ) );

    console.info ( Chalk.black.bgGreen ( `[DB] Connected to ${url}` ) );

  });

}

/* PLUGINS */

if ( Environment.isServer ) {

  Mongoose.plugin ( timestamp );
  Mongoose.plugin ( findAnyoneOrCreatePlugin );
  Mongoose.plugin ( findOneOrCreatePlugin );

}

/* EXPORT */

export default Mongoose;
