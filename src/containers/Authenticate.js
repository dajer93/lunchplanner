import React, { useCallback, useEffect, useState } from "react";
import { connect } from 'react-redux';

import Button from "#/components/atoms/Button";
import Login from "#/components/pages/Login";
import { login, register, getErrorMessage as getAuthErrorMessage } from '#/services/authentication';
import { saveSessionData, loadSessionData, emptySessionData } from '#/services/storage';
import { setSessionData, clearSessionData } from '#/redux/actions/session';

const ERROR_MESSAGE_TIMEOUT_MILLISEC = 5000;

const Authentication = ({ children, sessionData, setSessionData, clearSessionData }) => {
  const [errorMsg, setErrorMsg] = useState('');

  const errorMessageTimeout = () => setTimeout(() => {
    setErrorMsg('');
  }, ERROR_MESSAGE_TIMEOUT_MILLISEC);

  const onLogin = async (form) => {
    try {
      const data = await login(form);

      setSessionData(data);
      saveSessionData(data);
    } catch (e) {
      setErrorMsg(getAuthErrorMessage(e));
      errorMessageTimeout();
      clearSessionData();
    }
  };

  const onRegister = async (form) => {
    try {
      /* TODO */
      await register(form);
    } catch (e) {
      setErrorMsg(getAuthErrorMessage(e));
      errorMessageTimeout();
    }
  };

  const onLogout = () => {
    clearSessionData();
    emptySessionData();
  }

  const loadSessionFromStorage = useCallback(async () => {
    try {
      const sessionData = await loadSessionData() || {};
  
      if (sessionData.token) {
        setSessionData(sessionData);
      }
    } catch(e) {
      setErrorMsg(getAuthErrorMessage(e));
      errorMessageTimeout();
    }
  }, [setSessionData])

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
      <Button className="logoutButton sm secondary" title="Logout" onClick={onLogout} />
    </div>
  );
};

const mapStateToProps = state => ({
  sessionData: state.session.sessionData
});

const mapDispatchToProps = {
  setSessionData,
  clearSessionData
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
