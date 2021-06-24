import React from "react";
import { GlobalState } from './Global/GlobalState';
import Rotas from './Routes/rotas';

function App() {
  return (
    <GlobalState>
      <Rotas/>
    </GlobalState>
  );
}

export default App;
