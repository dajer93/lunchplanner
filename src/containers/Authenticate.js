import React, { useState, useEffect } from "react";

import Button from "#/components/atoms/Button";
import Login from "#/components/pages/Login";

const ERROR_MESSAGE_TIMEOUT_MILLISEC = 5000;

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
      reject({ retcode: 400, message: 'Your email or password was incorrect' });
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

const Authentication = ({ children }) => {
  const [sessionData, setSessionData] = useState(initialSessionData);
  const [errorMsg, setErrorMsg] = useState('');

  const errorMessageTimeout = () => setTimeout(() => {
    setErrorMsg('');
  }, ERROR_MESSAGE_TIMEOUT_MILLISEC);

  const onLogin = async (form) => {
    try {
      const response = await handleLogin(form);
      console.log(response);
      setSessionData(response);
    } catch (e) {
      setErrorMsg(e.message);
      errorMessageTimeout();
    }
  };

  const onRegister = async (form) => {
    try {
      const response = await handleRegister(form);
      console.log(response);
    } catch (e) {
      setErrorMsg(e.message);
      errorMessageTimeout();
    }
  };

  const onLogout = () => setSessionData(initialSessionData);

  const loginProps = {
    onLogin,
    onRegister,
  };

  if (!sessionData.token) {
    return (
      <div>
        <Login {...loginProps} error={errorMsg} />
      </div>
    );
  }

  return (
    <div>
      {children}
      <Button title="Logout" onClick={onLogout} />
    </div>
  );
};

export default Authentication;
