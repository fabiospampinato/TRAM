
/* ================================================================================
 * TRAM - API - Apollo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import ApolloClient, {createBatchingNetworkInterface} from 'apollo-client';
import Environment from 'modules/environment';
import Settings from 'modules/settings';

/* CONFIGURE */

function configureApollo ( req? ) {

  const networkInterfaceOptions = _.merge ( {}, Settings.apollo.network, {
    uri: Environment.isClient ? Settings.apollo.network.uri : `${Settings.server.url}${Settings.apollo.network.uri}`,
    opts: {
      headers: req ? req.headers : {}
    }
  });

  return new ApolloClient ({
    networkInterface: createBatchingNetworkInterface ( networkInterfaceOptions ),
    dataIdFromObject: object => object._id
  });

}

/* EXPORT */

export {configureApollo};
