import React from "react";
import { GlobalState } from './Global/GlobalState';
import Rotas from './Routes/rotas';
import { Body } from "./Styled/styledGeral";
import { MuiThemeProvider } from "@material-ui/core";
import {theme} from "./Styled/styledGeral"

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Body>
    <GlobalState>
      <Rotas/>
    </GlobalState>
    </Body>
    </MuiThemeProvider>
  );
}

export default App;
