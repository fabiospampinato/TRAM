
/* IMPORT */

import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {ReduxAsyncConnect} from 'redux-connect';
import {configureStore} from '../redux/store';
import routes from '../routes';

/* VARIABLES */

let store: Redux.Store<any> = configureStore ( browserHistory, window.__INITIAL_STATE__ ),
    history = syncHistoryWithStore ( browserHistory, store ),
    root = document.getElementById ( 'app' );

if ( !root ) throw new Error ( 'Missing app root' );

/* RENDER */

ReactDOM.render (
  <Provider store={store} key="provider">
    <Router history={history} render={props => <ReduxAsyncConnect {...props} />}>
      {routes}
    </Router>
  </Provider>,
  root
);
