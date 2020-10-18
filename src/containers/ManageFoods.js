import React from "react";
import { connect } from "react-redux";

import FoodList from "#/components/molecules/FoodList/FoodList";
import AddFood from "#/components/organisms/AddFood";
import { addFood } from '#/redux/actions/foods';

const ManageFoods = ({ addFood, foods }) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <AddFood style={{ width: "50%" }} addFood={addFood} />
    <FoodList style={{ width: "50%" }} foods={foods} />
  </div>
);

const mapStateToProps = state => ({
  foods: state.foods
});

const mapDispatchToProps = {
  addFood
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFoods);
