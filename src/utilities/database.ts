
/* =========================================================================
 * REPONAME - Utilities - Database
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as _ from 'lodash';

/* DATABASE */

const DatabaseU = {

  /* UTILITIES */

  _getComponentSub ( component: {}, sub?: string ): {} {

    return sub ? component[sub] || {} : component;

  },

  /* SCHEMA */

  _makeSchemaSub ( components: {}[], sub?: string ): string {

    return components.map ( component => DatabaseU._getComponentSub ( component, sub ).schema || '' ).join ( '\n' );

  },

  makeSchema ( components: {}[] ): string {

    const main = DatabaseU._makeSchemaSub ( components ),
          types = DatabaseU._makeSchemaSub ( components, 'types' ),
          query = DatabaseU._makeSchemaSub ( components, 'query' ),
          mutation = DatabaseU._makeSchemaSub ( components, 'mutation' );

    return `
      ${main}
      ${types}
      type Query {
        ${query}
      }
      type Mutation {
        ${mutation}
      }
      schema {
        query: Query,
        mutation: Mutation
      }
    `;

  },

  /* RESOLVERS */

  _makeResolversSub ( components: {}[], sub?: string ): {} {

    return _.extend ( {}, ...components.map ( component => DatabaseU._getComponentSub ( component, sub ).resolvers ) );

  },

  makeResolvers ( components: {}[] ): {} {

    const main = DatabaseU._makeResolversSub ( components ),
          types = DatabaseU._makeResolversSub ( components, 'types' ),
          Query = DatabaseU._makeResolversSub ( components, 'query' ),
          Mutation = DatabaseU._makeResolversSub ( components, 'mutation' );

    return _.extend ( main, types, {Query, Mutation} );

  }

};

/* EXPORT */

export default DatabaseU;
