/**
 * Prompts users to enter the site on load
 */

import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";

class LandingPagePrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }
  render() {
    return (
      <div
        id="landing-page-prompt"
        className={`${this.props.landing_page_state} ${
          this.props.landing_page_animations_middleTitle
        } ${this.state.visible ? "visible" : "hidden"}`}
      >
        <div className="right-bar bar">
          <div className="hidden" />
          <div className="dot-basic" />
          <div className="line" />
        </div>
        <div id="title">{CONSTANTS.LANDING_PAGE_TITLE}</div>
        <div className="left-bar bar">
          <div className="line" />
          <div className="dot-basic" />
          <div className="hidden" />
        </div>
        <div
          id="enter-site"
          onClick={() => {
            this.props.handlerSetLandingPageState(
              CONSTANTS.LANDING_PAGE_STATES.DEFAULT
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
