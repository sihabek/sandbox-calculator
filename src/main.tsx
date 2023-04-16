import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Calculator from "./calculator/Calculator";
import theme from "./theme";
import App from "./components/app/App";

const calculator = new Calculator();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App calculator={calculator} />
    </ThemeProvider>
  </React.StrictMode>
);
