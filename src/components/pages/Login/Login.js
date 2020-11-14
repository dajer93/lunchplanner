import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import Button from "#/components/atoms/Button";
import LoginForm from "#/components/organisms/LoginForm";

import "./styles.scss";

const Login = ({ error, onLogin, isAuthenticated }) => {
  const history = useHistory();

  const showRegistration = () => history.push("/registration");

  const handleLogin = async (data) => {
    await onLogin(data);
    history.push("/");
  };

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
    <div className="login">
      <div className="form">
        <LoginForm onLogin={handleLogin} />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div className="alternatives">
        <Button
          className="secondary sm"
          title="Register to lunchplanner"
          onClick={showRegistration}
        />
      </div>
    </div>
  );
};

export default Login;
