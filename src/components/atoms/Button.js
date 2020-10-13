import React from "react";

export const Button = ({ name, onClick, title }) => (
  <button type="button" name={name} onClick={onClick}>
    {title}
  </button>
);
