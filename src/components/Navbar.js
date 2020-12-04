import React from 'react';
import * as CONSTANTS from '../constants';

/**
 * Navbar for selecting lines
 */
class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { curSelected: null };
		this.handler = this.handler.bind(this);
	}

	handler(index) {
		this.setState({
			curSelected: index,
		});
		this.props.handler(index);
	}

	render() {
		const items = [];
		for (const [index, name] of CONSTANTS.LINE_NAMES.entries()) {
			items.push(<NavItem name={name} handler={this.handler} index={index} selected={this.state.curSelected} />);
		}
		return (
			<div className="navbar">
				{items}
				<div className="lineLabel">{this.state.curSelected + 1}/16</div>
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
		var circleClass = 'nav-circle';
		if (this.props.selected == this.props.index) {
			circleClass += '-selected';
		}
		return (
			<div className="navbar-item" key={this.props.name}>
				<div
					class={circleClass}
					onMouseEnter={() => {
						this.props.handler(this.props.index);
					}}
				></div>
			</div>
		);
	}
}

export default Navbar;
