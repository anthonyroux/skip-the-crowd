import React, { Component} from 'react';
import '../App.css';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Searchresults from './searchresults';
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'SkRgrixdRtoF0kPj1XNtsbDMsRvwP2O5',
  clientSecret: 'b1Dw8ufFqZaTCI64'
});



class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.searchButtonPress =this.searchButtonPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      from: null,
      to: null,
      enteredTo: null, // Keep track of the last day for mouseEnter.
      songs:{"Munich":"munich.mp3","Rainy Zurich":"rainyZurich.mp3","Take It Easy":"takeItEasy.mp3"},
    };
  }
  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null, // Keep track of the last day for mouseEnter.
      songs:{"Munich":"munich.mp3","Rainy Zurich":"rainyZurich.mp3","Take It Easy":"takeItEasy.mp3"},
      destinationList: null
    };
  }
  searchButtonPress() {
    // this.setState({
    //   songs: {}
    // })
    if(this.state.to!=null) {
      var ans = (this.state.to.toLocaleDateString()).split("/")
      var query = ans[2]+"-"+ ((ans[0]/10)<1 ? "0" + ans[0] : ans[0])
      console.log(query + document.getElementById('departure').value)
    
    }
    else {
      console.log('select date range')
    }

  }

  onSubmit(){
    var ans = (this.state.to.toLocaleDateString()).split("/")
    var timeQuery = ans[2]+"-"+ ((ans[0]/10)<1 ? "0" + ans[0] : ans[0])

    console.log(`departure: ${document.getElementById('departure').value} and period: ${timeQuery}`)

    amadeus.travel.analytics.airTraffic.traveled.get({
      originCityCode : document.getElementById('departure').value,
      period : timeQuery
    }).then(function(response){
      console.log(response.data);
      this.setState({
        destinationList: response.data,
      })
      console.log(`MOST TRAVELLED PLACES`)

    }).catch(function(responseError){
      console.log(responseError.code);
      console.log('onSubmit in searchbar.js has failed!')
    });
  }

  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }
  handleDayClick(day) {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
    }
  }
  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }
  handleResetClick() {
    this.setState({      
      from: null,
      to: null,
      enteredTo: null // Keep track of the last day for mouseEnter.
  });
}
  render() {
    const { from, to, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <div class="w3-display-middle">
        <img src="images/logo.png"/> <img src="images/powered-by.png" height="50px" width="auto"/><br/>
        <input type="text" class="w3-input w3-border" id="departure" placeholder="enter departure airport"></input>
        <br/> Select departure date range
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
        {/* <div>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </div> */}
        <Helmet>
        </Helmet><br/>
        <button class="w3-button w3-dark-grey" onClick={this.onSubmit}>
                Search 
              </button>
        <Searchresults list={this.state.songs}/>
      </div>
    );
  }
}

export default Searchbar;