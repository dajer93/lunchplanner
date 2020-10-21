import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import CalendarDay from "./CalendarDay";
import { loadCalendar, updateCalendar, removeRecipeFromDay } from "#/services/api";

import "./styles.scss";

const Calendar = ({ week = [], loadCalendar, removeRecipeFromDay, updateCalendar }) => {
  const onUpdateCalendarDay = (food, date) => {
    updateCalendar({ food, date });
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

  return (
    <div className="calendar">
      <div className="week">
        {week.map((day, index) => (
          <CalendarDay
            updateCalendarDay={onUpdateCalendarDay}
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

const mapStateToProps = (state) => ({
  week: state.calendar,
});

const mapDispatchToProps = {
  updateCalendar,
  removeRecipeFromDay,
  loadCalendar
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
