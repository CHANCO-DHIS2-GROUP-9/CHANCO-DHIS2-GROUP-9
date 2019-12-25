import React from 'react';
import { Component } from 'react';
import GridTile from './GridTile';
import NavBar from './NavBar';
import Footer from './Footer';
import SearchBox from './SearchBox'


export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SearchBox/>
                <GridTile/> 
                <Footer/>
            </div>
        )
    }
}