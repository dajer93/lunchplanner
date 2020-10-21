import React from "react";
import "#/App.css";

import Text from '#/components/atoms/Text';
import Recipe from "#/components/molecules/Recipe";

import "./styles.css";

const FoodList = ({ foods = [], style }) => (
  <div style={style} className="list">
    <Text type="h3">Your recipes</Text>
    {foods.map((food, index) => (
      <Recipe
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
