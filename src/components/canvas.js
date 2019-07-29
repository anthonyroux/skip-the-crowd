import React, { Component} from 'react';
import '../App.css';
import Searchbar from './searchbar'


class Canvas extends Component {  

  componentDidMount(){
    console.log('CANVAS-component did mount')

  }

  render(){
      return(
        <div className="canvas">
        <div class="w3-bar w3-blue">
        <a href="#" class="w3-button"><h3>SKIP THE CROWD</h3></a>
        <img src="images/powered-by.png" height="50px" width="auto"/>
        </div>
        <Searchbar/>
        </div>
      );
  }
}


export default Canvas;