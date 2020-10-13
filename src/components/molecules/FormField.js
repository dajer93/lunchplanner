import React from "react";

export const FormFields = ({ fields = [], form = {}, onChange }) => {
  return (
    <form>
      {fields.map((field, index) => (
        <Input
          key={index}
          {...field}
          value={form[field.name] || field.value || ""}
          onChange={onChange}
        />
      ))}
    </form>
  );
};
