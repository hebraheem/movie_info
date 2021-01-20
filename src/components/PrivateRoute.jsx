import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useMovieConsumer } from "../context";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useMovieConsumer();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
