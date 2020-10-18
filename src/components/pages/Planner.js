import React from "react";

import Calendar from "#/components/templates/Calendar";
import ManageFoods from "#/components/templates/ManageFoods";

import "./planner.css";

const Planner = () => {
  return (
    <div className="container">
      <div className="column">
        <ManageFoods />
      </div>
      <div className="column">
        <Calendar />
      </div>
    </div>
  );
};

export default Planner;
