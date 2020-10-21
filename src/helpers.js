import { DAY_IN_MILLISECONDS } from '#/constants';

export const getDaysOfCurrentWeek = () => {
  let week = [];
  const date = new Date();
  for (let i = 0; i < 7; i++) {
    week.push({
      date: new Date(date.getTime() + i * DAY_IN_MILLISECONDS),
      foods: [],
    });
  }
  return week;
};

export const recipes = [
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
];
