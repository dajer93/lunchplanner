import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";

import RecipeList from "#/components/organisms/RecipeList";
import AddRecipe from "#/components/organisms/AddRecipe";
import { saveFood, loadFoods, deleteFood, getErrorMessage } from "#/services/api";

import "./styles.scss";

const ManageRecipes = ({ loadFoods, saveFood, deleteFood, recipes }) => {
  const [isAddFood, setIsAddFood] = useState(false);
  const onAddFood = (form) => {
    try {
      console.log(form);
      saveFood(form);
      setIsAddFood(false);
      // saveFood(form);
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
    <AddRecipe setIsAddFood={() => setIsAddFood(false)} addFood={onAddFood} />
  ) : (
    <RecipeList className="titleOnlyRecipe" removeButtonStyle="titleOnlyRecipeRemove" onRemoveFood={deleteFood} setIsAddFood={() => setIsAddFood(true)} recipes={recipes} />
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {
  saveFood,
  loadFoods,
  deleteFood
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);
