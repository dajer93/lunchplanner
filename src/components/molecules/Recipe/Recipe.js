import React from "react";
import { useDrag } from "react-dnd";

import Button from '#/components/atoms/Button';
import Text from '#/components/atoms/Text';
import List from "#/components/atoms/List";

import './styles.css';

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
      <Text type="h4">{name}</Text>
      {useDescription && <Text type="paragraph">{description}</Text>}
      {useIngredientsList && <List items={ingredients} />}
      {useRemoveButton && <Button onClick={onRemove}>Remove</Button> }
    </div>
  );
};

export default Food;
