import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { MDBTooltip } from "mdbreact";
import "./App.css";

//program tiles styles and  properties
const programtile = makeStyles(theme => ({
  card: {
    maxWidth: 250,
    height: 200,
    margin: "auto",
    marginTop:"20px",
},

  avatar: {
    backgroundColor: "#2c6693",
    border: "1px solid white",
  }, 
  
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
cardHeader:{
  backgroundColor: "#2c6693",
  position: "inherit",
  margin: `auto`,
}
}));



  export default function ProgramTile(){
    const classes = programtile();
    return (
      //using mdbtoolpit to produce a popover a tile when a user hovers on it
      //the tile(card) is implemented within the mdbtoopit
      <MDBTooltip  className="popover" material placement="left">
         <Card className={classes.card}>
        <CardHeader className={classes.cardHeader}
            avatar={
                //the Avatar will hold the program icon - fetched from dhis2 serverusing API
                    <Avatar aria-label="icon" className={classes.avatar}>
                      icon
                     {/*<img src="fetch API" alt="#" className="rounded-circle" />*/}
                    </Avatar>
                    }

                    //program title- fetched from dhis2 serverusing API
            title={
                  <Typography gutterBottom variant="h5" component="h2">
                  Program
                  </Typography>
                  }
          />
           <Divider/>
         <CardActionArea>
          <CardContent>
            <p align = "center">
            Program type
            </p>
            <p align = "Center">
            Total enrollment
            </p>
            <p align = "center">
            other data
            </p>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="popoverText">
       program description: This popover will provide a Quick Descrption of the program
       the description data will be fetched from the api.
      </div>
      </MDBTooltip>
    );
  }
