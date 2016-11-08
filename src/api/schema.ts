
/* IMPORT */

import {makeExecutableSchema} from 'graphql-tools';
import DatabaseU from 'utilities/database';
import Components from './components';

/* SCHEMA */

const Schema = makeExecutableSchema ({
  typeDefs: DatabaseU.makeSchema ( Components ),
  resolvers: DatabaseU.makeResolvers ( Components )
});

/* EXPORT */

export default Schema;
