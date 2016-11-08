
/* =========================================================================
 * REPONAME - API - Counter - Queries
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

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
