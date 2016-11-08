
/* =================================================================================
 * ARRRT - API - Scalars - Email
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as validator from 'validator';

/* SCHEMA */

const schema = `scalar Email`;

/* RESOLVERS */

const resolvers = {
  Email: {
    __serialize: value => value,
    __parseValue: value => value,
    __parseLiteral ({ value }): string | null {
      if ( validator.isEmail ( value ) ) {
        return validator.normalizeEmail ( value );
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};
