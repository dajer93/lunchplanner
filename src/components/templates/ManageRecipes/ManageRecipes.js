import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";

import RecipeList from "#/components/organisms/RecipeList";
import AddRecipe from "#/components/organisms/AddRecipe";
import { saveFood, loadFoods, getErrorMessage } from "#/services/api";

import "./styles.scss";

const ManageRecipes = ({ loadFoods, saveFood, recipes }) => {
  const [isAddFood, setIsAddFood] = useState(false);
  const onAddFood = (form) => {
    try {
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
    <RecipeList className="smallSpacing" setIsAddFood={() => setIsAddFood(true)} foods={recipes} />
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {
  saveFood,
  loadFoods,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);
