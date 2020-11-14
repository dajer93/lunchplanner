import React from "react";
import { useHistory } from 'react-router-dom';

import Form from "#/components/molecules/Form";

import './styles.css';

const RegistrationForm = ({ onRegister, style }) => {
  const history = useHistory();

  const handleRegister = async data => {
    await onRegister(data);
    history.push('/thank-you-for-registration');
  }

  return (
    <div style={style}>
      <h2>Register to lunchplanner</h2>
      <Form
        fields={[
          { name: "name", title: "Name" },
          { name: "email", title: "Email", type: "email" },
          { name: "password", title: "Password", type: "password" },
        ]}
        onSubmit={handleRegister}
        submitButton="Register"
      />
    </div>
  );
};

export default RegistrationForm;
