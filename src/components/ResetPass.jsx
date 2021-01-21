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
import React, { useRef } from "react";
//import { useMovieConsumer } from "../context";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "40%",
    minWidth: "400px",
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
  const emailRef = useRef();
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.header}>
        Password Reset
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Provide your email to reset password
      </Typography>
      <Divider className={classes.body} />
      <div>
        <TextField
          className={classes.input}
          ref={emailRef}
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
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <Button
          endIcon={<ExitToApp />}
          variant="contained"
          color="primary"
          size="large"
        >
          Reset
        </Button>
        <Button variant="outlined" color="primary" size="large">
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Go back
          </Link>
        </Button>
      </div>
    </Paper>
  );
};

export default ResetPass;
