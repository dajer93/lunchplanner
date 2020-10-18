import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const TYPES = {
  SESSION_LOGIN: 'SESSION/LOGIN_',
  SESSION_LOGOUT: 'SESSION/LOGOUT',
}

const initialState = {
  sessionData: {
    username: null,
    token: null,
    loggedIn: null
  }
};

export const sessionLogin = payload => ({
  type: TYPES.SESSION_LOGIN,
  payload
});

export const sessionLogout = () => ({
  type: TYPES.SESSION_LOGOUT
})

function reducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.SESSION_LOGIN:
      return {
        ...state,
        sessionData: action.payload
      };
    case TYPES.SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunk));;
