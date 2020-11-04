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
  let dateObject1;
  let dateObject2;
  if (date1 instanceof Date) {
    dateObject1 = date1;
  }
  if (date2 instanceof Date) {
    dateObject2 = date2;
  }
  if (typeof date1 === "string") {
    dateObject1 = new Date(date1);
  }
  if (typeof date2 === "string") {
    dateObject2 = new Date(date2);
  }
  if (typeof date1 === "number") {
    dateObject1 = (new Date()).setTime(date1);
  }
  if (typeof date2 === "number") {
    dateObject2 = (new Date()).setTime(date2);
  }
  if (date1 instanceof Date && date2 instanceof Date) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getYear() === date2.getYear()
    );
  } else if (dateObject1 instanceof Date && dateObject2 instanceof Date) {
    return (
      dateObject1.getDate() === dateObject2.getDate() &&
      dateObject1.getMonth() === dateObject2.getMonth() &&
      dateObject1.getYear() === dateObject2.getYear()
    );
  } else {
    throw TypeError("Either provide time as number, date as string or Date object.");
  }
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
