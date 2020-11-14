import {
  CALENDAR_CONTROLS_RESET,
  CALENDAR_CONTROLS_NEXT_DAY,
  CALENDAR_CONTROLS_PREV_DAY,
} from "../actionTypes";

const initialState = {
  deltaDay: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR_CONTROLS_RESET: {
      return {
        deltaDay: 0
      }
    }
    case CALENDAR_CONTROLS_NEXT_DAY: {
      return {
        deltaDay: state.deltaDay + 1
      }
    }
    case CALENDAR_CONTROLS_PREV_DAY: {
      return {
        deltaDay: state.deltaDay - 1
      }
    }
    default:
      return state;
  }
};
