import React from 'react';
import * as CONSTANTS from '../constants';
import PropTypes from 'prop-types';

/**
 * Navbar for selecting lines
 */
class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const items = [];
		for (const [index, name] of CONSTANTS.LINE_NAMES.entries()) {
			items.push(
				<NavItem
					handlerSelectedLineIdx={this.props.handlerSelectedLineIdx}
					lineIdx={index}
					lineName={name}
					selectedLineIdx={this.props.selectedLineIdx}
				/>);
		}
		return (
			<div className="navbar">
				{items}
				<div className="lineLabel">{`${this.props.selectedLineIdx + 1}/16`}</div>
			</div>
		);
	}
}

/**
 * This is the circle for each line.
 *
 * When the user hovers over a circle, the line name should appear
 */
class NavItem extends React.Component {
	render() {
		return (
			<div className="navbar-item" key={this.props.lineName}>
				<div
					className={`nav-circle ${this.props.selectedLineIdx === this.props.lineIdx ? 'selected' : ''}`}
					onMouseEnter={() => {
						this.props.handlerSelectedLineIdx(this.props.lineIdx);
					}}
				></div>
			</div>
		);
	}
}

Navbar.propTypes = {
	/** @brief Handles updating the line index when a NavItem is hovered over */
	handlerSelectedLineIdx: PropTypes.func.isRequired,
	/** @brief The currently selected line index on the navbar */
	selectedLineIdx: PropTypes.number.isRequired
}

NavItem.propTypes = {
	/** @brief Handles updating the line index when a NavItem is hovered over */
	handlerSelectedLineIdx: PropTypes.func.isRequired,
	/** @brief Line index associated with this NavItem circle */
	lineIdx: PropTypes.number.isRequired,
	/** @brief Line name associated with NavItem circle */
	lineName: PropTypes.string.isRequired,
	/** @brief The currently selected line index on the navbar */
	selectedLineIdx: PropTypes.number.isRequired
}

export default Navbar;
