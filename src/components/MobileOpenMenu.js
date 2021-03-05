/**
 * Button that opens the mobile menu
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants';
import COLLECTIVA_LOGO from "../../assets/logo/CollectivaLogo_white.svg";
import RotateIcon from "../../assets/img/rotate_icon.png";

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
        <div id='mobile-open-menu-header'>
          <span id='text'>
            {CONSTANTS.LANDING_PAGE_TITLE}
          </span>
          <div id="collectiva-logo">
            <COLLECTIVA_LOGO />
          </div>
        </div>
      </div>
      <img src={RotateIcon} id='rotate-icon' className={this.props.mobile_show_gyro_prompt} onClick={(event) => {
        event.stopPropagation();
        console.log("[DEBUG] Clicked gyroscope prompt");
        this.props.handlerShowGyroPrompt("animate-show");

        // Reset prompt
        setTimeout(() => {
          this.props.handlerShowGyroPrompt("");
        }, 3000);

        // Ask for user permission to access gyroscope data on iOS
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          DeviceOrientationEvent.requestPermission();
        }

      }}></img>
    </div>;
  }
}

MobileOpenMenu.propTypes = {
  handlerShowGyroPrompt: PropTypes.func.isRequired,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
  mobile_show_gyro_prompt: PropTypes.string.isRequired,
}

export default MobileOpenMenu;