import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Button from "#/components/atoms/Button";
import Login from "#/components/pages/Login";
import Registration from "#/components/pages/Registration";
import Planner from "#/components/pages/Planner";
import withAuthentication from "#/containers/withAuthentication";
import ThankYouRegistration from "#/components/pages/ThankYouRegistration";

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default withAuthentication((props) => (
  <Router>
    <div>
      <Switch>
        <Route path="/login">
          <Login {...props} />
        </Route>
        <Route path="/registration">
          <Registration {...props} />
        </Route>
        <Route path="/thank-you-for-registration">
          <ThankYouRegistration {...props} />
        </Route>
        <PrivateRoute {...props} exact path="/">
          <Planner {...props} />
          <Button
            className="logoutButton sm secondary"
            title="Logout"
            onClick={props.onLogout}
          />
        </PrivateRoute>
      </Switch>
    </div>
  </Router>
));
