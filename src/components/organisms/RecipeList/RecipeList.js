import React from "react";

import Button from "#/components/atoms/Button";
import Text from "#/components/atoms/Text";
import Recipe from "#/components/molecules/Recipe";

import "./styles.scss";

const RecipeList = ({ className = "", foods = [], setIsAddFood, style }) => (
  <div className={`recipeList ${className}`}>
    <div className="header">
      <Text className="headerText" type="h2">
        Your recipes
      </Text>
      <Button className="addButton sm" onClick={setIsAddFood} title="Add new" />
    </div>
    <div className="body">
      {foods.map((food, index) => (
        <Recipe {...food} id={`food-${index}`} key={`food-${index}`} />
      ))}
    </div>
  </div>
);

export default RecipeList;
