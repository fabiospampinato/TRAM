
/* IMPORT */

import * as _ from 'lodash';

/* SCHEMA */

const schema = `scalar Password`;

/* RESOLVERS */

const resolvers = {
  Password: {
    __serialize: value => value,
    __parseValue: value => value,
    __parseLiteral ({ value }) {
      if ( _.inRange ( value, 6, 64 ) ) {
        return String ( value );
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};
