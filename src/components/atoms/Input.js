import React, { forwardRef } from "react";

const Input = (
  { name, onChange, onFocus, onKeyDown, title, type = "text", value, useLabel },
  ref
) =>
  type === "textarea" ? (
    <div>
      {useLabel && <div style={{ fontSize: 14, margin: "8px 0 4px" }}>{title}</div>}
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
      {useLabel && <div style={{ fontSize: 14, margin: "8px 0 4px" }}>{title}</div>}
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
