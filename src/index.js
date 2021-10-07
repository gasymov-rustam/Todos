import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./resets.css";
import App from "./App";
import { DataProvider } from "./hooks/useTodos";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
