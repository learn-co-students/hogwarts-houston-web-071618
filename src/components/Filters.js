import React, { Component } from 'react';

function Filters (props) {
	return (
		<div>
			<div>
				<label>Sort By: </label>
				<select onChange={event => {
					props.onSortChange(event.target.value)
				}}>
					<option>Name</option>
					<option>Weight</option>
				</select>
			</div>
			<div>
				<label>Filter By: </label>
				<select onChange={event => {
					props.onFilterChange(event.target.value)
				}}>
					<option>None</option>
					<option>Greased</option>
				</select>
			</div>
		</div>
	)
}

export default Filters