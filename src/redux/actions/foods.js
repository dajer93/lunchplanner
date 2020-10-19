import { ADD_FOOD, LOAD_FOODS } from '../actionTypes';

export const addFood = payload => ({
  type: ADD_FOOD,
  payload
});

export const loadFoods = payload => ({
  type: LOAD_FOODS,
  payload
});