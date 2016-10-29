
/* IMPORT */

import ApolloClient, {createNetworkInterface} from 'apollo-client';
import Environment from '../modules/environment';
import Settings from '../modules/settings';

/* CLIENT */

let networkInterface = createNetworkInterface ( Settings.graphql.endpoint );

let Client = new ApolloClient ({
  networkInterface,
  shouldBatch: Environment.isProduction,
  dataIdFromObject: object => object['id']
});

/* EXPORT */

export default Client;
