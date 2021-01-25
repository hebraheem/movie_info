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
import React, { useState } from "react";
import { useMovieConsumer } from "../context";
import Snack from './Snack';
import {Link, useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "40%",
    minWidth: "350px",
    margin: "50px auto",
    padding: theme.spacing(4),
  },
  root: {
    "& > *": {
      margin: "auto",
      marginRight: theme.spacing(3),
      width: "40%",
      marginBottom: theme.spacing(4),
    },
  },
  input: {
    width: "90%",
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
  const { signup, input, setInput } = useMovieConsumer();
  const [error, setError] = useState("");
  const [check, setChecked] = useState(false);
  const [delay, setDelay] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleChange=(e)=>{
    const {value, name}= e.target;
    setInput({...input, [name]:value})
  }

  const handleSignup = async () => {
    if (input.password !== input.conPass) {
      return setError("Password not match");
    }
    if(!check){
      return setError("please Accept privacy term");
    }
    try {
      setError('')
      setDelay(true)
      await signup(input.email, input.password);
      history.push("/")
    } catch(err) {
      setError(err.message)
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
      <form>
        <div className={classes.root}>
          <TextField
            label="Firstname"
            name="firstname"
            value={input.firstname}
            variant="outlined"
            onChange={handleChange}
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
            name="lastname"
            onChange={handleChange}
            value={input.lastname}
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
            onChange={handleChange}
            name="email"
            value={input.email}
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
            name="password"
            value={input.password}
            required
            onChange={handleChange}
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
            onChange={handleChange}
            name="conPass"
            value={input.conPass}
            variant="outlined"
            type="password"
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
          <Checkbox color="primary" checked={check} onChange={(e)=>setChecked(e.target.checked)}/>
          <Typography variant="body2" style={{ paddingTop: "12px" }}>
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
      </form>
      <Typography variant="body2" style={{ paddingTop: "20px" }}>
        All ready have account?{" "}
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          login here
        </Link>
      </Typography>
    </Paper>
  );
};

export default SignUp;
