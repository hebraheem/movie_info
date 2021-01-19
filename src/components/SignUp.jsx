import {
  TextField,
  InputAdornment,
  Paper,
  makeStyles,
  Typography,
  Checkbox,
  Button,
  Divider
} from "@material-ui/core";
import { AccountCircle, Telegram, MailOutline, VpnKey } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
    margin: "50px auto",
    padding: theme.spacing(4),
  },
  root: {
    "& > *": {
      margin: "auto",
      marginRight: theme.spacing(3),
      width: "27ch",
      marginBottom: theme.spacing(4),
    },
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
  },
  body: {
      marginBottom: theme.spacing(4)
  }
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.header}>
        Sign Up
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Please fill the form to create account!
      </Typography>
      <Divider className={classes.body} />
      <div className={classes.root}>
        <TextField
          label="Firstname"
          variant="outlined"
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
          className={classes.input}
          label="Password"
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
        <Checkbox />
        <Typography variant="body1" style={{ paddingTop: "12px" }}>
          I accept the terms of use & privacy policy.
        </Typography>
      </div>
      <Button
        endIcon={<Telegram />}
        variant="contained"
        color="primary"
        size="large"
      >
        Sign Up
      </Button>
      <Typography variant="body2" style={{ paddingTop: "20px" }}>
        All ready have account? login here
      </Typography>
    </Paper>
  );
};

export default SignUp;
