import { getDaysOfCurrentWeek, recipes } from '#/helpers';
import mock from '../mock';

export default () => {
  mock.onGet("/api/foods").reply(200, recipes);
  mock.onPost("/api/foods").reply(200);
  mock.onDelete("/api/foods").reply(200);
  
  const week = getDaysOfCurrentWeek();
  week[0].foods = [recipes[0]];
  week[1].foods = [recipes[1]];
  mock.onGet("/api/calendar").reply(200, week);
  mock.onPost("/api/calendar").reply(200);
  mock.onDelete("/api/calendar").reply(200);
};
