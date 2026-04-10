/**
 * About page for mobile
 */

import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";

class AboutPageMobile extends React.Component {
  render() {
    return (
      <div
        id="about-page-mobile"
        className={this.props.landing_page_state + " mobile"}
      >
        <div id="header-section">
          <div id="right-bar" className="bar">
            <div className="dot-basic" />
            <div className="line" />
          </div>
          <div id="header-text" className="text-box">
            {CONSTANTS.ABOUT_HEADER_TEXT}
          </div>
          <div id="left-bar" className="bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
        </div>
        <div id="main-text" className="text-box">
          {CONSTANTS.ABOUT_TEXT}
        </div>
      </div>
    );
  }
}

AboutPageMobile.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default AboutPageMobile;
