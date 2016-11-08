
/* =========================================================================
 * ARRRT - Redux - Modules - Todo - Visibility
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as _ from 'lodash';

/* VISIBILITIES */

const ALL = 'ALL';
const LEFT = 'LEFT';
const DONE = 'DONE';
const VISIBILITIES = [ALL, LEFT, DONE];

/* UTILITIES */

function filter ( todos, visibility ) {
  switch ( visibility ) {
    case ALL:
      return todos;
    case LEFT:
      return todos.filter ( todo => !todo.done );
    case DONE:
      return todos.filter ( todo => todo.done );
    default:
      return;
  }
}

/* REDUCER */

const initialState = ALL;

function visibilityReducer ( state = initialState, action ) {
  if ( action.payload && _.includes ( VISIBILITIES, action.payload.visibility ) ) {
    return action.payload.visibility;
  }
  return state;
}

/* ACTIONS */

const SET = 'todo/visibility/SET';

function set ( visibility ) {
  return {
    type: SET,
    payload: { visibility }
  };
}

/* EXPORT */

export {ALL, LEFT, DONE, VISIBILITIES};
export {filter};
export {visibilityReducer};
export {SET};
export {set};
