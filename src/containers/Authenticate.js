import React, { useCallback, useEffect, useState } from "react";
import { connect } from 'react-redux';

import Button from "#/components/atoms/Button";
import Login from "#/components/pages/Login";
import { login, register, getErrorMessage as getAuthErrorMessage } from '#/services/authentication';
import { saveSessionData, loadSessionData, emptySessionData } from '#/services/storage';
import { sessionLogin, sessionLogout } from '#/redux/store';

const ERROR_MESSAGE_TIMEOUT_MILLISEC = 5000;

const Authentication = ({ children, sessionData, sessionLogin, sessionLogout }) => {
  const [errorMsg, setErrorMsg] = useState('');

  const errorMessageTimeout = () => setTimeout(() => {
    setErrorMsg('');
  }, ERROR_MESSAGE_TIMEOUT_MILLISEC);

  const onLogin = async (form) => {
    try {
      const response = await login(form);
      console.log(response);
      sessionLogin(response);
      saveSessionData(response);
    } catch (e) {
      setErrorMsg(getAuthErrorMessage(e));
      errorMessageTimeout();
      sessionLogout();
    }
  };

  const onRegister = async (form) => {
    try {
      /* TODO */
      const response = await register(form);
      console.log(response);
    } catch (e) {
      setErrorMsg(getAuthErrorMessage(e));
      errorMessageTimeout();
    }
  };

  const onLogout = () => {
    sessionLogout();
    emptySessionData();
  }

  const loadSessionFromStorage = useCallback(async () => {
    const sessionData = await loadSessionData() || {};

    console.log(sessionData);

    if (sessionData.token) {
      sessionLogin(sessionData);
    }
  }, [sessionLogin])

  useEffect(() => {
    loadSessionFromStorage();
  }, [loadSessionFromStorage])

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

const mapStateToProps = state => ({
  sessionData: state.sessionData
});

const mapDispatchToProps = {
  sessionLogin,
  sessionLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
