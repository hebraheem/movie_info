import { Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import { Alert } from "@material-ui/lab";

const vertical = "top";
const horizontal = "center";

const Snack = ({ message, severity }) => {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
