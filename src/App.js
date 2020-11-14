import React from "react";
import { Provider } from "react-redux";

import Router from "#/containers/Router";
import store from "#/redux/store";

import "#/App.scss";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
