
/* =================================================================================
 * ARRRT - API - Schema
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

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
