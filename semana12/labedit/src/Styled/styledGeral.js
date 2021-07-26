import styled from "styled-components";
import  { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FF914D'
      },
      secondary: {
        main: '#8C52FF'
      },
      default: {
        main: '#FAFAFA'
      }
    },
  });
  
export const Body= styled.body`
background-color:#FF914D;
display:grid;
align-items:center;
justify-content:center;
width: 100vw;
min-height: 100vh;

`

