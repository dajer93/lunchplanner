import React, { forwardRef } from "react";
import Text from "#/components/atoms/Text";

import "./styles.scss";

const Input = (
  {
    className = "",
    name,
    onChange,
    onFocus,
    onKeyDown,
    title,
    type = "text",
    value,
    useLabel,
  },
  ref
) => {
  switch (type) {
    case "textarea":
      return (
        <div className={`input ${type} ${className}`}>
          <textarea
            ref={ref}
            type={type}
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            value={value}
          />
          {useLabel && !value && <Text className="label">{title}</Text>}
        </div>
      );

    default:
      return (
        <div className={`input ${type} ${className}`}>
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            value={value}
          />
          {useLabel && !value && <Text className="label">{title}</Text>}
        </div>
      );
  }
};

export default forwardRef(Input);
