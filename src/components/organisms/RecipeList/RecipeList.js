import React from "react";

import Button from "#/components/atoms/Button";
import Text from "#/components/atoms/Text";
import Recipe from "#/components/molecules/Recipe";

import "./styles.scss";

const RecipeList = ({ className = "", foods = [], setIsAddFood, style, onRemoveFood }) => (
  <div className={`recipeList ${className}`}>
    <div className="header">
      <Text className="headerText" type="h2">
        Your recipes
      </Text>
      <Button className="addButton sm" onClick={setIsAddFood} title="Add new" />
    </div>
    <div className="body">
      {foods.map((food, index) => (
        <Recipe {...food} id={`food-${index}`} key={`food-${index}`} onRemove={() => onRemoveFood(food)} useRemoveButton />
      ))}
    </div>
  </div>
);

export default RecipeList;
