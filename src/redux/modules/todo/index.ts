
/* ================================================================================
 * TRAM - Redux - Modules - Todo
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {combineReducers} from 'redux';
import {listReducer} from './list';
import {visibilityReducer} from './visibility';

/* TODO REDUCER */

const todoReducer = combineReducers ({
  todos: listReducer,
  visibility: visibilityReducer
});

/* EXPORT */

export * from './list';
export * from './visibility';
export * from './types';
export {todoReducer};
