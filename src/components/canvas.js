import React, { Component} from 'react';
import '../App.css';
import Searchbar from './searchbar'
import Searchresults from './searchresults';
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'SkRgrixdRtoF0kPj1XNtsbDMsRvwP2O5',
  clientSecret: 'b1Dw8ufFqZaTCI64'
});

if(amadeus){
  console.log('THIS WORKS')
}

class Canvas extends Component {  
  onSubmit(){
    amadeus.referenceData.urls.checkinLinks.get({
      airlineCode: 'BA'
    }).then(function(response){
      console.log(response.data);
      console.log('THE EAGLE HAS LANDED')

    }).catch(function(responseError){
      console.log(responseError.code);
      console.log('onSubmit in canvas.js has failed!')
    });
  }

  componentDidMount(){
    console.log('CANVAS-component did mount')

  }

  render(){
      return(
        <div className="canvas">
        canvas works
        SKIP THE LINE - DESTINATIONS WITH LESS CROWD AND MORE FUN
        <Searchbar/>
        </div>
      );
  }
}


export default Canvas;