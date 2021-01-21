import {
  TextField,
  InputAdornment,
  Paper,
  makeStyles,
  Typography,
  Checkbox,
  Button,
  Divider,
} from "@material-ui/core";
import {
  AccountCircle,
  Telegram,
  MailOutline,
  VpnKey,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { useMovieConsumer } from "../context";
import Snack from './Snack';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "40%",
    minWidth: "400px",
    margin: "50px auto",
    padding: theme.spacing(4),
  },
  root: {
    "& > *": {
      margin: "auto",
      marginRight: theme.spacing(2),
      width: "46%",
      marginBottom: theme.spacing(4),
    },
  },
  input: {
    width: "100%",
    paddingBottom: theme.spacing(4),
  },
  checkbox: {
    display: "flex",
    justifyItems: "center",
    height: "50px",
  },
  header: {
    fontWeight: "bold",
    paddingBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  body: {
    marginBottom: theme.spacing(4),
  },
}));

const SignUp = () => {
  const { signup } = useMovieConsumer();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const conPassRef = useRef("");
  const [error, setError] = useState("");
  const [delay, setDelay] = useState(false);
  const classes = useStyles();

  const handleSignup = async () => {
    if (passwordRef.current.value !== conPassRef.current.value) {
      return setError("Password not match");
    }
    try {
      setError('')
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Your request cannot be completed")
    }
    setDelay(false)
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.header}>
        Sign Up
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Please fill the form to create account!
      </Typography>
      {error && <Snack message={error} severity="error" />}
      <Divider className={classes.body} />
      <div className={classes.root}>
        <TextField
          label="Firstname"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Lastname"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.input}
          label="Email"
          required
          variant="outlined"
          ref={emailRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.input}
          label="Password"
          type="password"
          required
          ref={passwordRef}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.input}
          label="Confirm password"
          variant="outlined"
          type="password"
          ref={conPassRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={classes.checkbox}>
        <Checkbox color="primary" />
        <Typography variant="body1" style={{ paddingTop: "12px" }}>
          I accept the terms of use & privacy policy.
        </Typography>
      </div>
      <Button
        endIcon={<Telegram />}
        variant="contained"
        disabled={delay}
        color="primary"
        size="large"
        onClick={handleSignup}
      >
        Sign Up
      </Button>
      <Typography variant="body2" style={{ paddingTop: "20px" }}>
        All ready have account? {" "}
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          login here
        </Link>
      </Typography>
    </Paper>
  );
};

export default SignUp;
