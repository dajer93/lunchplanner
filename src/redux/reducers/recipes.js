import { ADD_FOOD, LOAD_FOODS, REMOVE_FOOD } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOOD:
      return [...state, action.payload];
    case REMOVE_FOOD:
      const index = state.findIndex(item => item.name === action.payload.name);
      return [...state.slice(0, index), ...state.slice(index+1)];
    case LOAD_FOODS:
      return action.payload;
    default:
      return state;
  }
}