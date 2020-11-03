import React from "react";
import { useDrop } from "react-dnd";

import Text from "#/components/atoms/Text";
import Recipe from "#/components/molecules/Recipe";

import { TYPES, DAYS_OF_THE_WEEK } from "#/constants";
import "./styles.scss";

const CalendarDay = ({ date, foods, onRemoveFood, updateCalendarDay }) => {
  const dateObj = new Date(date);
  const isToday = dateObj.getDate() === (new Date()).getDate();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: TYPES.FOOD,
    canDrop: () => true,
    drop: (item, monitor) => {
      console.log({ item, monitor, canDrop, isOver });
      updateCalendarDay(item, dateObj);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div className={`date${isToday ? ' today' : ''}`}>
      <Text className="calendarDate" type="h3">{`${dateObj.getDate()}.`}</Text>
      <Text className="calendarDay">
        {DAYS_OF_THE_WEEK[dateObj.getDay()]}
      </Text>
      <div className="container" ref={drop}>
        {foods.map((food, index) => (
          <Recipe
            {...food}
            key={index}
            className="calendarRecipe"
            onRemove={() => onRemoveFood(food, dateObj)}
            useRemoveButton={true}
            useIngredientsList={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
