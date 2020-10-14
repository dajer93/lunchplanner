import React from "react";

const IngredientsList = ({ ingredients = [] }) => (
  <div style={{ margin: "4px 0" }}>
    {ingredients.map(({ ingredient }, index) => (
      <div key={index}>{ingredient}</div>
    ))}
  </div>
);

export default IngredientsList;
