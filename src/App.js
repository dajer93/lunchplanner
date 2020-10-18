import React from "react";
import { Provider } from "react-redux";

import Planner from "#/components/pages/Planner";
import Authenticate from "#/containers/Authenticate";
import store from "#/redux/store";

import "#/App.css";

const App = () => (
  <Provider store={store}>
    <Authenticate>
      <Planner />
    </Authenticate>
  </Provider>
);

export default App;
