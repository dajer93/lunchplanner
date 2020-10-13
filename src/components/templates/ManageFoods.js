import React, { useState } from "react";

import AddFood from "#/components/organisms/AddFood";
import FoodList from "#/components/organisms/FoodList";

const initialFoods = [
  {
    name: "Csirkepöri",
    description: "Klasszikus...",
    ingredients: [
      { ingredient: "50dkg csirkehús" },
      { ingredient: "csipetnyi só" },
      { ingredient: "olaj" },
    ],
  },
  {
    name: "Húsleves",
    description: "blabla",
    ingredients: [
      { ingredient: "50dkg csirkehús" },
      { ingredient: "csipetnyi só" },
      { ingredient: "olaj" },
    ],
  }
];

const ManageFoods = () => {
  const [foods, setFoods] = useState(initialFoods);

  const addFood = (food) => setFoods([...foods, food]);

  console.log(foods);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AddFood style={{ width: '30%' }} addFood={addFood} />
      <FoodList  style={{ width: '70%' }} foods={foods} />
    </div>
  );
};

export default ManageFoods;
