
/* =========================================================================
 * REPONAME - Redux - Modules - Todo - Visibility
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

import * as _ from 'lodash';

const ALL = 'ALL';
const LEFT = 'LEFT';
const DONE = 'DONE';
export const VISIBILITIES = [ALL, LEFT, DONE];

const SET = 'todo/visibility/SET';

const initialState = ALL;

export function visibilityReducer ( state = initialState, action ) {
  if ( action.payload && _.includes ( VISIBILITIES, action.payload.visibility ) ) {
    return action.payload.visibility;
  }
  return state;
}

export function filter ( todos, visibility ) {
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

export function set ( visibility ) {
  return {
    type: SET,
    payload: { visibility }
  };
}
