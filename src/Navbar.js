import React, { Component } from 'react'
import logo1 from './logo1.png'
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CommentIcon from '@material-ui/icons/Comment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-light navbar-light csss">
                    <img src={logo1} className="logo1" alt="logo" width="40" height="40" />
                    <AppsIcon alignmentBaseline='right' />
                    <MenuIcon />
                    <SearchIcon />
                    <CommentIcon />
                    <MailOutlineIcon />

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        )
    }
}
