import React, { Component } from 'react';
import Api from '../api';
import Footer from '../Footer';
import NaVBar from '../NavBar';
import SearchBox from '../SearchBox';
import { Divider } from '@material-ui/core';
import GridTile from '../GridTile';



class App extends Component {
    constructor(props) {
        super(props);
        //sate
        this.state = {
           programs:[],
        };
    }
   
     
    ///setting programs from api
    componentDidMount(){
        Api.getData().then(data => {
            console.log(data)
            this.setState({ programs : data.programs})
         }).catch(error => console.log("Error: programs"))
    }

 // updating programs 
    setPrograms =programs => {
        this.setState({
            programs,
        });
    };

    render() {
        //console.log(this.state.programs)
        return (
            <div className="">
                <NaVBar/>
                <div className ="search">
                    <SearchBox/>
                 </div>        
                 <Divider/>
                 <GridTile>
                    <lu>
                        {
                            //listing all data in alist
                         }
                        {this.state.programs.map(res => (
                        <li key={res.id}>
                         {res.displayName}                                </li>
                            ))}
                        </lu>
                    </GridTile>
                    <Footer/>

            </div>
        );
    }
}

export default App;
