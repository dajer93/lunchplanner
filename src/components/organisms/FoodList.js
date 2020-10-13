import React, { useRef, useState } from "react";
import "#/App.css";

import IngredientsList from "../others/IngredientsList";

import "./foodList.css";

const FoodList = ({ foods, style }) => (
    <div style={style} className="list">
      {foods.map(({ description, name, ingredients }) => (
        <div className="food">
          <div>{name}</div>
          <div>{description}</div>
          <IngredientsList ingredients={ingredients} />
        </div>
      ))}
    </div>
  );

export default FoodList;
