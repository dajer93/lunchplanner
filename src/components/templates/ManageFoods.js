import React, { useState } from "react";

import AddFood from "#/components/organisms/AddFood";
import FoodList from "#/components/organisms/FoodList";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);

  const addFood = food => setFoods([ ...foods, food ]);

  return (
    <div>
      <AddFood addFood={addFood} />
      <FoodList foods={foods} />
    </div>
  );
};

export default ManageFoods;
