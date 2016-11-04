
/* IMPORT */

import * as _ from 'lodash';
import {makeExecutableSchema} from 'graphql-tools';
import DatabaseU from 'utilities/database';
import * as Scalars from './scalars';
import * as Counter from './counter';

/* COMPONENTS */

const Components = [
  _.values ( Scalars ),
  Counter
];

/* SCHEMA */

const Schema = makeExecutableSchema ({
  typeDefs: DatabaseU.makeSchema ( Components ),
  resolvers: DatabaseU.makeResolvers ( Components )
});

/* EXPORT */

export default Schema;
