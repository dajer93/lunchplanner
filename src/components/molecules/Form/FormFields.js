import React from "react";

import Input from '#/components/atoms/Input';

const FormFields = ({ fields = [], form = {}, onChange, onKeyDown }) => {
  return (
    <div>
      {fields.map((field, index) => (
        <Input
          key={index}
          {...field}
          value={form[field.name] || ""}
          onChange={onChange}
          onKeyDown={onKeyDown}
          useLabel
        />
      ))}
    </div>
  );
};

export default FormFields;