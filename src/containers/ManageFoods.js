import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import FoodList from "#/components/molecules/FoodList/FoodList";
// import ErrorMessage from "#/components/molecules/ErrorMessage";
import AddFood from "#/components/organisms/AddFood";
import { addFood, loadFoods } from "#/redux/actions/foods";
import { getFoods, getErrorMessage } from "#/services/api";

const ManageFoods = ({ loadFoods, addFood, foods }) => {
  const onAddFood = (form) => {
    try {
      addFood(form);
    } catch (e) {
      console.log(getErrorMessage(e));
    }
  };

  const fetchFoods = useCallback(async () => {
    try {
      const foods = (await getFoods()) || [];

      if (foods.length) {
        loadFoods(foods);
      }
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
  addFood,
  loadFoods
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageFoods);
