import React, { Component } from 'react'
import HogDetails from './HogDetails'

class Hog extends Component {

  state = {
    click: false
  }
  
  selectHog = (e) => {
    this.setState({click:true})
  }
  //return 

  render() {

    return (
      <div className="pigTile"  onClick = {this.selectHog}>
        <img src={require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)}/>
        <h3>{this.props.hog.name}</h3>
        {this.state.click ? <HogDetails hog={this.props.hog}/> : null}
      </div>
    )
  }
}

export default Hog;