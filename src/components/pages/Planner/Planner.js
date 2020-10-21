import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Calendar from "#/components/templates/Calendar";
import ManageRecipes from "#/components/templates/ManageRecipes";

import "./styles.scss";

const Planner = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="recipes">
          <ManageRecipes />
        </div>
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </DndProvider>
  );
};

export default Planner;
