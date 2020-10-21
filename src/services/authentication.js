import axios from "axios";

import mock from './mock';

mock.onPost("/auth/login").reply(200, {
  email: "dajer",
  token: "qwe123",
  loggedIn: Date.now(),
  retcode: 200
});

mock.onPost("/auth/register").reply(200, {
  email: "dajer",
  token: "qwe123",
  loggedIn: Date.now(),
  retcode: 200,
});

export const login = async (form = {}) => {
  const { data = {} } = await axios.post("/auth/login", form);

  return data;
};

export const register = (form = {}) => {
  const { data = {} } = axios.post("/auth/register", form);

  return data;
};

export const getErrorMessage = (error = {}) => {
  const { response: { status } = {} } = error;

  switch(status) {
    case 400: {
      return 'Your email or password was incorrect';
    }

    case 500: {
      return 'Server is down :(';
    }

    default: {
      return 'Something went wrong'
    }
  }
}