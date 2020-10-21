import React, { useState } from "react";

import Text from "#/components/atoms/Text";

import CalendarDay from './CalendarDay';
import { DAY_IN_MILLISECONDS} from './constants';
import "./styles.scss";

const getDaysOfCurrentWeek = () => {
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

const Calendar = () => {
  const [week, setWeek] = useState(getDaysOfCurrentWeek());

  const updateCalendarDay = (food, date) => {
    const indexOfDay = week.findIndex((day) => day.date === date);
    const newWeek = [...week];
    newWeek[indexOfDay] = {
      date: new Date(date.getTime()),
      foods: [food],
    };

    setWeek(newWeek);
  };

  const onRemoveFood = (date) => {
    const indexOfDay = week.findIndex((day) => day.date === date);
    const newWeek = [...week];
    newWeek[indexOfDay] = {
      date: new Date(date.getTime()),
      foods: [],
    };

    setWeek(newWeek);
  };

  return (
    <div className="calendar">
      <div className="week">
        {week.map((day, index) => (
          <CalendarDay
            updateCalendarDay={updateCalendarDay}
            onRemoveFood={onRemoveFood}
            {...day}
            week={week}
            key={`day-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
