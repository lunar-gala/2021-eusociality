/**
 * The list of nav links that come from the mobile landing page
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import * as CONSTANTS from '../constants';

class MobileMenuNavList extends React.Component {
  /**
   * Generates a row of line information in the menu.
   *
   * @param {string} nav_link_info In the format:
   * {
   *   name: string,
   *   link_name: string
   * }
   */
  generateNavElement (nav_link_info, index) {
    return <Link
      // The last element has a border
      className={`nav-element mobile-link ${(index === CONSTANTS.NAV_LINK_INFO.length - 1) ? 'end' : ''}`}
      to={`/${nav_link_info.link_name}`}
      key={index}>
      <div className='bullet'></div>
      <div className='nav-element-body'>
        <div className='title'>
          {nav_link_info.name}
        </div>
      </div>
    </Link>;
  }

  render() {
    return <div
      id='mobile-menu-nav-list'
      className={`mobile ${this.props.landing_page_state}`}>
      {CONSTANTS.NAV_LINK_INFO.map((nav_link_info, index) => this.generateNavElement(nav_link_info, index))}
    </div>;
  }
}

MobileMenuNavList.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default MobileMenuNavList;
