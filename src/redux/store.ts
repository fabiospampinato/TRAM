
/* ================================================================================
 * TRAM - Redux - Store
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {createStore, applyMiddleware, compose} from 'redux';
import * as createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import Environment from 'modules/environment';
import Settings from 'modules/settings';
import {configureReducers} from './reducers';

/* CONFIGURE */

function configureStore ( history, Apollo, state? ) {

  const reducers = configureReducers ( Apollo ),
        enhancers: Function[] = [],
        middlewares = [
          routerMiddleware ( history ),
          Apollo.middleware ()
        ];

  if ( Environment.isDevelopment && Environment.isClient ) {

    middlewares.push ( createLogger () );

    if ( window.__REDUX_DEVTOOLS_EXTENSION__ ) enhancers.push ( window.__REDUX_DEVTOOLS_EXTENSION__ () );

  }

  const storeCreator = compose ( applyMiddleware ( ...middlewares ), ...enhancers )( createStore ),
        store = storeCreator ( reducers, state );

  return store;

}

/* EXPORT */

export {configureStore};
