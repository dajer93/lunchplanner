import React, { useState } from "react";

import Login from "#/components/pages/Login";

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

const Authentication = ({ children }) => {
  const [sessionData, setSessionData] = useState(initialSessionData);

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

  const loginProps = {
    onLogin,
    onRegister,
  };

  if (!sessionData.token) {
    return <Login {...loginProps} />;
  }

  return children;
};

export default Authentication;
