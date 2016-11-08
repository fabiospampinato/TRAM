
/* =================================================================================
 * ARRRT - API - Scalars - Date
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import {Kind} from 'graphql/language';
import * as validator from 'validator';

/* SCHEMA */

const schema = `scalar Date`;

/* RESOLVERS */

const resolvers = {
  Date: {
    __serialize ( value: Date ): number {
      return value.getTime ();
    },
    __parseValue ( value: number ): Date {
      return new Date ( value );
    },
    __parseLiteral ({ kind, value }): number | null {
      if ( kind === Kind.INT && validator.isDate ( value ) ) {
        return parseInt ( value, 10 );
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};
