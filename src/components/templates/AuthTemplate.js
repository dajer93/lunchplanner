import React from "react";

import LoginForm from "#/components/organisms/LoginForm";
import RegistrationForm from "#/components/organisms/RegistrationForm";

const AuthTemplate = ({ isRegistration, onLogin, onRegister }) => {
  return isRegistration ? (
    <RegistrationForm onRegister={onRegister} />
  ) : (
    <LoginForm onLogin={onLogin} />
  );
};

export default AuthTemplate;
