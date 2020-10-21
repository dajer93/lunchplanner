import { UPDATE_CALENDAR_DAY, REMOVE_RECIPE, LOAD_CALENDAR } from '../actionTypes';

export const updateCalendarDay = payload => ({
  type: UPDATE_CALENDAR_DAY,
  payload
});

export const removeRecipe = payload => ({
  type: REMOVE_RECIPE,
  payload
});

export const setCalendar = payload => ({
  type: LOAD_CALENDAR,
  payload
});