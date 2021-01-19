import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";


const useStyles = makeStyles(() => ({
   main: {
    width: "100%",
    paddingLeft: "200px"
  },
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        {/* <Navbar />
        <Home/> */}
        {/* <SignUp/> */}
        <LogIn/>
      </div>
      <div>
        <Drawer />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
