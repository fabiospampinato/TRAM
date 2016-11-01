
/* IMPORT */

import Counter from './model';
import {Errors} from '../orm';

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
