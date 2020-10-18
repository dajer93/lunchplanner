import { SESSION_LOGIN, SESSION_LOGOUT } from '../actionTypes';

const initialState = {
  sessionData: {
    username: null,
    token: null,
    loggedIn: null
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SESSION_LOGIN:
      return {
        ...state,
        sessionData: action.payload
      };
    case SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
}