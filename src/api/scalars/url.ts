
/* =================================================================================
 * ARRRT - API - URL
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as validator from 'validator';

/* SCHEMA */

const schema = `scalar URL`;

/* RESOLVERS */

const resolvers = {
  URL: {
    __serialize: value => value,
    __parseValue: value => value,
    __parseLiteral ({ value }): string | null {
      if ( validator.isURL ( value ) ) {
        return value;
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};
