/**
 * The list of nav links that come from the mobile landing page
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants';

class MobileMenuNavList extends React.Component {
  /**
   * Generates a row of line information in the menu.
   *
   * @param {string} nav_link_name
   */
  generateNavElement (nav_link_name, index) {
    return <div
      // The last element has a border
      className={`nav-element ${(index === CONSTANTS.NAV_LINK_NAMES.length - 1) ? 'end' : ''}`}
      key={index}>
      <div className='bullet'></div>
      <div className='nav-element-body'>
        <div className='title'>
          {nav_link_name}
        </div>
      </div>
    </div>;
  }

  render() {
    return <div
      id='mobile-menu-nav-list'
      className={`mobile ${this.props.landing_page_state}`}>
      {CONSTANTS.NAV_LINK_NAMES.map((nav_link_name, index) => this.generateNavElement(nav_link_name, index))}
    </div>;
  }
}

MobileMenuNavList.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default MobileMenuNavList;
