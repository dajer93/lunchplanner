import React from "react";
import "#/App.css";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Planner from "#/components/pages/Planner";
import Authenticate from "#/containers/Authenticate";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Authenticate>
        <Planner />
      </Authenticate>
    </DndProvider>
  );
};

export default App;
