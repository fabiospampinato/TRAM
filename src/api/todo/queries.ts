
/* ================================================================================
 * TRAM - API - Todo - Queries
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Builder from 'mongease-graphql-builder';
import './mongease';

/* QUERIES */

const get = {
  gql: Builder.query ( 'todoGet' )
};

/* EXPORT */

export {get};
