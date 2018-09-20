import React, { Component } from 'react';
import hogs from '../porkers_data.js';
import Tile from '../components/Tile';


class Pigs extends Component {
  constructor() {
    super();
    this.state = {
      allPigs: [...hogs],
      chosenPig: null
    }
  }

handleClick = (e) => {
  if(this.state.allPigs[e.target.id]) {
    this.setState({chosenPig: this.state.allPigs[e.target.id]})
  }
}

handleSearch = (e) => {
  switch (e.target.name) {
    case 'name':
      var allPigs = [...this.state.allPigs].sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
      this.setState({allPigs})
      break;
    case 'weight':
      const key = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      var allPigs = [...this.state.allPigs].sort(function(a, b){
        if(a[key] < b[key]) return -1;
        if(a[key] > b[key]) return 1;
        return 0;
      });
      this.setState({allPigs})
      break;
    case 'greased':
      var allPigs = [...this.state.allPigs].filter(({greased}) => greased)
      this.setState({allPigs})
      default:
  }
  
}

  render() {
    const information = (obj) => {
      const arr = [];
      for (let ele in obj) {
        arr.push(`${ele}: ${obj[ele]}`)
      }
      return arr.map((element, i) => <p key={i}>{element}</p>)
    }
    const allTiles = this.state.allPigs.map(({name}, i) => {
      return (
      <Tile key={i} name={name} >
        <img id={i}  src={'./hog-imgs/' + (name.split(' ').join('_').toLowerCase()) + '.jpg'} onClick={this.handleClick}/>
        {this.state.chosenPig === this.state.allPigs[i] ? information(this.state.chosenPig) : null}
      </Tile>
    );
    });

    return (
      <div>
        <input name= "name" type="button" value="sort by name" onClick={this.handleSearch} />
        <input
          name= "weight"
          type="button"
          value="sort by weight"
          onClick={this.handleSearch}
        />
        <input
          name="greased"
          type="button"
          value="sort by greased"
          onClick={this.handleSearch}
        />
        {allTiles}
      </div>
    );
  }
}

export default Pigs;