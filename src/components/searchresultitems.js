import React, { Component} from 'react';
import '../App.css';


class SearchResultItems extends Component {

    click(e){
      e.preventDefault();
      this.props.handler(this.props.songName);
      console.log(this)
      return;
      }
      myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
    render(){
  
        return(
          <div>
            <br/>
          <div className="w3-container w3-grey">
          <a onClick={() => this.props.action(`/test-audio/${this.props.src}`)}>{this.props.destination }</a>
          <button class="w3-button w3-red popup" onclick="${myFunction()}">
                BOOK TRIP
              </button>
          </div>
          
          </div>
        );
    }
  }

export default SearchResultItems;