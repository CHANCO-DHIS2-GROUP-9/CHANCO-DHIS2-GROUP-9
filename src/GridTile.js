
//this is the grid component whill will hold all the program tiles
import React from 'react';
import ProgramTile from './ProgramTile';
import App from './Side_bar'

export default class GridTile extends React.Component {
    render() {
        return (
             <div>
                <App/>
               <ProgramTile/>
            </div>
        )
    }
}
