import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { ExitToApp, Telegram } from "@material-ui/icons";
import download from '../img/download.jpeg'
import {Link} from "react-router-dom"
import { useMovieConsumer } from "../context";

const useStyles = makeStyles(() => ({
  button: {
    backgroundImage: `url(${download})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "90.8vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
}));

const Home = () => {
  const classes = useStyles();
  const {data} = useMovieConsumer()

  return (
    <div className={classes.button}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<Telegram />}
        style={{ marginRight: "20px" }}
      >
        <Link className={classes.link} to="/signup">
          Sing Up
        </Link>
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ExitToApp />}
      >
        <Link className={classes.link} to="/login">
          {" "}
          Log In
        </Link>
      </Button>
    </div>
  );
};

export default Home;
