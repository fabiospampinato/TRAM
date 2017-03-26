
/* ================================================================================
 * TRAM - Redux - Store
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import ApolloClient from 'apollo-client';
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {configureReducers} from './reducers';

/* CONFIGURE */

function configureStore ( history, Apollo: ApolloClient, state?: object ) {

  const reducers = configureReducers ( Apollo ),
        enhancers: Function[] = [],
        middlewares = [
          routerMiddleware ( history ),
          Apollo.middleware ()
        ];

  if ( CLIENT && DEVELOPMENT ) {

    const {createLogger} = require ( 'redux-logger' );

    middlewares.push ( createLogger () );

    if ( window.__REDUX_DEVTOOLS_EXTENSION__ ) enhancers.push ( window.__REDUX_DEVTOOLS_EXTENSION__ () );

  }

  const storeCreator = compose ( applyMiddleware ( ...middlewares ), ...enhancers )( createStore ),
        store = storeCreator ( reducers, state );

  return store;

}

/* EXPORT */

export {configureStore};
