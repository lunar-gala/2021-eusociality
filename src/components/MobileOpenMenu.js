/**
 * Button that opens the mobile menu
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants';

class MobileOpenMenu extends React.Component {
  render() {
    return <div id='mobile-open-menu-wrapper' className={this.props.landing_page_state + ' mobile'}>
      <div id='mobile-open-menu' className='mobile'>
        <div id='mobile-open-menu-sign'>
          {
            this.props.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN ?
            '-' : '+'
          }
        </div>
        <div id='mobile-open-menu-border'></div>
      </div>
      <div id='title' onClick={() => {
        // Ask permission to access device gyroscope
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          DeviceOrientationEvent.requestPermission();
        }
      }}>
        <span id='text'>
          {CONSTANTS.LANDING_PAGE_TITLE}
        </span>
      </div>
    </div>;
  }
}

MobileOpenMenu.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default MobileOpenMenu;