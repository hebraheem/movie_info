import { CssBaseline} from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import ResetPass from "./components/ResetPass";
//import {useMovieConsumer} from './context'

function App() {
  //const classes = useStyles();
  //const {currentUser} = useMovieConsumer();
  return (
    <>
      <div>
         <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Movies} />
          <PrivateRoute path="/movie_info" component={MovieInfo} />
          <Route exact path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/reset_pass" component={ResetPass} />
        </Switch>
      </div>   
      <CssBaseline />
    </>
  );
}

export default App;
