
/* ================================================================================
 * TRAM - API - Apollo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import ApolloClient from 'apollo-client';
import Settings from 'modules/settings';

/* CONFIGURE */

function configureApollo ( req? ) {

  let networkInterface;

  if ( CLIENT || !Settings.graphql.local ) {

    const {createBatchingNetworkInterface} = require ( 'apollo-client' ),
          options = _.merge ( {}, Settings.apollo.network, {
            uri: Settings.graphql.url,
            opts: {
              headers: req ? req.headers : {}
            }
          });

    networkInterface = createBatchingNetworkInterface ( options );

  } else {

    const graphql = require ( 'graphql' ),
          {createLocalInterface} = require ( 'apollo-local-query' ),
          Schema = require ( './schema' ).default,
          options = {};

    if ( req ) options.context = req;

    networkInterface = createLocalInterface ( graphql, Schema, options );

  }

  return new ApolloClient ({
    networkInterface,
    dataIdFromObject: object => object._id
  });

}

/* EXPORT */

export {configureApollo};
