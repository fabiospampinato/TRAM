
/* IMPORT */

import {makeExecutableSchema} from 'graphql-tools';

/* SCHEMA */

let schema = `
  type RootQuery {
    foo: String
  }

  type RootMutation {
    foo ( bar: String ): String
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

/* RESOLVERS */

let resolvers = {
  RootQuery: {
    foo: () => 'bar'
  },
  RootMutation: {
    foo: bar => bar
  }
};

/* EXPORT */

export default makeExecutableSchema ({
  typeDefs: schema,
  resolvers: resolvers,
});
