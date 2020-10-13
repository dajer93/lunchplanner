import React from "react";

const IngredientsList = ({ ingredients = [] }) =>
  ingredients.map(({ ingredient }, index) => (
    <div key={index}>{ingredient}</div>
  ));

export default IngredientsList;
