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
  VpnKey,
} from "@material-ui/icons";
import React,{useRef} from "react";
import {useMovieConsumer} from "../context"

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
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
}));

const LogIn = () => {
const emailRef = useRef();
const passwordRef= useRef();
  const classes = useStyles();
  const {hello} = useMovieConsumer();
  console.log(hello)
  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.header}>
        Log In
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Enjoy seamless movie on the go :)
      </Typography>
      <Divider className={classes.body} />
      <div>
        <TextField
          className={classes.input}
          ref = {emailRef}
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
          ref ={passwordRef}
          label="Password"
          type="password"
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
        <Checkbox color="primary"/>
        <Typography variant="body1" style={{ paddingTop: "12px" }}>
          Remember password.
        </Typography>
      </div>
      <Button
        endIcon={<ExitToApp />}
        variant="contained"
        color="primary"
        size="large"
      >
        Log In
      </Button>
      <Typography variant="body2" style={{ paddingTop: "20px" }}>
        Don't have account? Sign Up here
      </Typography>
    </Paper>
  );
};

export default LogIn;
