import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {

  state = {
    hogs: hogs
  }

  selectHog = (hog) => {
    this.state.hog
  }

  render() {
      return (
        <div className="App">
            < Nav />
            <Filter/>
            <HogContainer hogs={hogs}/>
        </div>
      )
  }
}

export default App;
