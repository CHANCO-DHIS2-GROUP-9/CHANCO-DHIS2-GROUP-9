import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

//Search styles and  properties
const searchstyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: (theme.shape.borderRadius, 20),
    backgroundColor: fade(theme.palette.common.black, 0.15),
    
    marginLeft: "auto",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(-20),
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
    width: '100%',
    },
}));

export default function  SearchBox () {
    const classes = searchstyles();
    return (
     <div>
        <Toolbar>
                {/* searchbox */}
             <div className={classes.search}>
              <InputBase
                placeholder="Search by name, id"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search'}}
              />
            </div> 

            <Fab size="small" color="inherit" aria-label="search"> <SearchIcon/></Fab>
        </Toolbar>
    </div>
    );
  }