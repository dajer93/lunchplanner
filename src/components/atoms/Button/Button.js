import React from "react";

import './styles.scss';

const Button = ({ children, className="", name, onClick, title, type="" }) => (
  <button className={`button ${type} ${className}`} type="button" name={name} onClick={onClick}>
    {title || children}
  </button>
);

export default Button;
