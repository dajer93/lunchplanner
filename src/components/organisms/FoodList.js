import React, { useRef, useState } from "react";
import "#/App.css";

import Food from "./Food";

import "./foodList.css";

const FoodList = ({ foods, style }) => (
  <div style={style} className="list">
    {foods.map((food) => (
      <Food {...food} />
    ))}
  </div>
);

export default FoodList;
