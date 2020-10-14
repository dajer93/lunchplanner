import React, { useRef, useState } from "react";
import "#/App.css";

import Form from '#/components/molecules/Form';

import IngredientsList from '../molecules/IngredientsList';

const AddFood = ({ addFood, style }) => {
  const [ingredients, setIngredients] = useState([]);

  const onAddIngredient = form => {
    setIngredients([...ingredients, form]);
  };

  const onAddFood = form => {
    addFood({
      ingredients,
      ...form,
    });
    setIngredients([]);
  };

  return (
    <div style={style}>
      <h3>Add recipe</h3>
      <Form
        fields={[
          { name: "name", value: "Food name", title: "Food name" },
          // {
          //   name: "description",
          //   value: "Description",
          //   title: "Description",
          //   type: "textarea",
          // },
        ]}
        onSubmit={onAddFood}
        submitButton="Save"
      >
        <Form
          fields={[
            { name: "ingredient", title: "Ingredients" }
          ]}
          onSubmit={onAddIngredient}
          submitButton="Add new"
        >
          <IngredientsList ingredients={ingredients} />
        </Form>
      </Form>
    </div>
  );
};

export default AddFood;
