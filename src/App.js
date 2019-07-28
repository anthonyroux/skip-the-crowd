import React, { Component} from 'react';
import './App.css';
import Canvas from './components/canvas'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{},
    }
  }

  componentDidMount(){
  }


  render(){
    return(
      <div className="App">
        <Canvas/>
      </div>
    );
  }
}

export default App;
