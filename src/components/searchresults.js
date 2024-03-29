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
    var elements=[]
    /*
    GOOD EXAMPLE OF ITERATING THROUGH DICTIONARIES IN JAVASCRIPT
    https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
    */
    var songs1=this.props.list
    for (var key in songs1) {
      console.log('hello from SEARCH RESULTS')
      console.log(key, songs1[key])
      elements.push(<SearchResultItems number={key} destination={songs1[key].destination} action={this.props.action}/>)
      }


    return(
        <div className="song-list"> 
        <br/>
        <div class="w3-display-middle">Search Results (0.2 seconds)</div>
        {elements}
        </div>
      );
  }
}

export default Searchresults;