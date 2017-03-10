
/* ================================================================================
 * TRAM - API - Apollo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import ApolloClient, {createNetworkInterface, createBatchingNetworkInterface} from 'apollo-client';
import Environment from 'modules/environment';
import Settings from 'modules/settings';

/* APOLLO */

let networkInterface;

if ( Environment.isDevelopment ) {

  networkInterface = createNetworkInterface ({
    uri: Settings.graphql.url
  });

} else {

  networkInterface = createBatchingNetworkInterface ({
    uri: Settings.graphql.url,
    batchInterval: Settings.graphql.batchInverval
  });

}

const Apollo = new ApolloClient ({
  networkInterface,
  dataIdFromObject: object => object._id
});

/* EXPORT */

export default Apollo;
