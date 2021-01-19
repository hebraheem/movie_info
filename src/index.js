import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { movieProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <movieProvider>
      <Router>
        <App />
      </Router>
    </movieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
