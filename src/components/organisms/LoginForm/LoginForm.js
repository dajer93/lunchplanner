import React from "react";

import Form from "#/components/molecules/Form";

import './styles.css';

const LoginForm = ({ onLogin, style }) => {
  return (
    <div style={style}>
      <h2>Log in to your account</h2>
      <Form
        fields={[
          { name: "email", title: "Email", type: "email" },
          { name: "password", title: "Password", type: "password" },
        ]}
        onSubmit={onLogin}
        submitButton="Login"
      />
    </div>
  );
};

export default LoginForm;
