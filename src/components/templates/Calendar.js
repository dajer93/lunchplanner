import React from "react";

import "./calendar.css";

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
const DAYS_OF_THE_WEEK = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];

const Calendar = () => {
  const getDaysOfCurrentWeek = () => {
    const week = [];
    const date = new Date();
    const firstDayOfTheWeek = new Date(
      date.getTime() - DAY_IN_MILLISECONDS
    );
    for (let i = 0; i < 7; i++) {
      week.push(new Date(firstDayOfTheWeek.getTime() + i * DAY_IN_MILLISECONDS));
    }
    console.log(week);
    return week;
  };

  return (
    <div className="week">
      {getDaysOfCurrentWeek().map((date) => (
        <div className="date">
          <span>{date.getDate()}</span>
          <span>{DAYS_OF_THE_WEEK[date.getDay()]}</span>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
