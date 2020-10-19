import axios from "axios";

import mock from './mock';

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
  }
]);

export const getFoods = async () => {
  const { data = [] } = await axios.get("/api/foods");

  return data;
};

export const getErrorMessage = (error) => {
  const { response: { status } } = error;

  switch(status) {
    case 400: {
      return 'Your email or password was incorrect';
    }

    case 500: {
      return 'Server is down :(';
    }

    default: {
      return 'Something went wrong'
    }
  }
}