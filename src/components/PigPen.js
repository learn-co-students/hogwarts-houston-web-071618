import React, { Component } from 'react';
import Pig from "./Pig"
import Filters from "./Filters"

export default class PigPen extends Component {

	state = {
		sortBy: "Name",
		filterBy: "None"
	}

	onSortChange = (sortBy) => {
		this.setState({
			sortBy: sortBy
		})
	}

	onFilterChange = (filterBy) => {
		this.setState({
			filterBy: filterBy
		})
	}

	render() {
		let filteredPigs = [...this.props.hogs];
		if (this.state.sortBy === "Name") {
			filteredPigs = filteredPigs.sort(function (a, b) {
				let nameA = a.name
				let nameB = b.name
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
		} else if (this.state.sortBy === "Weight") {
			filteredPigs = filteredPigs.sort(function (a, b) {
				let weightA = a.weight
				let weightB = b.weight
				if (weightA < weightB) {
					return -1;
				}
				if (weightA > weightB) {
					return 1;
				}
				return 0;
			})
		}
		if (this.state.filterBy === "Greased") {
			filteredPigs = filteredPigs.filter(pig => pig.greased ? true : false)
		}

		return (
			<div>
			 	< Filters onSortChange={this.onSortChange} onFilterChange={this.onFilterChange}/>
				{filteredPigs.map(hog => (
					<Pig {...hog} />
				))}
			</div>
		)
	}
	
}