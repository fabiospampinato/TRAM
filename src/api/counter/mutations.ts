
/* ================================================================================
 * TRAM - API - Counter - Mutations
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Builder from 'mongease-graphql-builder';
import './mongease';

/* MUTATIONS */

const increment = {
  gql: Builder.mutation ( 'counterIncrement' ),
  name: 'increment'
};

const decrement = {
  gql: Builder.mutation ( 'counterDecrement' ),
  name: 'decrement'
};

/* EXPORT */

export {increment, decrement};
