import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import * as UTIL from "../util";

/**
 * Navbar for selecting lines
 */
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [];
    for (const [index, line_info] of CONSTANTS.LINE_INFO.entries()) {
      items.push(
        <NavItem
          handlerSelectedLineIdx={this.props.handlerSelectedLineIdx}
          lineIdx={index}
          lineName={line_info.name}
          selectedLineIdx={this.props.selectedLineIdx}
          key={index}
        />
      );
    }

    return <div className="navbar desktop">{items}</div>;
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
      <div
        className={`navbar-item ${
          this.props.selectedLineIdx === this.props.lineIdx ? "selected" : ""
        }`}
        key={this.props.lineName}
        onMouseEnter={() => {
          this.props.handlerSelectedLineIdx(this.props.lineIdx);
        }}
      >
        <div className={`diamond ${
          this.props.selectedLineIdx === this.props.lineIdx ? "selected" : ""
        }`}/>
        {UTIL.line_number_formatter(this.props.lineIdx)}
      </div>
    );
  }
}

Navbar.propTypes = {
  /** @brief Handles updating the line index when a NavItem is hovered over */
  handlerSelectedLineIdx: PropTypes.func.isRequired,
  /** @brief The currently selected line index on the navbar */
  selectedLineIdx: PropTypes.number.isRequired,
};

NavItem.propTypes = {
  /** @brief Handles updating the line index when a NavItem is hovered over */
  handlerSelectedLineIdx: PropTypes.func.isRequired,
  /** @brief Line index associated with this NavItem circle */
  lineIdx: PropTypes.number.isRequired,
  /** @brief Line name associated with NavItem circle */
  lineName: PropTypes.string.isRequired,
  /** @brief The currently selected line index on the navbar */
  selectedLineIdx: PropTypes.number.isRequired,
};

export default Navbar;
