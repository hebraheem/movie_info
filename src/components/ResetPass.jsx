import {
  TextField,
  InputAdornment,
  Paper,
  makeStyles,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import { ExitToApp, MailOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { useMovieConsumer } from "../context";
import { Link } from "react-router-dom";
import Snack from "./Snack";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "40%",
    minWidth: "350px",
    margin: "50px auto",
    padding: theme.spacing(4),
  },
  input: {
    width: "100%",
    paddingBottom: theme.spacing(4),
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

const ResetPass = () => {
  const { resetPassword } = useMovieConsumer();
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [emailField, setEmailField] = useState("");

  const handleReset = async() => {
    try {
      await resetPassword(emailField);
      setMessage("Password reset send, Check your Email.");
    } catch(err){
      setError(err.message);
    }
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.header}>
        Password Reset
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Provide your email to reset password
      </Typography>
      {error && <Snack severity="error" message={error} />}
      {message && <Snack severity="success" message={message} />}
      <Divider className={classes.body} />
      <form>
        <TextField
          className={classes.input}
          value={emailField}
          label="Email"
          required
          variant="outlined"
          onChange={(e) => setEmailField(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline />
              </InputAdornment>
            ),
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            endIcon={<ExitToApp />}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleReset}
          >
            Reset
          </Button>

          <Button variant="outlined" color="primary" size="large">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              Go back
            </Link>
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default ResetPass;
