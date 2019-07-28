import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this)
    }

    componentDidMount(){
        
    }

    logout() {
        fire.auth().signOut();
    }
    render(){
        return(
            
            <div><h1>HOME</h1><br/><button onClick={this.logout}>Logout</button>
            </div>

        )
    }
}

export default Home;