import { SESSION_LOGIN, SESSION_LOGOUT } from '../actionTypes';

export const setSessionData = payload => ({
  type: SESSION_LOGIN,
  payload
});

export const clearSessionData = () => ({
  type: SESSION_LOGOUT
})