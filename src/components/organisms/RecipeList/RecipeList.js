import React from "react";

import Button from "#/components/atoms/Button";
import Text from "#/components/atoms/Text";
import Recipe from "#/components/molecules/Recipe";

import "./styles.scss";

const RecipeList = ({
  removeButtonStyle = "",
  className = "",
  recipes = [],
  setIsAddFood,
  style,
  onRemoveFood,
}) => (
  <div className={`recipeList ${className}`}>
    <div className="header">
      <Text className="headerText" type="h2">
        Your recipes
      </Text>
      <Button className="addButton sm" onClick={setIsAddFood} title="Add new" />
    </div>
    <div className="body">
      {recipes.map((food, index) => (
        <Recipe
          {...food}
          removeButtonStyle={removeButtonStyle}
          id={`food-${index}`}
          key={`food-${index}`}
          onRemove={() => onRemoveFood(food)}
          useRemoveButton
        />
      ))}
    </div>
  </div>
);

export default RecipeList;
