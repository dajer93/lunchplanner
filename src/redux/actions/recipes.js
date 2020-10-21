import { ADD_FOOD, LOAD_FOODS, REMOVE_FOOD } from '../actionTypes';

export const addFood = payload => ({
  type: ADD_FOOD,
  payload
});

export const setFoods = payload => ({
  type: LOAD_FOODS,
  payload
});

export const removeFood = payload => ({
  type: REMOVE_FOOD,
  payload
})