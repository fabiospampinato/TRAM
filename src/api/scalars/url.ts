
/* IMPORT */

import * as validator from 'validator';

/* SCHEMA */

const schema = `scalar URL`;

/* RESOLVERS */

const resolvers = {
  URL: {
    __serialize: value => value,
    __parseValue: value => value,
    __parseLiteral ({ value }) {
      if ( validator.isURL ( value ) ) {
        return value;
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};
