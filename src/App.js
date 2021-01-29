import { CssBaseline } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ResetPass from "./components/ResetPass";
import { useMovieConsumer } from "./context";
import PublicRoute from "./components/PublicRoute";

function App() {
  const { currentUser } = useMovieConsumer();
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <PrivateRoute
            exact
            path="/"
            //render={(props) => <Movies {...props} />}
            component={Movies}
            currentUser={currentUser}
          />
          <PrivateRoute
            path="/movie/:id"
            component={MovieInfo}
            //render={(props) => <MovieInfo {...props} />}
            currentUser={currentUser}
          />
          <PublicRoute
            path="/home"
            component={Home}
            //render={(props) => <Home {...props} />}
          />
          <PublicRoute
            path="/signup"
            component={SignUp}
            //render={(props) => <SignUp {...props} />}
          />
          <PublicRoute
            path="/login"
            component={LogIn}
            //render={(props) => <LogIn {...props} />}
          />
          <PublicRoute
            path="/reset_pass"
            component={ResetPass}
            //render={(props) => <ResetPass {...props} />}
          />
        </Switch>
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
