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
//import {InboxIcon, MailIcon} from "@material-ui/icons"

const useStyles = makeStyles(() => ({
  drawer: {
    width: "20%",
    marginTop: "40vh",
    flexShrink: 0,
  },
}));

const Drawer = () => {
    const classes = useStyles();
    return (
      <MuiDrawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
      >
        <div/>
        <Divider />
        <List>
          {["Movies", "Movies by Date"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    );
}

export default Drawer
