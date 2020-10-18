import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Calendar from "#/components/templates/Calendar";
import ManageFoods from "#/components/templates/ManageFoods";

import "./planner.css";

const Planner = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="column">
          <ManageFoods />
        </div>
        <div className="column">
          <Calendar />
        </div>
      </div>
    </DndProvider>
  );
};

export default Planner;
