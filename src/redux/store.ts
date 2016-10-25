
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';
import rootReducer from './reducers';
import Environment from '../modules/environment';

export function configureStore ( history, initialState?: any ): Redux.Store<any> {

  let middlewares: any[] = [
    routerMiddleware(history),
    thunk
  ];

  if ( Environment.isDevelopment && process.env.BROWSER ) {
    let logger = createLogger ();
    middlewares.push ( logger );
  }

  let finalCreateStore = compose(
    applyMiddleware(...middlewares),
    Environment.isDevelopment &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension() : f => f
  )(createStore);

  let store: Redux.Store<any> = finalCreateStore(rootReducer, initialState);

  if (Environment.isDevelopment && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;

}
