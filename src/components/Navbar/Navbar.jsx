import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  logo: {
    textShadow: "2px 2px #ff0000",
    '&:hover' : {
       cursor: "pointer", 
    }
  },
  logoText: {
    paddingTop: "10px",
    textDecoration: "line-through",

    "&:hover" : {
        cursor: "pointer",
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={2}>
            <Typography variant="h3" className={classes.logo}>M4U</Typography>
          </Grid>
          <Grid item sm></Grid>
          <Grid item sm={4}>
            <Typography variant="h5" className={classes.logoText}>Your favMOVies StOp</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
