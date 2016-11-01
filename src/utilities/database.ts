
/* IMPORT */

import * as _ from 'lodash';

/* DATABASE */

const DatabaseU = {

  /* UTILITIES */

  _getComponentSub ( component, sub? ) {

    return sub ? component[sub] || {} : component;

  },

  /* SCHEMA */

  _makeSchemaSub ( components, sub? ) {

    return components.map ( component => DatabaseU._getComponentSub ( component, sub ).schema || '' ).join ( '\n' );

  },

  makeSchema ( components ) {

    let main = DatabaseU._makeSchemaSub ( components ),
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

  _makeResolversSub ( components, sub? ) {

    return _.extend ( {}, ...components.map ( component => DatabaseU._getComponentSub ( component, sub ).resolvers ) );

  },

  makeResolvers ( components ) {

    let main = DatabaseU._makeResolversSub ( components ),
        types = DatabaseU._makeResolversSub ( components, 'types' ),
        Query = DatabaseU._makeResolversSub ( components, 'query' ),
        Mutation = DatabaseU._makeResolversSub ( components, 'mutation' );

    return _.extend ( main, types, {Query, Mutation} );

  }

};

/* EXPORT */

export default DatabaseU;
