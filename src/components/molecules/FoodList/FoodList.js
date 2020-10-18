import React from "react";
import "#/App.css";

import Food from "#/components/molecules/Food";

import "./foodList.css";

const FoodList = ({ foods, style }) => (
  <div style={style} className="list">
    <h3>Receptjeied</h3>
    {foods.map((food, index) => (
      <Food
        style={{
          padding: "8px 12px",
          margin: "2px 0",
          border: "1px solid lightblue",
          fontSize: "12px",
          cursor: 'pointer'
        }}
        {...food}
        id={`food-${index}`}
        key={`food-${index}`}
      />
    ))}
  </div>
);

export default FoodList;
