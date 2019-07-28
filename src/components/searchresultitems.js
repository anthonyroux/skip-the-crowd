import React, { Component} from 'react';
import '../App.css';


class SearchResultItems extends Component {

    click(e){
      e.preventDefault();
      this.props.handler(this.props.songName);
      console.log(this)
      return;
      }
  
    /* CHANGE PARENT STATE FROM CHILD 
        Pass a handler function as prop to the child to achieve this
        https://www.techiediaries.com/access-update-parent-state-child-component-react/ 
    */
    //<Audioplayer src={"/test-audio/" + this.props.src} /> 
    render(){
  
        return(
          <div className="one-song">
          <a onClick={() => this.props.action(`/test-audio/${this.props.src}`)}>{this.props.songName }</a>
          </div>
        );
    }
  }

export default SearchResultItems;