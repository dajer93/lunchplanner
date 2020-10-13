import React, { useRef, useState } from "react";
import "#/App.css";

import Form from "#/components/molecules/Form";

import IngredientsList from "../others/IngredientsList";

const FoodList = ({ foods }) => (
    <div>
      {foods.map(({ description, name, ingredients }) => (
        <div>
          <div>{name}</div>
          <div>{description}</div>
          <IngredientsList ingredients={ingredients} />
        </div>
      ))}
    </div>
  );

export default FoodList;
