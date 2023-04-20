import React from "react";
import ReactDOM from "react-dom/client";

import Calculator from "./calculator/Calculator";
import App from "./components/app/App";

import "./main.css";

const calculator = new Calculator();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App calculator={calculator} />
  </React.StrictMode>
);
