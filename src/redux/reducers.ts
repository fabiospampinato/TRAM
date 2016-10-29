
/* IMPORT */

import {combineReducers} from 'redux';
import {reducer} from 'redux-connect';
import {routerReducer} from 'react-router-redux';
import Client from '../api/client';
import {counterReducer} from './modules/counter';
import {starsReducer} from './modules/stars';
import {todoReducer} from './modules/todo';

/* REDUCERS */

let reducers = combineReducers ({
  reduxAsyncConnect: reducer,
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  todo: todoReducer,
  apollo: Client.reducer ()
});

/* EXPORT */

export default reducers;
