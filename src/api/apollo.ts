
/* ================================================================================
 * TRAM - API - Apollo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import ApolloClient, {createBatchingNetworkInterface} from 'apollo-client';
import Settings from 'modules/settings';

/* APOLLO */

const Apollo = new ApolloClient ({
  networkInterface: createBatchingNetworkInterface ( Settings.apollo ),
  dataIdFromObject: object => object._id
});

/* EXPORT */

export default Apollo;
