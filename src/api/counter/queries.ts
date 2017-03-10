
/* ================================================================================
 * TRAM - API - Counter - Queries
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Builder from 'mongease-graphql-builder';
import './mongease';

/* QUERIES */

const get = {
  gql: Builder.query ( 'counterGet' )
};

/* EXPORT */

export {get};
