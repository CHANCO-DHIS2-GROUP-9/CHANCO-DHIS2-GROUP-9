
//this is the grid component whill will hold all the program tiles
import React from 'react';
import ProgramTile from './ProgramTile';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

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
    <div className={classes.root}>
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