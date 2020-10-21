import React, { useState } from "react";

import Button from "#/components/atoms/Button";
import LoginForm from "#/components/organisms/LoginForm";
import RegistrationForm from "#/components/organisms/RegistrationForm";

import './styles.scss';

const Login = ({ error, onLogin, onRegister }) => {
  const [isRegistration, setIsRegistration] = useState(false);

  const showRegistration = () => setIsRegistration(true);
  const showLogin = () => setIsRegistration(false);

  return (
    <div className='login'>
      <div className="form">
        {isRegistration ? (
          <RegistrationForm onRegister={onRegister} />
        ) : (
          <LoginForm onLogin={onLogin} />
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div className="alternatives">
        {!isRegistration && (
          <Button className="secondary sm" title="Register to lunchplanner" onClick={showRegistration} />
        )}
        {isRegistration && <Button className="secondary sm" title="Log in to your account" onClick={showLogin} />}
      </div>
    </div>
  );
};

export default Login;
