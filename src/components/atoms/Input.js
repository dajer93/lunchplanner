import React from "react";

const Input = ({
  name,
  onChange,
  onFocus,
  title,
  type = "text",
  value,
  useLabel,
}) => (
  <div>
    {useLabel && <span>{title}</span>}
    <input
      type={type}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
    />
  </div>
);

export default Input;
