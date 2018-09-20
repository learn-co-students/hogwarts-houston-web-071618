import React, { Component } from 'react'

  class FilterSortBar extends Component {
    constructor() {
      super()
    }

    filterGreased = () => {
      this.props.onFilterChanged("greased")
    }

    sortByName = () => {
      this.props.onSortNameChanged(true)
    }
    sortByWeight = () => {
      this.props.onSortWeightChanged(true)
    }

    render() {
      return (
        <div className='FilterSortBar'>
          <button onClick={this.filterGreased}>greased?</button>
          <button onClick={this.sortByName}>sort by name</button>
          <button onClick={this.sortByWeight}>sort by weight</button>
        </div>
      )
    }
  }

export default FilterSortBar;
