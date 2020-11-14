import {
  CALENDAR_CONTROLS_RESET,
  CALENDAR_CONTROLS_NEXT_DAY,
  CALENDAR_CONTROLS_PREV_DAY,
} from "../actionTypes";

export const reset = payload => ({
  type: CALENDAR_CONTROLS_RESET
});

export const nextDay = payload => ({
  type: CALENDAR_CONTROLS_NEXT_DAY
});

export const prevDay = payload => ({
  type: CALENDAR_CONTROLS_PREV_DAY
});