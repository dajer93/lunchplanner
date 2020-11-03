import React from "react";
import { useDrop } from "react-dnd";

import Text from "#/components/atoms/Text";
import Recipe from "#/components/molecules/Recipe";

import { TYPES, DAYS_OF_THE_WEEK } from "#/constants";
import "./styles.scss";

const CalendarDay = ({ date, foods, onRemoveFood, updateCalendarDay }) => {
  const isToday = date.getDate() === (new Date()).getDate();
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
    <div className={`date${isToday ? ' today' : ''}`}>
      <Text className="calendarDate" type="h3">{`${date.getDate()}.`}</Text>
      <Text className="calendarDay">
        {DAYS_OF_THE_WEEK[date.getDay()]}
      </Text>
      <div className="container" ref={drop}>
        {foods.map((food, index) => (
          <Recipe
            {...food}
            key={index}
            className="calendarRecipe"
            onRemove={() => onRemoveFood(food, date)}
            useRemoveButton={true}
            useIngredientsList={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
