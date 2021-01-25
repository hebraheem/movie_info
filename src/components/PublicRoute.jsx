// import React from "react";
// import {​​​​​ Route, Redirect }​​​​​ from"react-router-dom";

// const PublicRoute = ({​​​​​ component: Component, ...rest }​​​​​) => {​​​​​
// return (
// <Route
// {​​​​​...rest}​​​​​
// render={​​​​​(props) => {​​​​​
// const content = Auth.isAuthenticated() ? (
// <Redirect
// to=​​​​​"/"/>
//         ) : (
// <Component{​​​​​...props}​​​​​/>
//         );
// return content;
//       }​​​​​}​​​​​
// />
//   );
// }​​​​​;
// export default PublicRoute;
//////////////////////////////////////////////

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useMovieConsumer } from "../context";

function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useMovieConsumer();
  return (
    <Route
     {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Component {...props} />;
      }}
    ></Route>
  );
}

export default PublicRoute;
