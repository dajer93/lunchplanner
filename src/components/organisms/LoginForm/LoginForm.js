import React from "react";

import Text from '#/components/atoms/Text';
import Form from "#/components/molecules/Form";

import './styles.scss';

const LoginForm = ({ onLogin, style }) => {
  return (
    <div className="login">
      <Text type="h1" className="center">Log in to your account</Text>
      <Form
        fields={[
          { name: "username", title: "Email", type: "email" },
          { name: "password", title: "Password", type: "password" },
        ]}
        onSubmit={onLogin}
        submitButton="Login"
      />
    </div>
  );
};

export default LoginForm;
