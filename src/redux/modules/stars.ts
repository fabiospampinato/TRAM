
export const GET_REQUEST: string = 'stars/GET_REQUEST';
export const GET_SUCCESS: string = 'stars/GET_SUCCESS';
export const GET_FAILURE: string = 'stars/GET_FAILURE';

const initialState = {
  isFetching: false
};

export function starsReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case GET_REQUEST:
      return Object.assign ( {}, state, { isFetching: true });
    case GET_SUCCESS:
      return Object.assign ( {}, state, {
        isFetching: false,
        count: action.payload.count
      });
    case GET_FAILURE:
      return Object.assign ( {}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true
      });
    default:
      return state;
  }
}

export function getStars () {
  return dispatch => {
    dispatch ( starsRequest () );
    return fetch ( 'https://api.github.com/repos/barbar/vortigern' )
      .then ( res => {
        if ( res.ok ) return res.json ().then ( res => dispatch ( starsSuccess ( res.stargazers_count ) ) );
        return res.json ().then ( res => dispatch ( starsFailure ( res ) ) );
      })
      .catch ( err => dispatch ( starsFailure ( err ) ) );
  };
}

export function starsRequest () {
  return {
    type: GET_REQUEST
  };
}

export function starsSuccess ( count: number ) {
  return {
    type: GET_SUCCESS,
    payload: { count }
  };
}

export function starsFailure ( message ) {
  return {
    type: GET_FAILURE,
    payload: { message }
  };
}
