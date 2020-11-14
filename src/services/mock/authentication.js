import mock from '../mock';

export default () => {
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
};