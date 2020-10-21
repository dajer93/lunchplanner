import React, { useState } from "react";
import { useDrop } from "react-dnd";

import Text from '#/components/atoms/Text';
import Recipe from "#/components/molecules/Recipe";

import "./styles.css";

const TYPES = {
  FOOD: "food",
};

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
const DAYS_OF_THE_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
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
      <Text type="h3">Calendar</Text>
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
      console.log({ item, monitor, canDrop, isOver });
      updateCalendarDay(item, date);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div className="date">
      <Text type="h2">{`${date.getDate()}.`}</Text>
      <Text style={{ borderBottom: "1px solid gray" }}>
        {DAYS_OF_THE_WEEK[date.getDay()]}
      </Text>
      <div ref={drop} style={{ minHeight: "140px" }}>
        {!!foods.length && (
          <Recipe
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
