import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import RecipeList from "#/components/organisms/RecipeList";
import AddRecipe from "#/components/organisms/AddRecipe";
import { saveFood, loadFoods, getErrorMessage } from "#/services/api";

const ManageRecipess = ({ loadFoods, saveFood, foods }) => {
  const onAddFood = (form) => {
    try {
      saveFood(form);
      // saveFood(form);
    } catch (e) {
      console.log(getErrorMessage(e));
    }
  };

  const fetchFoods = useCallback(async () => {
    try {
      await loadFoods();
    } catch(e) {
      console.dir(e);
    }
  }, [loadFoods]);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <AddRecipe style={{ width: "50%" }} addFood={onAddFood} />
      <RecipeList style={{ width: "50%" }} foods={foods} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

const mapDispatchToProps = {
  saveFood,
  loadFoods
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipess);
