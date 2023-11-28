import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f14bb7',
    },
    background: {
      default: '#000000',
    },
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
