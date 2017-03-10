
/* ================================================================================
 * TRAM - Client
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Client from 'api/client';
import {configureStore} from '../redux/store';
import Settings from 'modules/settings';
import renderer from 'ui/renderer';

/* VARIABLES */

const store: Redux.Store<any> = configureStore ( browserHistory ),
      history = syncHistoryWithStore ( browserHistory, store );

/* RENDER */

renderer ( store, Client, history );

/* HOT */

if ( Settings.hotServer.enabled && module.hot ) {
  module.hot.accept ( 'ui/renderer', function () {
    require ( 'ui/renderer').default ( store, Client, history );
  });
}
