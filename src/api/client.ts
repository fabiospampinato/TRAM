
/* =========================================================================
 * ARRRT - API - Client
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import ApolloClient, {createNetworkInterface, createBatchingNetworkInterface} from 'apollo-client';
import Environment from 'modules/environment';
import Settings from 'modules/settings';

/* CLIENT */

let networkInterface;

if ( Environment.isProduction ) {

  networkInterface = createBatchingNetworkInterface ({
    uri: Settings.graphql.endpoint,
    batchInterval: Settings.graphql.batchInverval
  });

} else {

  networkInterface = createNetworkInterface ({
    uri: Settings.graphql.endpoint
  });

}

const Client = new ApolloClient ({
  networkInterface,
  dataIdFromObject: object => object['id']
});

/* EXPORT */

export default Client;
