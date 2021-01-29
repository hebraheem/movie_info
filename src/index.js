import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MovieProvider } from "./context";
import { QueryClient, QueryClientProvider } from "react-query";
//import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
// console.log(history)
const queryClient = new QueryClient();

ReactDOM.render(
  <MovieProvider>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </MovieProvider>,
  document.getElementById("root")
);
