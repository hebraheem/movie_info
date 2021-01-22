import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import {useMovieConsumer} from '../context'
import Snack from './Snack'
import { deepOrange } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  logo: {
    textShadow: "2px 2px #ff0000",
    "&:hover": {
      cursor: "pointer",
    },
  },
  logoText: {
    paddingTop: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Navbar = () => {
  const { currentUser, logout, input, logInput } = useMovieConsumer();
  const classes = useStyles();
  const [error, setError] = useState('')
  const history = useHistory();

  const handleLogout = async()=>{
    try{
      await logout();
      history.push("/login")
    } catch(err){
      setError(err.message)
    }
  };

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
              {currentUser
                ? `Welcome ${input.email || logInput.email}`
                : "Your favMOVies StOp"}{" "}
              {currentUser && (
                <div style={{ display: "flex" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ textDecoration: "none" }}
                    onClick={handleLogout}
                  >
                    log out
                  </Button>{" "}
                  <Avatar className={classes.orange}>
                    {input.email.charAt(0).toUpperCase() ||
                      logInput.email.charAt(0).toUpperCase()}
                  </Avatar>
                </div>
              )}
            </Typography>
          </Grid>
        </Grid>
        {error && <Snack severity="error" message={error} />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
