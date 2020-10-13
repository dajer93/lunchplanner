import React from "react";
import { Draggable } from "react-drag-and-drop";

import IngredientsList from "../others/IngredientsList";

const Food = ({ description, name, ingredients = [] }) => (
  <Draggable
    type="food"
    data={JSON.stringify({ description, name, ingredients })}
    style={{
      width: "25%",
      border: "1px solid lightblue",
    }}
  >
    <div>{name}</div>
    <div>{description}</div>
    <IngredientsList ingredients={ingredients} />
  </Draggable>
);

export default Food;
