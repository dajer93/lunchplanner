import {
  UPDATE_CALENDAR_DAY,
  REMOVE_RECIPE,
  LOAD_CALENDAR,
} from "../actionTypes";
import { getDaysOfCurrentWeek } from "#/helpers";

export default (state = getDaysOfCurrentWeek(), action) => {
  switch (action.type) {
    case UPDATE_CALENDAR_DAY: {
      const { food, date } = action.payload;
      const indexOfDay = state.findIndex((day) => new Date(day.date).getDay() === date.getDay());

      return state.map((item, index) => {
        if (index !== indexOfDay) {
          return item;
        }

        return {
          ...item,
          foods: [food],
        };
      });
    }
    case REMOVE_RECIPE: {
      const { date } = action.payload;
      const indexOfDay = state.findIndex((day) => new Date(day.date).getDay() === date.getDay());

      return state.map((item, index) => {
        if (index !== indexOfDay) {
          return item;
        }

        return {
          ...item,
          foods: [],
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
