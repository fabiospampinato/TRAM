
/* ================================================================================
 * TRAM - Modules - Settings
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import {settings} from './types';

/* SETTINGS */

function getSettings ( name: string ): settings {

  const settings = require ( `../../../settings/${name}` );

  if ( !settings.extend ) return settings;

  const extend = _.castArray ( settings.extend ),
        anchestors = extend.map ( getSettings ),
        merged = _.merge ( {}, ...anchestors, settings ) as settings;

  delete merged.extend;

  return merged;

}

/* EXPORT */

export {getSettings};
export default getSettings ( process.env.NODE_ENV || 'development' );
