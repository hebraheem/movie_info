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
  ExitToApp,
  MailOutline,
  VisibilityOff,
  Visibility,
} from "@material-ui/icons";
import React, { useState } from "react";
import {useMovieConsumer} from "../context"
import { Link, useHistory } from "react-router-dom";
import Snack from './Snack'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "40%",
    minWidth: "400px",
    margin: "50px auto",
    padding: theme.spacing(4),
  },
  input: {
    width: "94%",
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
  password: {
    display: "flex",
    justifyContent: "space-between",
    justifyItems: "center",
  },
  reset: {
    paddingTop: "20px",
    paddingRight: "20px",
  },
}));

const LogIn = () => {
  const [showType, setShowType] = useState(false);
  const classes = useStyles();
  const { login, logInput, setLogInput } = useMovieConsumer();
  const history= useHistory();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogInput({ ...logInput, [name]: value });
  };

  const HandleLogin=async()=>{

    try{
      setError('')
      await login(logInput.email, logInput.password)
      history.push("/")
    } catch(err){
      setError(err.message)
    }
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.header}>
        Log In
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Enjoy seamless movie on the go :)
      </Typography>
      {error && <Snack severity="error" message={error} />}
      <Divider className={classes.body} />
      <form>
        <div>
          <TextField
            className={classes.input}
            label="Email"
            name="email"
            value={logInput.email}
            onChange={handleChange}
            variant="outlined"
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
            // error={logInput.password <= 6}
            // helperText="password must be greater than 6 digit"
            className={classes.input}
            label="Password"
            name="password"
            value={logInput.password}
            onChange={handleChange}
            type={showType ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={() => setShowType(!showType)}>
                    {showType ? <Visibility /> : <VisibilityOff />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.password}>
          <div className={classes.checkbox}>
            <Checkbox color="primary" />
            <Typography variant="body1" style={{ paddingTop: "12px" }}>
              Remember password.
            </Typography>
          </div>
          <Typography className={classes.reset} variant="body2">
            <Link
              to="/reset_pass"
              style={{ textDecoration: "none", color: "black" }}
            >
              Reset Password
            </Link>
          </Typography>
        </div>
        <Button
          endIcon={<ExitToApp />}
          variant="contained"
          color="primary"
          size="large"
          onClick={HandleLogin}
        >
          Log In
        </Button>
      </form>
      <Typography variant="body2" style={{ paddingTop: "20px" }}>
        Don't have account?{" "}
        <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
          Sign Up here
        </Link>
      </Typography>
    </Paper>
  );
};

export default LogIn;
