import React from "react";
import { useDrag } from "react-dnd";

import IngredientsList from "./IngredientsList";

const TYPES = {
  FOOD: "food",
};

const Food = ({
  description,
  name,
  ingredients = [],
  style,
  onRemove,
  useDescription = false,
  useIngredientsList = false,
  useRemoveButton = false
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, description, ingredients, type: TYPES.FOOD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={style}
      className={isDragging ? 'isDragging' : ''}
    >
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      {useDescription && <div>{description}</div>}
      {useIngredientsList && <IngredientsList ingredients={ingredients} />}
      {useRemoveButton && <button style={{ marginTop: 4 }} onClick={onRemove}>Törlés</button> }
    </div>
  );
};

export default Food;
