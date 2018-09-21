import React, { Component } from 'react'
//import imgs from '../hog-imgs/'
export default class Hog extends Component {
	constructor() {
		super()


    this.state= {
      toggle: 'none',
    }
	}


  handleClick = (e) => {
    //debugger
    this.state.toggle === 'none' ? this.setState({toggle: ''}) : this.setState({toggle: 'none'})
  }
  

	render() {


    // const {
    //   someProp,
    // } = this.props

    const graphImage = require('../hog-imgs/' + this.props.hog.name.toLowerCase().replace(/ /g,"_") + '.jpg')
    // const tableImage = require('./table-' + anyVariable2 + '.png')

    // return (
    // <img src={graphImage}/>
    // )

    //debugger
		return (
    <div className="ui card eight wide column">
      <div className="image">
        <img src={graphImage} />
      </div>
      <div className="content" onClick={this.handleClick}>
        <a className="header">{this.props.hog.name}</a>
        <div className="meta">
          <span className="specialty" style={{display:this.state.toggle}}>{this.props.hog.specialty}</span>
        </div>
        <div className="description" style={{display:this.state.toggle}}>
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content" style={{display:this.state.toggle}}>
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
		
    );
	}
}