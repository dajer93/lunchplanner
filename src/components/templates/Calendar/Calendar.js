import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getDaysOfCurrentWeek } from "#/helpers";
import {
  loadCalendar,
  updateCalendar,
  removeRecipeFromDay,
} from "#/services/api";

import CalendarDay from "./CalendarDay";
import "./styles.scss";

const Calendar = ({
  calendar = [],
  loadCalendar,
  removeRecipeFromDay,
  updateCalendar,
}) => {
  const onUpdateCalendarDay = async (food, date) => {
    const { foods: actualFoods = [] } = calendar.find(day => day.date === date) || {};

    await updateCalendar({ foods: [ ...actualFoods, food], date });
  };

  const onRemoveFood = (food, date) => {
    removeRecipeFromDay({ food, date });
  };

  const fetchCalendar = useCallback(async () => {
    try {
      await loadCalendar();
    } catch (e) {
      console.dir(e);
    }
  }, [loadCalendar]);

  useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar]);

  const week = getDaysOfCurrentWeek().map((day) => {
    const currentDate = day.date;
    const savedVersion = calendar.find(
      ({ date }) => currentDate.getDay() === new Date(date).getDay()
    );

    return savedVersion ? savedVersion : day;
  });

  return (
    <div className="calendar">
      <div className="week">
        {week.map(({ foods, date }, index) => {
          return (
            <CalendarDay
              key={`day-${index}`}
              updateCalendarDay={onUpdateCalendarDay}
              onRemoveFood={onRemoveFood}
              date={date}
              foods={foods}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  calendar: state.calendar,
});

const mapDispatchToProps = {
  updateCalendar,
  removeRecipeFromDay,
  loadCalendar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
