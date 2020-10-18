import { SESSION_LOGIN, SESSION_LOGOUT } from '../actionTypes';

export const sessionLogin = payload => ({
  type: SESSION_LOGIN,
  payload
});

export const sessionLogout = () => ({
  type: SESSION_LOGOUT
})