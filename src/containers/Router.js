import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Button from "#/components/atoms/Button";
import Login from "#/components/pages/Login";
import Registration from "#/components/pages/Registration";
import Planner from "#/components/pages/Planner";
import withAuthentication, {
  PrivateRoute,
} from "#/containers/withAuthentication";
import ThankYouRegistration from "#/components/pages/ThankYouRegistration";

const AppRouter = (props) => {
  return (
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
          </PrivateRoute>
        </Switch>
        <Button
          className="logoutButton sm secondary"
          title="Logout"
          onClick={props.onLogout}
        />
      </div>
    </Router>
  );
};

export default withAuthentication(AppRouter);
