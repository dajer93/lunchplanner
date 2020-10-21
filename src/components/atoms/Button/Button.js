import React from "react";

import './styles.css';

const Button = ({ className="", name, onClick, title }) => (
  <button className={`button ${className}`} type="button" name={name} onClick={onClick}>
    {title}
  </button>
);

export default Button;
