
/* ================================================================================
 * TRAM - Modules - Settings
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

//TODO: Publish as a module, maybe

/* IMPORT */

import * as _ from 'lodash';
import Environment from './environment';

/* SETTINGS */

function getSettings ( name ) {

  const file = require ( `../../settings/${name}` );

  if ( !file ) throw new Error ( 'Settings not found' );

  if ( !file.extend ) return file;

  const extend = _.castArray ( file.extend ),
        anchestors = extend.map ( getSettings ),
        merged = _.merge ( {}, ...anchestors, file );

  delete merged['extend'];

  return merged;

}

/* EXPORT */

export default getSettings ( Environment.current );
