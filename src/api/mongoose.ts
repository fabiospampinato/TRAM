
/* ================================================================================
 * TRAM - API - Mongoose
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as Mongoose from 'mongoose';
import Settings from 'modules/settings';

/* MONGOOSE */

Mongoose.Promise = global.Promise;

if ( SERVER ) {

  const Chalk = require ( 'chalk' ),
        {url, options} = Settings.mongodb;

  Mongoose.connect ( url , options, err => {

    if ( err ) return console.error ( Chalk.bgRed ( err ) );

    console.info ( Chalk.black.bgGreen ( `[DB] Connected to ${url}` ) );

  });

}

/* PLUGINS */

if ( SERVER ) {

  const timestamp = require ( 'mongoose-timestamp' ),
        findOneOrCreate = require ( 'mongoose-findoneorcreate' ).default,
        findAnyoneOrCreate = require ( 'mongoose-findanyoneorcreate' ).default;

  Mongoose.plugin ( timestamp );
  Mongoose.plugin ( findOneOrCreate );
  Mongoose.plugin ( findAnyoneOrCreate );

}

/* EXPORT */

export default Mongoose;
