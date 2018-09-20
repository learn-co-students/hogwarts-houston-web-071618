import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilterSortBar from './FilterSortBar'
import PigBrowser from './PigBrowser'
import hogs from '../porkers_data';


class App extends Component {

  constructor(){
    super();

    this.state = {
      currentFilter: "all",
      currentNameOrder: false,
      currentWeightOrder: false,
      hogs: hogs
    }
    // console.log(this.state.hogs)
  }
  handleGreasedFilter = filter => {
    this.setState({
      currentFilter:filter
    })

  }
  handleNameSort = sort => {
    this.setState({
      currentNameOrder: sort
    })
  }
  handleWeightSort = sort => {
    this.setState({
      currentWeightOrder: sort
    })
  }

  render() {

    return (

      <div className="App">
          <Nav />
          <FilterSortBar
          onGreasedFilterChanged={this.handleGreasedFilter}
          onSortNameChanged = {this.handleNameSort}
          onSortWeightChanged = {this.handleWeightSort}
          />
          <PigBrowser
            displaySelectedPigs = {
              this.state.currentFilter == "all" ? this.state.hogs : this.state.hogs.filter(pig => (
                 pig.greased === true
               ))
             }
             displayNameSorting = {this.state.currentNameOrder === true ? true : false}
             displayWeightSorting = {this.state.currentWeightOrder === true ? true : false}
          />


      </div>
    )
  }
}

export default App;
