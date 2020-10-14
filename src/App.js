import React from "react";
import "#/App.css";

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import Planner from '#/components/pages/Planner';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Planner />
    </DndProvider>
  );
};

export default App;
