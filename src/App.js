import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles(() => ({
  main: {
    width: "100%",
    paddingLeft: "200px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/movie" component={Movies} />
          <Route path="/movie_info" component={MovieInfo} />
        </Switch>
      </div>
      <div>
        <Drawer />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
