import { Typography, makeStyles } from "@material-ui/core";
import React from 'react'

const useStyles = makeStyles(()=>({
    loading: {
        textAlign: "center"
    }
}))
export default function Loading() {
    const classes = useStyles();
    return (
      <Typography variant="h1" className={classes.loading}>
        Loading....
      </Typography>
    );
}
