import React, { useState } from "react";

import List from '#/components/atoms/List';
import Text from '#/components/atoms/Text';
import Form from '#/components/molecules/Form';

import './styles.css';

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
      <Text type="h3">Add recipe</Text>
      <Form
        fields={[
          { name: "name", title: "Name" }
        ]}
        onSubmit={onAddFood}
        submitButton="Save"
      >
        <Form
          className="addFood"
          fields={[
            { name: "ingredient", title: "" }
          ]}
          onSubmit={onAddIngredient}
          submitButton="Add new"
        >
          <List items={ingredients} />
        </Form>
      </Form>
    </div>
  );
};

export default AddFood;
