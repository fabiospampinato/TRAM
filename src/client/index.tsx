
/* ================================================================================
 * TRAM - Client
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {configureStore} from '../redux/store';
import Apollo from 'api/apollo';
import Settings from 'modules/settings';
import renderer from 'ui/renderer';

/* VARIABLES */

const store: Redux.Store<any> = configureStore ( browserHistory ),
      history = syncHistoryWithStore ( browserHistory, store );

/* RENDER */

renderer ( store, Apollo, history );

/* HOT */

if ( Settings.hotServer.enabled && module.hot ) {
  module.hot.accept ( 'ui/renderer', function () {
    require ( 'ui/renderer').default ( store, Apollo, history );
  });
}
