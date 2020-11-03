import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import Button from "#/components/atoms/Button";
import Text from "#/components/atoms/Text";
import { MONTHS_OF_THE_YEAR } from "#/constants";
import { getDaysOfCurrentWeek, isSameDay } from "#/helpers";
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
  const [deltaDay, setDeltaDay] = useState(0);
  const onUpdateCalendarDay = async (food, date) => {
    const { foods: actualFoods = [] } =
      calendar.find((day) => day.date === date) || {};

    await updateCalendar({ foods: [...actualFoods, food], date });
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

  const onReset = () => setDeltaDay(0);
  const onNextDay = () => setDeltaDay(deltaDay + 1);
  const onPrevDay = () => setDeltaDay(deltaDay - 1);

  useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar]);

  const today = new Date();
  const startingDate = new Date(today);
  startingDate.setDate(startingDate.getDate() + deltaDay);
  const week = getDaysOfCurrentWeek(startingDate).map((day) => {
    const currentDate = day.date;
    const savedVersion = calendar.find(({ date }) => isSameDay(new Date(date), currentDate));

    return savedVersion ? savedVersion : day;
  });

  return (
    <div className="calendar">
      <div className="controls">
        <Button
          className="calendarNavigation"
          type="sm secondary"
          title="Today"
          onClick={onReset}
        />
        <Button
          className="calendarNavigation"
          type="sm secondary"
          title="Previous"
          onClick={onPrevDay}
        />
        <Button
          className="calendarNavigation"
          type="sm secondary"
          title="Next"
          onClick={onNextDay}
        />
      </div>
      <div className="week">
        {week.map(({ foods, date }, index) => {
          const dateObj = new Date(date);
          if (index === 0) {
            return (
              <React.Fragment>
                <Text className="month" type="h2">
                  {MONTHS_OF_THE_YEAR[dateObj.getMonth()]}
                </Text>
                <CalendarDay
                  key={`day-${index}`}
                  updateCalendarDay={onUpdateCalendarDay}
                  onRemoveFood={onRemoveFood}
                  date={dateObj}
                  foods={foods}
                />
              </React.Fragment>
            );
          }
          return (
            <CalendarDay
              key={`day-${index}`}
              updateCalendarDay={onUpdateCalendarDay}
              onRemoveFood={onRemoveFood}
              date={dateObj}
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
