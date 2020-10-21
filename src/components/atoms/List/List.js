import React from "react";

import './styles.scss';

const List = ({ className="", items = [] }) => (
  <div className={`list ${className}`}>
    {items.map(({ title } = {}, index) => (
      <div className="listItem" key={index}>{title}</div>
    ))}
  </div>
);

export default List;
