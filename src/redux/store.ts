
/* IMPORT */

import {createStore, applyMiddleware, compose} from 'redux';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import reducers from './reducers';
import Client from '../api/client';
import Environment from '../modules/environment';

/* CONFIGURE */

function configureStore ( history, initialState?: any ) {

  let enhancers: Function[] = [],
      middlewares = [
        routerMiddleware ( history ),
        thunk,
        Client.middleware ()
      ];

  if ( Environment.isDevelopment ) {

    if ( process.env.BROWSER ) middlewares.push ( createLogger () );

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
