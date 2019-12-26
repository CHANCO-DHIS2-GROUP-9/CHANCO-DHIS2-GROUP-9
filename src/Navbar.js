import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import  dhis2Icon from './dhis2Icon.png';

//Navigation styles and  properties
const navbarstyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  DhisIcon: {
    marginRight: theme.spacing(0),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function NaVBar() {
  const classes =navbarstyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{ background: '#2c6693' }}>
        
        <Toolbar>
          {/* dhis2Icon */}
            <IconButton
              edge="start"
              className={classes.DhisIcon}
              color="inherit"
              aria-label="open drawer"
            >
            <img src={dhis2Icon} alt="dhis2Icon" width="40" height="40" />
            </IconButton>
            
           {/* appname */}
            <Typography className={classes.title} variant="h8" noWrap>
            DHIS2APP-GROUP-9 APP
            </Typography>

                {/* searchbox */}
             <div className={classes.search}>
             <div className={classes.searchIcon}>

              <SearchIcon />
            </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
             {/* menu icon */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
