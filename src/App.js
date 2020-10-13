import React, { useState } from "react";
import "#/App.css";

import Form from '#/components/organisms/Form';

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  const onSubmitIngredient = (form) => {
    setIngredients([...ingredients, form]);
  };

  const onSubmitForm = (form) => {
    console.log({
      ingredients,
      ...form,
    });
  };

  return (
    <div>
      <Form
        fields={[
          { name: "name", value: "Food name", title: "Food name" },
          {
            name: "description",
            value: "Description",
            title: "Description",
            type: "textarea",
          },
        ]}
        onSubmit={onSubmitForm}
        submitButton="Save"
      >
        <Form
          fields={[
            { name: "ingredient", title: "Ingredient" },
            { name: "quantity", title: "Quantity" },
          ]}
          onSubmit={onSubmitIngredient}
          submitButton="Add new"
        >
          {ingredients.map(({ ingredient, quantity }, index) => (
            <div key={index}>{`${ingredient}: ${quantity}`}</div>
          ))}
        </Form>
      </Form>
    </div>
  );
};

export default App;
