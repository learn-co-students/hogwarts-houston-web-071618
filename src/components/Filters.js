import React from 'react';

export default class Filters extends React.Component {
  render() {
        console.log(this.refs)
    return (
      <div className="ui form dropdown">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" ref="filterform" id="type" style={{width:"100%"}}>
            <option value="all">All</option>
            <option value="sortname">Sort Name</option>
            <option value="sortweight">Sort Weight</option>
            <option value="filtergrease">Filter Greased</option>
          </select>
        </div>

        <div className="field">
          <button onClick={() => this.props.onFilterPigsClick(this.refs)} className="ui secondary button">Sort/Filter Pigs</button>
        </div>
      </div>
    )
  }
}
