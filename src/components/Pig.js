import React, { Component } from 'react';

export default class Pig extends Component {

	state = {
		showDetails: false
	}

	toggleDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		})
	}

	render() {
		let cleanName = this.props.name.toLowerCase().split(" ").join("_")
		let imageSrc = require(`../hog-imgs/${cleanName}.jpg`)

		return (
			<div className="pigTile" onClick={this.toggleDetails}>
				<h1>{this.props.name}</h1>
				<img src={imageSrc} />
				{this.state.showDetails ? 
					<div>
						<p>Specialty: {this.props.specialty}</p>
						<p>Weight: {this.props["weight"]}</p>
						<p>Highest Medal Achieved: {this.props["highest medal achieved"]}</p>
						<p>Greased: {this.props.greased === true ? "true" : "false"}</p>
					</div>
					: null}
			</div>
		);
	}
}
