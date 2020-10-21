import React from "react";

import './styles.css';

const List = ({ className="", items = [] }) => (
  <div className={`list ${className}`}>
    {items.map(({ item }, index) => (
      <div className="listItem" key={index}>{item}</div>
    ))}
  </div>
);

export default List;
