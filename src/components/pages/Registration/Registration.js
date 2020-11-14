import React from "react";
import { Redirect, useHistory } from 'react-router-dom';

import Button from "#/components/atoms/Button";
import RegistrationForm from "#/components/organisms/RegistrationForm";

import './styles.scss';

const Registration = ({ error, isAuthenticated, onRegister }) => {
  const history = useHistory();

  const showLogin = () => history.push('/login');

  if (isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: "/login" },
        }}
      />
    );
  }

  return (
    <div className='registration'>
      <div className="form">
          <RegistrationForm onRegister={onRegister} />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div className="alternatives">
        <Button className="secondary sm" title="Log in to your account" onClick={showLogin} />
      </div>
    </div>
  );
};

export default Registration;
