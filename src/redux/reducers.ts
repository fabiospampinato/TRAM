
/* IMPORT */

import {combineReducers} from 'redux';
import {reducer} from 'redux-connect';
import {routerReducer} from 'react-router-redux';
import {counterReducer} from './modules/counter';
import {starsReducer} from './modules/stars';

/* REDUCERS */

let reducers = combineReducers ({
  reduxAsyncConnect: reducer,
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer
});

/* EXPORT */

export default reducers;
