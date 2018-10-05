import React, { Component } from 'react'
import Hog from './Hog'

class HogContainer extends Component {
  
  render() {
    //console.log(this.props)
    const hogs = this.props.hogs
    return(
      <div>
        {hogs.map(hog => {
          return (
            <div className="App">
              <Hog hog={hog} key={hog.id}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HogContainer;