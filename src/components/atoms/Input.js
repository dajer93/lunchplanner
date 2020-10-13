import React, { forwardRef } from "react";

const Input = (
  { name, onChange, onFocus, onKeyDown, title, type = "text", value, useLabel },
  ref
) =>
  type === "textarea" ? (
    <div>
      {useLabel && <span>{title}</span>}
      <textarea
        ref={ref}
        type={type}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={value}
      />
    </div>
  ) : (
    <div>
      {useLabel && <span>{title}</span>}
      <input
        ref={ref}
        type={type}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={value}
      />
    </div>
  );

export default forwardRef(Input);
