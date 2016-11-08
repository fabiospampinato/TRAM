
/* =========================================================================
 * ARRRT - Redux - Store
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import {createStore, applyMiddleware, compose} from 'redux';
import * as createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import Client from 'api/client';
import Environment from 'modules/environment';
import reducers from './reducers';

/* CONFIGURE */

function configureStore ( history, initialState? ) {

  const enhancers: Function[] = [],
        middlewares = [
          routerMiddleware ( history ),
          Client.middleware ()
        ];

  if ( Environment.isDevelopment && Environment.isClient ) {

    middlewares.push ( createLogger () );

    if ( window.devToolsExtension ) enhancers.push ( window.devToolsExtension () );

  }

  const storeCreator = compose ( applyMiddleware ( ...middlewares ), ...enhancers )( createStore ),
        store = storeCreator ( reducers, initialState );

  if ( Environment.isDevelopment && module.hot ) {

    module.hot.accept ( './reducers', () => store.replaceReducer ( require ( './reducers' ) ) );

  }

  return store;

}

/* EXPORT */

export {configureStore};
