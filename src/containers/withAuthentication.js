import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import {
  login,
  register,
  getErrorMessage as getAuthErrorMessage,
} from "#/services/authentication";
import {
  saveSessionData,
  loadSessionData,
  emptySessionData,
} from "#/services/storage";
import { setSessionData, clearSessionData } from "#/redux/actions/session";

const ERROR_MESSAGE_TIMEOUT_MILLISEC = 5000;

const withAuthentication = (WrappedComponent) => {
  class Authentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        errorMsg: "",
      };
    }

    componentDidMount() {
      this.loadSessionFromStorage();
    }

    errorMessageTimeout = () =>
      setTimeout(() => {
        this.setState({ errorMsg: "" });
      }, ERROR_MESSAGE_TIMEOUT_MILLISEC);

    onLogin = async (form) => {
      try {
        const data = await login(form);

        this.props.setSessionData(data);
        saveSessionData(data);
      } catch (e) {
        this.setState({ errorMsg: getAuthErrorMessage(e) });
        this.errorMessageTimeout();
        clearSessionData();
      }
    };

    onRegister = async (form) => {
      try {
        /* TODO */
        await register(form);
      } catch (e) {
        this.setState({ errorMsg: getAuthErrorMessage(e) });
        this.errorMessageTimeout();
      }
    };

    onLogout = () => {
      this.props.clearSessionData();
      emptySessionData();
    };

    loadSessionFromStorage = async () => {
      try {
        const sessionData = (await loadSessionData()) || {};

        if (sessionData.token) {
          this.props.setSessionData(sessionData);
        }
      } catch (e) {
        this.setState({ errorMsg: getAuthErrorMessage(e) });
        this.errorMessageTimeout();
      }
    };

    render() {
      const { sessionData } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          isAuthenticated={sessionData.token}
          onLogin={this.onLogin}
          onRegister={this.onRegister}
          onLogout={this.onLogout}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    sessionData: state.session.sessionData,
  });

  const mapDispatchToProps = {
    setSessionData,
    clearSessionData,
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
};

export default withAuthentication;
