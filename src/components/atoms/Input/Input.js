import React, { forwardRef } from "react";
import Text from "#/components/atoms/Text";

import "./styles.css";

const Input = (
  {
    className="",
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
      return <div className={`input ${type} ${className}`}>
        {useLabel && <Text className="title">{title}</Text>}
        <textarea
          ref={ref}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          value={value}
        />
      </div>;

    default:
      return <div className={`input ${type} ${className}`}>
        {useLabel && <Text className="title">{title}</Text>}
        <input
          ref={ref}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          value={value}
        />
      </div>;
  }
};

export default forwardRef(Input);
