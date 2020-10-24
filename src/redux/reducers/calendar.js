import {
  UPDATE_CALENDAR_DAY,
  REMOVE_RECIPE,
  LOAD_CALENDAR,
} from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_CALENDAR_DAY: {
      const { foods, date } = action.payload;
      const indexOfDay = state.findIndex((day) => new Date(day.date).getDay() === new Date(date).getDay());

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
      const indexOfDay = state.findIndex((day) => new Date(day.date).getDay() === date.getDay());
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
