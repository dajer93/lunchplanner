import React from "react";
import { useDrag } from "react-dnd";

import Button from '#/components/atoms/Button';
import Text from '#/components/atoms/Text';
import List from "#/components/atoms/List";

import './styles.scss';

const TYPES = {
  FOOD: "food",
};

const Recipe = ({
  className = "",
  description,
  _id,
  name,
  ingredients = [],
  style,
  onRemove,
  removeButtonStyle = '',
  useDescription = false,
  useIngredientsList = false,
  useRemoveButton = false
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { _id, name, description, ingredients, type: TYPES.FOOD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={style}
      className={`recipe ${className} ${isDragging ? 'isDragging' : ''}`}
    >
      <Text type="h4">{name}</Text>
      {useDescription && <Text type="paragraph">{description}</Text>}
      {useIngredientsList && <List items={ingredients.map(item => ({ ...item, title: item.name || item.ingredient }))} />}
      {useRemoveButton && <Button className={`${removeButtonStyle} sm secondaryDelete`} onClick={onRemove}>Remove</Button> }
    </div>
  );
};

export default Recipe;
