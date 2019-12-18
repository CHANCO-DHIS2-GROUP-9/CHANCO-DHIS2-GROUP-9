import React from 'react';
import { Component } from 'react';
import GridTile from './GridTile';
import NavBar from './Navbar';

export const App = () => {
    return (
        <div>
            <NavBar />
            <GridTile />
        </div>
    )
}

export default App;
