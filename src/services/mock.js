import AxiosMockAdapter from "axios-mock-adapter";

import { getDaysOfCurrentWeek, recipes } from '#/helpers';
import axios from "#/services/axios";

const mock = new AxiosMockAdapter(axios);

export const mockApi = () => {
  mock.onGet("/api/foods").reply(200, recipes);
  mock.onPost("/api/foods").reply(200);
  mock.onDelete("/api/foods").reply(200);
  
  const week = getDaysOfCurrentWeek();
  week[0].foods = [recipes[0]];
  week[1].foods = [recipes[1]];
  mock.onGet("/api/calendar").reply(200, week);
  mock.onPost("/api/calendar").reply(200);
  mock.onDelete("/api/calendar").reply(200);
}

export const mockAuth = () => {
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
}

export default mock;