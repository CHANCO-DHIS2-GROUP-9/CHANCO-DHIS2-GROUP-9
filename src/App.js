import React from 'react';
import { Component } from 'react';
import GridTile from './GridTile';
import NavBar from './NavBar';
// import ProgramNavBar from './ProgramNavBar';
export const App = () => {
    return (
        <div>
             {/* <ProgramNavBar/> */}
            <NavBar />
            <GridTile />
            
            
        </div>
    )
}

export default App;
