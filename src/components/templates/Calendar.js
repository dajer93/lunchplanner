import React, { useState } from "react";
import { useDrop } from "react-dnd";

import Food from "#/components/molecules/Food";

import "./calendar.css";

const TYPES = {
  FOOD: "food",
};

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
      <h3>Your calendar</h3>
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

const CalendarDay = ({ date, foods, onRemoveFood, updateCalendarDay }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: TYPES.FOOD,
    canDrop: () => true,
    drop: (item, monitor) => {
      console.log({ item, monitor });
      updateCalendarDay(item, date);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div className="date">
      <span>{date.getDate()}</span>
      <span style={{ borderBottom: "1px solid gray" }}>
        {DAYS_OF_THE_WEEK[date.getDay()]}
      </span>
      <div ref={drop} style={{ minHeight: "140px" }}>
        {!!foods.length && (
          <Food
            onRemove={() => onRemoveFood(date)}
            style={{
              width: "100%",
              marginTop: 8,
              padding: "4px 4px",
              lineHeight: 1.75,
              fontSize: "12px",
              cursor: 'pointer'
            }}
            useRemoveButton={true}
            useIngredientsList={true}
            {...foods[0]}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
