
export const ADD = 'todo/list/ADD';
export const TOGGLE = 'todo/list/TOGGLE';

const initialState = [];

export function listReducer ( state = initialState, action ) {
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
  let id = todoId++;
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
