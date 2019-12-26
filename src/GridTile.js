
//this is the grid component whill will hold all the program tiles
import React from 'react';
import ProgramTile from './ProgramTile';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

//Navigation styles and  properties
const gridstyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function  GridTile () {
  const classes =  gridstyle();

  return (
    //tiles have been hardcoded, there is need for dynamic populating of the grid upon fetching API data
    <div className={classes.root}>
      {/* first row */}
      <Grid container spacing={1}>
          <Grid item xs>
             <ProgramTile/>
          </Grid>
          <Grid item xs>
             <ProgramTile/>
          </Grid>
          <Grid item xs>
              <ProgramTile/>
          </Grid>
          <Grid item xs>
              <ProgramTile/>
          </Grid>
          <Grid item xs>
              <ProgramTile/>
          </Grid>
      </Grid>

      {/* second row */}
      <Grid container spacing={1}>
          <Grid item xs>
             <ProgramTile/>
          </Grid>
          <Grid item xs>
             <ProgramTile/>
          </Grid>
          <Grid item xs>
              <ProgramTile/>
          </Grid>
          <Grid item xs>
              <ProgramTile/>
          </Grid>
          <Grid item xs>
              <ProgramTile/>
          </Grid>
      </Grid>

    </div>
  );
}