
/* IMPORT */

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Client from '../api/client';
import {configureStore} from '../redux/store';
import renderer from './renderer';

/* VARIABLES */

let store: Redux.Store<any> = configureStore ( browserHistory, window.__INITIAL_STATE__ ),
    history = syncHistoryWithStore ( browserHistory, store );

/* RENDER */

renderer ( store, Client, history );

/* HOT */

if ( module.hot ) {
  module.hot.accept ( './renderer', function () {
    require ( './renderer').default ( store, Client, history );
  });
}
