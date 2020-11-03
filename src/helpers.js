import { DAY_IN_MILLISECONDS } from '#/constants';

export const getDaysOfCurrentWeek = (date = new Date()) => {
  let week = [];
  for (let i = 0; i < 7; i++) {
    week.push({
      date: new Date(date.getTime() + i * DAY_IN_MILLISECONDS),
      foods: [],
    });
  }
  return week;
};

export const isSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getYear() === date2.getYear()
  );
}

export const recipes = [
  {
    name: "Csirkepöri galuskával",
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
