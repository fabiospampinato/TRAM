
/* =================================================================================
 * ARRRT - API - Counter - Queries
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import gql from 'graphql-tag';

/* QUERIES */

const get = {
  query: gql`
    query Counter ( $id: Int ) {
      counter: getCounter ( id: $id ) {
        id
        value
      }
    }
  `,
  options: ownProps => ({
    variables: {
      id: ownProps.route.counterId
    }
  })
};

/* EXPORT */

export {get};
