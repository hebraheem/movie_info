import React from 'react'
import {
  Drawer as MuiDrawer,
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import {HighQuality, MovieFilter } from "@material-ui/icons"

const useStyles = makeStyles(() => ({
  list: {
    paddingTop: "30vh",
  },
}));

const Drawer = () => {
    const classes = useStyles();
    return (
      <MuiDrawer variant="permanent" anchor="left" className={classes.drawer}>
        <div />
        <Divider />
        <List className= {classes.list}>
          {["Movies", "Movies by Date"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <HighQuality /> : <MovieFilter />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    );
}

export default Drawer
