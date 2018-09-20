import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog.js'
import Filters from './Filters.js'

export default class App extends Component {
  
  constructor() {
    super()

    this.state = {
      hogCards: hogs.map(hog => <Hog hog={hog}/>),

      filters: {
        type: 'all'
      }
    }
  }


  handleClick = (refs) => {
    //debugger
    let option = refs.filterform.value
    //let formzz = ReactDOM.findDOMNode(this.refs.filterform)
    

    switch(option) {
    case 'all':
        this.setState({hogCards: hogs.map(hog => <Hog hog={hog}/>)})
        break;
    case 'filtergrease':
        //debugger
        let sortedHogs = hogs.filter(hog => hog.greased === true)
        this.setState({hogCards: sortedHogs.map(hog => <Hog hog={hog}/>)})
        break;
    case 'sortname':
    //debugger
      let namedHogs = hogs.sort(function(hog1, hog2){
        if (hog1.name < hog2.name)
          return -1;
        if (hog1.name> hog2.name)
          return 1;
        return 0;
      })
      this.setState({hogCards: namedHogs.map(hog => <Hog hog={hog}/>)})
      break;
    case 'sortweight':
    //debugger
      let weightedHogs = hogs.sort(function(hog1, hog2){
        if (hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          return -1;
      if (hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          return 1;
        return 0;
      })
      this.setState({hogCards: weightedHogs.map(hog => <Hog hog={hog}/>)})
      break;
    default:
        return;
    }
  }

  render() {
    //debugger
    //const hogCards = 
    //debugger

    return (
      <div className="App">
          < Nav />
          < Filters onFilterPigsClick={this.handleClick}/>
          <br></br>
          <div className="ui grid container">{this.state.hogCards}</div>
      </div>
    )
  }

}
