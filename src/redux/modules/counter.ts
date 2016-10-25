import { ICounter, ICounterAction } from '../../models/counter';

export const INCREMENT: string = 'counter/INCREMENT';
export const DECREMENT: string = 'counter/DECREMENT';

const initialState: ICounter = {
  count: 0,
};

export function counterReducer(state = initialState, action: ICounterAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: ((state.count - 1 > 0) ? state.count - 1 : 0),
      };

    default:
      return state;
  }
}

export function increment(): ICounterAction {
  return {
    type: INCREMENT,
  };
}

export function decrement(): ICounterAction {
  return {
    type: DECREMENT,
  };
}
