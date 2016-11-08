
/* =========================================================================
 * ARRRT - API - Counter - Query
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ========================================================================= */

/* IMPORT */

import {Errors} from 'api/orm';
import Counter from './model';

/* SCHEMA */

const schema = `
  getCounter ( id: Int ): Counter
`;

/* RESOLVERS */

const resolvers = {
  getCounter ( root, {id} ) {
    return Counter.get ( id ).run ().catch ( Errors.DocumentNotFound, function () {
      return new Counter ({ id }).save ();
    });
  }
};

/* EXPORT */

export {schema, resolvers};
