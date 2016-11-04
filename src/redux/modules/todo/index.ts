
/* IMPORT */

import {combineReducers} from 'redux';
import {listReducer} from './list';
import {visibilityReducer} from './visibility';

/* TODO REDUCER */

let todoReducer = combineReducers ({
  todos: listReducer,
  visibility: visibilityReducer
});

/* EXPORT */

export * from './list';
export * from './visibility';
export * from './types';
export {todoReducer};
