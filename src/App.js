import { CssBaseline} from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
import { Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import ResetPass from "./components/ResetPass";
import {useMovieConsumer} from './context'
import PublicRoute from "./components/PublicRoute";


function App() {
  const {currentUser} = useMovieConsumer();
  return (
    <>
      <div>
          <Navbar />
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Movies}
              currentUser={currentUser}
            />
            <PrivateRoute
              path="/movie_info"
              component={MovieInfo}
              currentUser={currentUser}
            />
            <PublicRoute exact path="/home" component={Home} />
            <PublicRoute path="/signup" component={SignUp} />
            <PublicRoute path="/login" component={LogIn} />
            <PublicRoute path="/reset_pass" component={ResetPass} />
          </Switch>
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
