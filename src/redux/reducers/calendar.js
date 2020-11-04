import {
  UPDATE_CALENDAR_DAY,
  REMOVE_RECIPE,
  LOAD_CALENDAR,
} from "../actionTypes";
import { isSameDay } from "#/helpers";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_CALENDAR_DAY: {
      const { foods, date } = action.payload;
      const indexOfDay = state.findIndex((day) => isSameDay(new Date(day.date), new Date(date)));

      if (indexOfDay === -1) {
        return [
          ...state,
          action.payload
        ]
      }

      return state.map((item, index) => {
        if (index !== indexOfDay) {
          return item;
        }

        return {
          ...item,
          foods
        };
      });
    }
    case REMOVE_RECIPE: {
      const { food, date } = action.payload;
      const indexOfDay = state.findIndex((day) => isSameDay(new Date(day.date), new Date(date)));
      const indexOfFood = state[indexOfDay].foods.findIndex(({ name }) => food.name === name);

      return state.map((item, index) => {
        if (index !== indexOfDay) {
          return item;
        }

        return {
          ...item,
          foods: [
            ...state[indexOfDay].foods.slice(0, indexOfFood),
            ...state[indexOfDay].foods.slice(indexOfFood + 1)
          ],
        };
      });
    }
    case LOAD_CALENDAR: {
      return action.payload;
    }
    default:
      return state;
  }
};
