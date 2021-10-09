import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./resets.css";
import App from "./App";
import { TodosProvider } from "./components/hooks/useTodos";

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
