import axios from "axios";

import { getDaysOfCurrentWeek, recipes } from '#/helpers';
import { addFood, setFoods } from "#/redux/actions/recipes";
import { updateCalendarDay, removeRecipe, setCalendar } from "#/redux/actions/calendar";

import mock from "./mock";

mock.onGet("/api/foods").reply(200, recipes);
mock.onPost("/api/foods").reply(200);

const week = getDaysOfCurrentWeek();
week[0].foods = [recipes[0]];
week[1].foods = [recipes[1]];
mock.onGet("/api/calendar").reply(200, week);
mock.onPost("/api/calendar").reply(200);
mock.onDelete("/api/calendar").reply(200, []);

export const loadFoods = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/foods");

    return dispatch(setFoods(data));
  } catch (e) {
    console.dir(e);
  }
};

export const saveFood = (food) => async (dispatch) => {
  try {
    await axios.post("/api/foods", food);

    return dispatch(addFood(food));
  } catch (e) {
    console.dir(e);
  }
};

export const updateCalendar = (payload) => async (dispatch) => {
  try {
    await axios.post("/api/calendar");

    return dispatch(updateCalendarDay(payload));
  } catch (e) {
    console.dir(e);
  }
};

export const removeRecipeFromDay = (payload) => async (dispatch) => {
  try {
    await axios.delete("/api/calendar");

    return dispatch(removeRecipe(payload));
  } catch (e) {
    console.dir(e);
  }
};

export const loadCalendar = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/calendar");

    return dispatch(setCalendar(data));
  } catch (e) {
    console.dir(e);
  }
};

export const getErrorMessage = (error) => {
  const {
    response: { status },
  } = error;

  switch (status) {
    case 400: {
      return "Your email or password was incorrect";
    }

    case 500: {
      return "Server is down :(";
    }

    default: {
      return "Something went wrong";
    }
  }
};
