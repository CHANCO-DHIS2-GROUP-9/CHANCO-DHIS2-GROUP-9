import React from 'react';
import { Component } from 'react';
import GridTile from './GridTile';
import NavBar from './NavBar';
import Footer from './Footer';
import SearchBox from './SearchBox'
import Divider from '@material-ui/core/Divider';

export default class App extends Component {
   
    render() {

        return (
            <div>
                <NavBar/>
                <div className="search" >
                <SearchBox/>
            </div>
                <Divider/>
                <GridTile/> 
                <Footer/>
            </div>
        );
    }
}