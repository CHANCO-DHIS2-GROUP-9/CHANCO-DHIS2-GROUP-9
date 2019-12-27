import React from 'react';
import { Component } from 'react';
import GridTile from './GridTile';
import Sidebar from './Sidebar'
import NavBar from './NavBar';
// import ProgramNavBar from './ProgramNavBar';
export const App = () => {
    return (
        <div>
             {/* <ProgramNavBar/> */}
            <NavBar />
            <Sidebar/>
            <GridTile />
            
            
        </div>
    )
}

export default App;
