
export const INCREMENT: string = 'counter/INCREMENT';
export const DECREMENT: string = 'counter/DECREMENT';

const initialState = {
  count: 0
};

export function counterReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: Math.max ( 0, state.count - 1 ),
      };
    default:
      return state;
  }
}

export function increment () {
  return {
    type: INCREMENT
  };
}

export function decrement () {
  return {
    type: DECREMENT
  };
}
