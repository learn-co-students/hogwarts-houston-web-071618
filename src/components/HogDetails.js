import React, { Component } from 'react'

class HogDetails extends Component {
  //this could just go below the render on HogContainer when condition is true.
  render() {
   console.log(this.props)
    return (
      <div>
        Specialty: {this.props.hog.specialty}<br/>
        Greased: {this.props.hog.greased ? 'Yes' : 'No' }<br/>
        Weight: {this.props.hog.weight}<br/>
        Medal: {this.props.hog.medal}
      </div>
    )
  }
}

export default HogDetails;