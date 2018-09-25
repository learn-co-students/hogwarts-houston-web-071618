import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigPen from "./PigPen"
// import Pig from "./Pig"
// import Filters from "./Filters"
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < PigPen hogs={hogs}/>

      </div>
    )
  }
}

export default App;
