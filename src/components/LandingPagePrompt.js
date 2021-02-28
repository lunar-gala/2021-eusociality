/**
 * Prompts users to enter the site on load
 */

import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import COLLECTIVA_LOGO from "../../assets/logo/CollectivaLogo_white.svg";

class LandingPagePrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      out_animation: false,
      visible: true,
    };
  }
  render() {
    return (
      <div
        id="landing-page-prompt"
        className={`desktop ${this.props.landing_page_state} ${
          this.state.out_animation
            ? "out-animation"
            : this.props.landing_page_animations_middleTitle
        } ${this.state.visible ? "visible" : "hidden"}`}
      >
        <div className="right-bar bar">
          <div className="hidden" />
          <div className="dot-basic" />
          <div className="line" />
        </div>
        <div id="title">
          <span>
            {CONSTANTS.LANDING_PAGE_TITLE}
          </span>
          <div id="collectiva-logo">
            <COLLECTIVA_LOGO />
          </div>
        </div>
        <div className="left-bar bar">
          <div className="line" />
          <div className="dot-basic" />
          <div className="hidden" />
        </div>
        <div
          id="enter-site"
          onClick={() => {
            this.setState({
              out_animation: true,
            });
            this.props.handlerSetLandingPageState(
              CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_CUBE_INTRO
            );
            // Set display: none after animation plays
            setTimeout(() => {
              this.setState({
                visible: false,
              });
            }, 1000);
          }}
        >
          Enter →
        </div>
      </div>
    );
  }
}

LandingPagePrompt.propTypes = {
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func,
  /** @brief Indicates if the animation for the landing page load prompt should trigger. */
  landing_page_animations_middleTitle: PropTypes.string,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default LandingPagePrompt;
