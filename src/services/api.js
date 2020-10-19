import axios from "axios";

import { addFood, setFoods } from "#/redux/actions/foods";

import mock from "./mock";

mock.onGet("/api/foods").reply(200, [
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
  },
]);

mock.onPost("/api/foods").reply(200, [
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
  },
]);

export const loadFoods = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/foods");

    return dispatch(setFoods(data));
  } catch (e) {
    console.dir(e);
  }
};

export const saveFood = (food) => async (dispatch) => {
  try {
    await axios.post("/api/foods", food);

    return dispatch(addFood(food));
  } catch (e) {
    console.dir(e);
  }
};

export const getErrorMessage = (error) => {
  const {
    response: { status },
  } = error;

  switch (status) {
    case 400: {
      return "Your email or password was incorrect";
    }

    case 500: {
      return "Server is down :(";
    }

    default: {
      return "Something went wrong";
    }
  }
};
