
/* IMPORT */

import {createStore, applyMiddleware, compose} from 'redux';
import * as createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import Client from 'api/client';
import Environment from 'modules/environment';
import reducers from './reducers';

/* CONFIGURE */

function configureStore ( history, initialState?: any ) {

  let enhancers: Function[] = [],
      middlewares = [
        routerMiddleware ( history ),
        thunk,
        Client.middleware ()
      ];

  if ( Environment.isDevelopment ) {

    if ( Environment.isClient ) middlewares.push ( createLogger () );

    if ( typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ) enhancers.push ( window.devToolsExtension () );

  }

  let storeCreator = compose ( applyMiddleware ( ...middlewares ), ...enhancers )( createStore ),
      store = storeCreator ( reducers, initialState );

  if ( Environment.isDevelopment && module['hot'] ) {

    module['hot'].accept ( './reducers', () => store.replaceReducer ( require ( './reducers' ) ) );

  }

  return store;

}

/* EXPORT */

export {configureStore};
