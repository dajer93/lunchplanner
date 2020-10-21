import React, { useState } from "react";

import Button from "#/components/atoms/Button";
import List from "#/components/atoms/List";
import Text from "#/components/atoms/Text";
import Form from "#/components/molecules/Form";

import "./styles.scss";

const AddFood = ({ addFood, className = "", setIsAddFood }) => {
  const [ingredients, setIngredients] = useState([]);

  const onAddIngredient = (form) => {
    setIngredients([...ingredients, form]);
  };

  const onAddFood = (form) => {
    addFood({
      ingredients,
      ...form,
    });
    setIngredients([]);
  };

  return (
    <div className={`addRecipe ${className}`}>
      <div className="header">
        <Text className="headerText" type="h2">
          Add recipe
        </Text>
        <Button
          className="addButton sm secondary"
          onClick={setIsAddFood}
          title="Cancel"
        />
      </div>
      <Form
        fields={[{ name: "name", title: "Name", useLabel: "true" }]}
        onSubmit={onAddFood}
        submitButton="Save"
      >
        <Form
          className="addItem"
          fields={[{ name: "title", title: "Ingredients", useLabel: "true" }]}
          onSubmit={onAddIngredient}
          submitButton="Enter"
        >
          <List items={ingredients} />
        </Form>
      </Form>
    </div>
  );
};

export default AddFood;
