import React, { useState } from "react";
import { Droppable } from "react-drag-and-drop";

import Food from "#/components/organisms/Food";

import "./calendar.css";

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
const DAYS_OF_THE_WEEK = [
  "vasárnap",
  "hétfő",
  "kedd",
  "szerda",
  "csütörtök",
  "péntek",
  "szombat",
];

const getDaysOfCurrentWeek = () => {
  let week = [];
  const date = new Date();
  const firstDayOfTheWeek = new Date(date.getTime() - DAY_IN_MILLISECONDS);
  for (let i = 0; i < 7; i++) {
    week.push({
      date: new Date(firstDayOfTheWeek.getTime() + i * DAY_IN_MILLISECONDS),
      foods: [],
    });
  }
  return week;
};

const Calendar = () => {
  const [week, setWeek] = useState(getDaysOfCurrentWeek());
  const date = new Date();

  const onDrop = (data, date) => {
    const newWeek = week.filter((day) => day.date !== date);

    setWeek([...newWeek, { date: new Date(date.getTime()), foods: [JSON.parse(data.food)] }]);
  };

  return (
    <div className="week">
      {week.map(({ date, foods }) => (
        <div className="date">
          <span>{date.getDate()}</span>
          <span>{DAYS_OF_THE_WEEK[date.getDay()]}</span>
          <Droppable
            style={{ minHeight: "140px" }}
            types={["food"]}
            onDrop={(data) => onDrop(data, date)}
          >
            {!!foods.length && <Food {...foods[0]} />}
          </Droppable>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
