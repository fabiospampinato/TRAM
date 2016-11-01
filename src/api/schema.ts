
/* IMPORT */

import * as _ from 'lodash';
import {makeExecutableSchema} from 'graphql-tools';
import * as Scalars from './scalars';
import * as Counter from './counter';
import DatabaseU from '../utilities/database';

/* COMPONENTS */

const Components = [
  _.values ( Scalars ),
  Counter
];

/* SCHEMA */

console.log('schema',DatabaseU.makeSchema ( Components ));
console.log("resolvers",DatabaseU.makeResolvers ( Components ));

const Schema = makeExecutableSchema ({
  typeDefs: DatabaseU.makeSchema ( Components ),
  resolvers: DatabaseU.makeResolvers ( Components )
});

/* EXPORT */

export default Schema;
