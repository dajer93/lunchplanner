import React, { useState } from "react";

import Button from '#/components/atoms/Button';
import FormFields from '#/components/molecules/FormFields';

const Form = ({ children, fields, onSubmit, submitButton }) => {
  const [form, setForm] = useState();

  const onInput = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const onClickSubmit = () => {
    onSubmit(form);
    setForm({});
  };

  const formFieldProps = {
    fields,
    form,
    onChange: onInput,
  };

  return (
    <div>
      <FormFields {...formFieldProps} />
      {children}
      <Button title={submitButton} onClick={onClickSubmit} />
    </div>
  );
};

export default Form;
