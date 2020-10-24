import axios from "#/services/axios";

import { addFood, setFoods, removeFood } from "#/redux/actions/recipes";
import {
  updateCalendarDay,
  removeRecipe,
  setCalendar,
} from "#/redux/actions/calendar";

const getAxiosConfig = (getState) => {
  const { session: { sessionData: { token } = {} } = {} } = getState() || {};

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const loadFoods = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/recipes", getAxiosConfig(getState));

    return dispatch(setFoods(data));
  } catch (e) {
    console.dir(e);
  }
};

export const saveFood = (food) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      "/api/recipes",
      food,
      getAxiosConfig(getState)
    );

    return dispatch(addFood(data));
  } catch (e) {
    console.dir(e);
  }
};

export const deleteFood = (food = {}) => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/recipes/${food._id}`, getAxiosConfig(getState));

    return dispatch(removeFood(food));
  } catch (e) {
    console.dir(e);
  }
};

export const updateCalendar = (calendarDay) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      "/api/calendar",
      calendarDay,
      getAxiosConfig(getState)
    );

    return dispatch(updateCalendarDay(data));
  } catch (e) {
    console.dir(e);
  }
};

export const removeRecipeFromDay = ({ food, date }) => async (dispatch, getState) => {
  try {
    const { data } = await axios.delete(`/api/calendar/${date.getTime()}/${food._id}`, getAxiosConfig(getState));

    if (data.ok) {
      dispatch(removeRecipe({ food, date }));
    } else {
      // Todo: something went wrong
    }
  } catch (e) {
    console.dir(e);
  }
};

export const loadCalendar = (payload) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/calendar", getAxiosConfig(getState));

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
