
/* IMPORT */

import {combineReducers} from 'redux';
import {reducer} from 'redux-connect';
import {routerReducer} from 'react-router-redux';
import Client from '../api/client';
import {todoReducer} from './modules/todo';

/* REDUCERS */

let reducers = combineReducers ({
  reduxAsyncConnect: reducer,
  routing: routerReducer,
  todo: todoReducer,
  apollo: Client.reducer ()
});

/* EXPORT */

export default reducers;
