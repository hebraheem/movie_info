import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MovieProvider } from "./context";

ReactDOM.render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  document.getElementById("root")
);
