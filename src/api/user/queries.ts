
/* ================================================================================
 * TRAM - API - User - Queries
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Builder from 'mongease-graphql-builder';
import './mongease';

/* QUERIES */

const getMe = {
  gql: Builder.query ( 'userGetMe' ),
  options: {
    forceFetch: true
  }
};

/* EXPORT */

export {getMe};
