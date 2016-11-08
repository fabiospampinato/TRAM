
/* =================================================================================
 * ARRRT - API - Password
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as _ from 'lodash';

/* SCHEMA */

const schema = `scalar Password`;

/* RESOLVERS */

const resolvers = {
  Password: {
    __serialize: value => value,
    __parseValue: value => value,
    __parseLiteral ({ value }): string | null {
      if ( _.inRange ( value, 6, 64 ) ) {
        return String ( value );
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};
