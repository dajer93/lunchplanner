import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";

import RecipeList from "#/components/organisms/RecipeList";
import AddRecipe from "#/components/organisms/AddRecipe";
import { saveFood, loadFoods, deleteFood, getErrorMessage, saveIngredient } from "#/services/api";

import "./styles.scss";

const ManageRecipes = ({ loadFoods, saveFood, saveIngredient, deleteFood, recipes }) => {
  const [isAddFood, setIsAddFood] = useState(false);
  const onAddFood = (form) => {
    try {
      saveFood(form);
      setIsAddFood(false);
    } catch (e) {
      console.log(getErrorMessage(e));
    }
  };

  const fetchFoods = useCallback(async () => {
    try {
      await loadFoods();
    } catch (e) {
      console.dir(e);
    }
  }, [loadFoods]);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return isAddFood ? (
    <AddRecipe setIsAddFood={() => setIsAddFood(false)} addFood={onAddFood} saveIngredient={saveIngredient} />
  ) : (
    <RecipeList className="titleOnlyRecipe" removeButtonStyle="titleOnlyRecipeRemove" onRemoveFood={deleteFood} setIsAddFood={() => setIsAddFood(true)} recipes={recipes} />
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  ingredients: state.ingredients
});

const mapDispatchToProps = {
  loadFoods,
  deleteFood,
  saveFood,
  saveIngredient
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);
