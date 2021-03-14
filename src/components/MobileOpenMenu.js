/**
 * Button that opens the mobile menu
 */

import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import COLLECTIVA_LOGO from "../../assets/logo/CollectivaLogo_white.svg";
import RotateIcon from "../../assets/img/rotate_icon_svg.svg";

class MobileOpenMenu extends React.Component {
  render() {
    return (
      <div
        id="mobile-open-menu-wrapper"
        className={this.props.landing_page_state + " mobile"}
      >
        <div
          id="mobile-open-menu"
          className="mobile"
          onTouchStart={() => {
            console.log("[DEBUG] mobile open menu touched");
            if (
              this.props.landing_page_state ===
              CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
            ) {
              this.props.handlerSetLandingPageState(
                this.props.landing_page_state_prev
              );
            } else {
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
              );
            }
          }}
        >
          <div id="mobile-open-menu-sign">
            {this.props.landing_page_state ===
            CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
              ? "-"
              : "+"}
          </div>
          <div id="mobile-open-menu-border"></div>
        </div>
        <div
          id="title"
          onTouchStart={() =>
            this.props.handlerSetLandingPageState(
              CONSTANTS.LANDING_PAGE_STATES.DEFAULT
            )
          }
        >
          <div id="mobile-open-menu-header">
            <span id="text">{CONSTANTS.LANDING_PAGE_TITLE}</span>
            <div id="collectiva-logo">
              <COLLECTIVA_LOGO />
            </div>
          </div>
        </div>
        <div
          id="rotate-icon-wrapper"
          className={`${this.props.mobile_show_gyro_prompt} ${
            this.props.landing_page_state
          } ${this.props.has_seen_gyro_prompt ? "hide" : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            console.log("[DEBUG] Clicked gyroscope prompt");
            this.props.handlerShowGyroPrompt("animate-show");

            // Reset prompt
            setTimeout(() => {
              this.props.handlerShowGyroPrompt("");
            }, 3000);

            // Ask for user permission to access gyroscope data on iOS
            if (
              typeof DeviceOrientationEvent.requestPermission === "function"
            ) {
              console.log("[DEBUG] Asked for permission");
              DeviceOrientationEvent.requestPermission()
                .then((response) => {
                  if (response == "granted") {
                    console.log("permission granted");
                  } else {
                    console.log("Permission Error", response);
                  }
                })
                .catch((e) => console.log("rejection", e));
            } else {
              console.log("[DEBUG] No rotation permission exists.");
            }
          }}
        >
          <RotateIcon id="rotate-icon" />
        </div>
      </div>
    );
  }
}

MobileOpenMenu.propTypes = {
  handlerSetLandingPageState: PropTypes.func.isRequired,
  handlerShowGyroPrompt: PropTypes.func.isRequired,
  has_seen_gyro_prompt: PropTypes.bool.isRequired,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
  landing_page_state_prev: PropTypes.string.isRequired,
  mobile_show_gyro_prompt: PropTypes.string.isRequired,
};

export default MobileOpenMenu;
