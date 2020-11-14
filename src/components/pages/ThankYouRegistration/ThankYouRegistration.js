import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import Button from "#/components/atoms/Button";
import Text from "#/components/atoms/Text";

import "./styles.scss";

export default ({ isAuthenticated }) => {
  const history = useHistory();

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
    <div className="thank-you">
      <Text type="h2">Thank you</Text>
      <Text>Now you can log in to your account</Text>
      <Button
        className="secondary sm"
        title="Log in to your account"
        onClick={() => history.push('/login')}
      />
    </div>
  );
};
