import React from "react";
import PropTypes from "prop-types";
import * as LINE_DATA from "../data/line_data";
import * as UTIL from "../util";
import NavBall from '../../assets/img/navBall.svg'

/**
 * Navbar for navigating to different lines within the lines page
 */
class NavbarLinePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [];
    for (const [index, line_info] of LINE_DATA.LINE_INFO.entries()) {
      items.push(
        <NavLinePageItem
          selectedLineIdx={this.props.selectedLineIdx}
          lineIdx={index}
          lineName={line_info.name}
          key={index}
        />
      );
    }

    return <div className='navbar-line-page desktop'>
      <div className='navbar-container'>{items}</div>
    </div>;
  }
}

/**
 * This is the circle for each line.
 *
 * When the user hovers over a circle, the line name should appear
 */
class NavLinePageItem extends React.Component {
  render() {
    let is_selected = this.props.selectedLineIdx === this.props.lineIdx;
    return (
      <div
        className={`navbar-item ${
          is_selected ? 'selected' : ''
        }`}
        id={`line-${this.props.lineIdx}`}
        key={this.props.lineName}
      >
        <NavBall className={`navBall ${this.props.selectedLineIdx === this.props.lineIdx ? "selected" : ""}`}/>
        {UTIL.line_number_formatter(this.props.lineIdx)}
        <div
          className='underline-animation'
        >
          <div
            className='underline'
          />
          <div
            className='underline-circle left'
          />
          <div
            className='underline-circle right'
          />
        </div>
        <div className={'tooltip' + (is_selected ? ' inactive' : '')}>
          <div className='wrapper'>
            <div className='dot-basic' id='left-top' />
            <div className='label'>
              {this.props.lineName}
            </div>
            <div className='dot-basic' id='right-bottom' />
          </div>
          <div className='vertical-tick' />
        </div>
      </div>
    );
  }
}

NavbarLinePage.propTypes = {
  /** @brief The currently selected line index on the navbar */
  selectedLineIdx: PropTypes.number.isRequired,
};

NavLinePageItem.propTypes = {
  /** @brief Line index associated with this NavLinePageItem circle */
  lineIdx: PropTypes.number.isRequired,
  /** @brief Line name associated with NavLinePageItem circle */
  lineName: PropTypes.string.isRequired,
  /** @brief The currently selected line index on the navbar */
  selectedLineIdx: PropTypes.number.isRequired,
};

export default NavbarLinePage;