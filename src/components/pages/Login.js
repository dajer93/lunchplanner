import React, { useState } from "react";

import Button from "#/components/atoms/Button";
import AuthTemplate from "#/components/templates/AuthTemplate";

const handleLogin = (form) => {
  const { email, password } = form || {};
  return new Promise((fulfill, reject) => {
    if (email === "dajer" && password === "asd") {
      fulfill({
        email: "dajer",
        token: "qwe123",
        loggedIn: Date.now(),
        retcode: 200,
      });
    } else {
      reject({ retcode: 400 });
    }
  });
};

const handleRegister = (form) => {
  const { username, password } = form || {};
  return new Promise((fulfill, reject) => {
    if (username === "dajer" && password === "asd") {
      fulfill({
        username: "dajer",
        token: null,
        loggedIn: Date.now(),
        retcode: 200,
      });
    } else {
      reject({ retcode: 400 });
    }
  });
};

const initialSessionData = {
  username: "",
  token: null,
  loggedIn: null,
  retcode: null,
};

const Login = () => {
  const [sessionData, setSessionData] = useState(initialSessionData);
  const [isRegistration, setIsRegistration] = useState(false);

  const onLogin = async (form) => {
    try {
      const response = await handleLogin(form);
      console.log(response);
      setSessionData(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onRegister = async (form) => {
    try {
      const response = await handleRegister(form);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const showRegistration = () => setIsRegistration(true);
  const showLogin = () => setIsRegistration(false);

  const authTemplateProps = {
    isRegistration,
    onLogin,
    onRegister,
  };

  return (
    <div style={{ display: "block" }}>
      <div>
        <AuthTemplate {...authTemplateProps} />
      </div>
      <div>
        --- or ---
      </div>
      <div>
        {!isRegistration && (
          <Button title="Register" onClick={showRegistration} />
        )}
        {isRegistration && <Button title="Login" onClick={showLogin} />}
      </div>
    </div>
  );
};

export default Login;
