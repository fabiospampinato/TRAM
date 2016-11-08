
/* =================================================================================
 * ARRRT - API - ORM
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as thinky from 'thinky';
import Settings from 'modules/settings';

/* ORM */

const ORM = thinky ( Settings.rethinkdb ),
      type = ORM.type,
      Errors = ORM.Errors;

/* EXPORT */

export default ORM;
export {type, Errors};
