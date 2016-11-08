
/* =========================================================================
 * REPONAME - Client
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Client from 'api/client';
import {configureStore} from '../redux/store';
import renderer from 'ui/renderer';

/* VARIABLES */

let store: Redux.Store<any> = configureStore ( browserHistory ),
    history = syncHistoryWithStore ( browserHistory, store );

/* RENDER */

renderer ( store, Client, history );

/* HOT */

if ( module.hot ) {
  module.hot.accept ( 'ui/renderer', function () {
    require ( 'ui/renderer').default ( store, Client, history );
  });
}
