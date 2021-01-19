import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { ExitToApp, Telegram } from "@material-ui/icons";
import download from '../img/download.jpeg'

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
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<Telegram />}
        style={{marginRight: "20px"}}
      >
        Sing Up
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ExitToApp />}
      >
        Log In
      </Button>
    </div>
  );
};

export default Home;
