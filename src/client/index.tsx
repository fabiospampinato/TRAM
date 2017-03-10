
/* ================================================================================
 * TRAM - Client
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import * as Redux from 'redux';
import Apollo from 'api/apollo';
import Settings from 'modules/settings';
import renderer from 'ui/renderer';
import {configureStore} from '../redux/store';

/* RENDER */

const store: Redux.Store<any> = configureStore ( browserHistory ),
      history = syncHistoryWithStore ( browserHistory, store );

renderer ( store, Apollo, history );

/* HOT */

if ( Settings.hotServer.enabled && module.hot ) {

  module.hot.accept ( 'ui/renderer', function () {
    require ( 'ui/renderer').default ( store, Apollo, history );
  });

}
