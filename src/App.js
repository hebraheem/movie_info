import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";

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
        <Navbar />
      </div>
      <div>
        <Drawer />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
