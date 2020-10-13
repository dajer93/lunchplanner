import React from "react";

const Button = ({ name, onClick, title }) => (
  <button type="button" name={name} onClick={onClick}>
    {title}
  </button>
);

export default Button;
