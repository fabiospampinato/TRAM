
/* =========================================================================
 * ARRRT - Redux - Modules - Todo - List
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ========================================================================= */

/* IMPORT */

import {todos} from './types';

/* REDUCER */

const initialState: todos = [];

function listReducer ( state: todos = initialState, action ) {
  switch ( action.type ) {
    case ADD:
      return [...state, action.payload];
    case TOGGLE:
      return state.map ( todo => todo.id === action.payload.id ? Object.assign ( {}, todo, { done: !todo.done } ) : todo );
    default:
      return state;
  }
}

/* ACTIONS */

const ADD = 'todo/list/ADD';
const TOGGLE = 'todo/list/TOGGLE';

let todoId = 1;
function add ( text ) {
  const id = todoId++;
  return {
    type: ADD,
    payload: { text, id, done: false }
  };
}

function toggle ( id ) {
  return {
    type: TOGGLE,
    payload: { id }
  };
}

/* EXPORT */

export {listReducer};
export {ADD, TOGGLE};
export {add, toggle};
