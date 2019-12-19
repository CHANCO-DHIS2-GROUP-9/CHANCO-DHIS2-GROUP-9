
//this is the grid component whill will hold all the program tiles
import React from 'react';
import ProgramTile from './ProgramTile';
import { Component } from 'react';

export default class GridTile extends Component {
    render() {
        return (
             <div>
                <ProgramTile/>
            </div>
        )
    }
}
