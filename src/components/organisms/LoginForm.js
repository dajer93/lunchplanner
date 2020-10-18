import React from "react";

import Form from "#/components/molecules/Form/Form";

const LoginForm = ({ onLogin, style }) => {
  return (
    <div style={style}>
      <h2>Log in to your account</h2>
      <Form
        fields={[
          { name: "email", title: "Email" },
          { name: "password", title: "Password" },
        ]}
        onSubmit={onLogin}
        submitButton="Login"
      />
    </div>
  );
};

export default LoginForm;
