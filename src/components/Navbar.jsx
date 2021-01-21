import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,Button,
  Typography,
} from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'
import {useMovieConsumer} from '../context'

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
  },
  link: {
    textDecoration: "none",
  }
}));

const Navbar = () => {
  const { currentUser } = useMovieConsumer();
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={2}>
            <Link to="/" className={classes.link}>
              <Typography variant="h3" className={classes.logo}>
                M4U
              </Typography>
            </Link>
          </Grid>
          <Grid item sm></Grid>
          <Grid item sm={4}>
            <Typography variant="h5" className={classes.logoText}>
              Your favMOVies StOp{" "}
              {currentUser && (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ textDecoration: "none" }}
                >
                  log out
                </Button>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
