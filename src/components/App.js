import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';

class App extends Component {
  state = {
    allPigs: hogs
  }
  toggleGreased=() =>{
    // this.setState({
    //   allPigs: something
    // })
    let currentlyGreased = !this.state.currentlyGreased
    let allPigs = hogs
    console.log("IMA GREASEBOI!")
    if(currentlyGreased) allPigs = hogs.filter(hog => hog.greased)

    this.setState({
      currentlyGreased,
      allPigs
    })
  }//setGreased
  setFilter = (e) => {
    console.log(e.target.value)
    let pigs = [...hogs]
    switch(e.target.value){
    case 'weight':
      const key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
      pigs = pigs.sort( (hog1, hog2) => {
        if(hog1[key] < hog2[key]){
          return -1
        } else if(hog1[key] > hog2[key]) {
          return 1
        } else {
          return 0
        }
      })
      break;
    case 'name':
      pigs = pigs.sort((a,b) => {
        if(a.name.toUpperCase() < b.name.toUpperCase()){
          return -1
        } else if(a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1
        } else {
          return 0
        }
      })
      break;
    default:


    }//switch

    //setState
    this.setState({ allPigs: pigs})
  }//setFilter

  render() {
    return (
      <div className="App">
          < Nav toggleGreased={this.toggleGreased} setFilter={this.setFilter} currentlyGreased={this.state.currentlyGreased}/>
          < PigContainer allPigs={this.state.allPigs}/>
      </div>
    )
  }
}

export default App;
