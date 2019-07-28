import React, { Component} from 'react';
import '../App.css';
import SearchResultItems from './searchresultitems';


class Searchresults extends Component {

  componentDidMount(){
      console.log('HELLO FROM THE COMPONENT DID MOUNT -SEARCH RESULTS')
  /*
      axios.get('https://the-local-weather.firebaseio.com/0/albums/0/songs.json')
      .then((response) => {
        console.log(response.data)
        this.setState({songs:response.data})
      });
     */ 
    
  }

  render(){
    //var songs1={"Munich":"munich.mp3","Rainy Zurich":"rainyZurich.mp3","Take It Easy":"takeItEasy.mp3"}
    var elements=[]
    /*
    
    GOOD EXAMPLE OF ITERATING THROUGH DICTIONARIES IN JAVASCRIPT
    https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript

    */
    var songs1=this.props.list
    for (var key in songs1) {
      console.log('hello from SEARCH RESULTS')
      console.log(key, songs1[key])
      elements.push(<SearchResultItems songName={key} src={songs1[key]} action={this.props.action}/>)
      }


    return(
        <div className="song-list"> 
      {elements}
          SEARCH RESULTS
          
        </div>
      );
  }
}

export default Searchresults;