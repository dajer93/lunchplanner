import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import FoodList from "#/components/molecules/FoodList/FoodList";
// import ErrorMessage from "#/components/molecules/ErrorMessage";
import AddFood from "#/components/organisms/AddFood";
import { saveFood, loadFoods, getErrorMessage } from "#/services/api";

const ManageFoods = ({ loadFoods, saveFood, foods }) => {
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
      <AddFood style={{ width: "50%" }} addFood={onAddFood} />
      <FoodList style={{ width: "50%" }} foods={foods} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageFoods);
