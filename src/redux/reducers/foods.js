import { ADD_FOOD, LOAD_FOODS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOOD:
      return [...state, action.payload];
    case LOAD_FOODS:
      return action.payload;
    default:
      return state;
  }
}