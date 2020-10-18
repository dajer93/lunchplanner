import { ADD_FOOD } from '../actionTypes';

const initialState = [
  {
    name: "Csirkepöri",
    description: "Klasszikus...",
    ingredients: [
      { ingredient: "50dkg csirkehús" },
      { ingredient: "csipetnyi só" },
      { ingredient: "olaj" },
    ],
  },
  {
    name: "Húsleves",
    description: "blabla",
    ingredients: [
      { ingredient: "50dkg csirkehús" },
      { ingredient: "csipetnyi só" },
      { ingredient: "olaj" },
    ],
  }
];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOOD:
      return [...state, action.payload];
    default:
      return state;
  }
}