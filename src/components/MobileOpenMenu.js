/**
 * Button that opens the mobile menu
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants';
import RotateIcon from "../../assets/img/rotateicon.png";

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
      <div id='title'>
        <span id='text'>
          {CONSTANTS.LANDING_PAGE_TITLE}
        </span>
      </div>
      <img src={RotateIcon} id='rotate-icon' onClick={(event) => {
        event.stopPropagation();
        console.log("clicked rotate icon");
        document.getElementById('gyro-prompt-overlay').style.display = "flex";
        document.getElementById('gyro-prompt-text').style.display = "block";
        setTimeout(() => {
          document.getElementById('gyro-prompt-overlay').style.display = "none";
        }, 5000);
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          //document.getElementById('gyro-prompt-overlay').style.display = "flex";
          DeviceOrientationEvent.requestPermission().then(response => {
            if (response === 'granted') {
              document.getElementById('gyro-prompt-text').style.display = "block";
            } else {
              document.getElementById('gyro-prompt-overlay').style.display = "none";
            }
          })
        }
        
      }}></img>
    </div>;
  }
}

MobileOpenMenu.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default MobileOpenMenu;