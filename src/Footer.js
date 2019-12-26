import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';

//Navigation styles and  properties
const footerstyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:"30px",
    background : '#2E3B55',
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      position: "center"
    },
  },
}));

export default function Footer() {
  const classes = footerstyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{ background: '#2c6693' }}>
        <Toolbar> 
          <Typography className={classes.title} variant="h8" align = "Center">
             &copy; DHIS2APP-GROUP-9 2019
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
