import React from "react";
import { Provider } from "react-redux";

import Planner from "#/components/pages/Planner";
import Authenticate from "#/containers/Authenticate";
import store from "#/redux/store";

import "#/App.scss";

const App = () => (
  <Provider store={store}>
    <Authenticate>
      <Planner />
    </Authenticate>
  </Provider>
);

export default App;
