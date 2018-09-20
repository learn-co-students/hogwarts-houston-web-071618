import React from 'react';

export default class FilterSortBar extends React.Component {
  state={

    currentFilter: "All",
    currentNameOrder: false,
    currentWeightOrder: false
  }
  filteredGreased =() => {
  this.props.onGreasedFilterChanged("greased")
  }
  sortByName = () => {
    this.props.onSortNameChanged(true)
  }
  sortByWeight = () => {
    this.props.onSortWeightChanged(true)
  }
  render(){
    return(
      <div>
        <button onClick={this.filteredGreased}>See Greased/See All</button>
        <button onClick={this.sortByName}>Oinkers By Name</button>
        <button onClick={this.sortByWeight}>Oinkers By Weight</button>
      </div>
    )
  }
}
