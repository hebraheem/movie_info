import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";


const useStyles = makeStyles (()=>({
    main: {
      display: "flex",
    }
}))
function App() {

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Navbar/>
      <Drawer/>
      <CssBaseline/>
    </div>
  );
}

export default App;
