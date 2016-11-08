
/* =========================================================================
 * REPONAME - Redux - Modules - Todo - List
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

import {todos} from './types';

export const ADD = 'todo/list/ADD';
export const TOGGLE = 'todo/list/TOGGLE';

const initialState: todos = [];

export function listReducer ( state: todos = initialState, action ) {
  switch ( action.type ) {
    case ADD:
      return [...state, action.payload];
    case TOGGLE:
      return state.map ( todo => todo.id === action.payload.id ? Object.assign ( {}, todo, { done: !todo.done } ) : todo );
    default:
      return state;
  }
}

let todoId = 1;
export function add ( text ) {
  const id = todoId++;
  return {
    type: ADD,
    payload: { text, id, done: false }
  };
}

export function toggle ( id ) {
  return {
    type: TOGGLE,
    payload: { id }
  };
}
