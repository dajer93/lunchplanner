import React, { useState } from "react";

import Button from '#/components/atoms/Button';
import FormFields from './FormFields';

import './styles.css';

const Form = ({ children, className, fields, onSubmit, submitButton }) => {
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

  const onKeyDown = ({ keyCode, target }) => {
    if (keyCode === 13) {
      if (target.name === fields[fields.length-1].name) {
        onSubmit(form);
        setForm({});
      }
    }
  }

  const formFieldProps = {
    fields,
    form,
    onKeyDown,
    onChange: onInput,
  };

  return (
    <div className={className}>
      <FormFields {...formFieldProps} />
      {children}
      <Button title={submitButton} onClick={onClickSubmit} />
    </div>
  );
};

export default Form;
