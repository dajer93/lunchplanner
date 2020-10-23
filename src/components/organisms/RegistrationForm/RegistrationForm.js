import React, { useState } from "react";

import Form from "#/components/molecules/Form";

import './styles.css';

const RegistrationForm = ({ onRegister, style }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  if (isRegistered) {
    return (
      <div style={style}>
        <h2>Thank you</h2>
        <p>Now you can log in to your account</p>
      </div>
    );
  }

  const handleRegister = data => {
    setIsRegistered(true);
    onRegister(data);
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
