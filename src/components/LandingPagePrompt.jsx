/**
 * Prompts users to enter the site on load.
 *
 * Shows a progress bar while the 3D cube asset downloads, then reveals
 * the ENTER button once the asset is ready.
 */

import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import COLLECTIVA_LOGO from "../../assets/logo/CollectivaLogo_white.svg?react";

class LandingPagePrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      out_animation: false,
      visible: true,
    };
  }
  render() {
    const ready = this.props.assetHasLoaded;
    const pct = Math.min(Math.round(this.props.loadProgress || 0), 100);

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
          <span>{CONSTANTS.LANDING_PAGE_TITLE}</span>
          <div id="collectiva-logo">
            <COLLECTIVA_LOGO />
          </div>
        </div>
        <div className="left-bar bar">
          <div className="line" />
          <div className="dot-basic" />
          <div className="hidden" />
        </div>

        {/* Loading bar / enter button area */}
        <div id="enter-area">
          {ready ? (
            <div
              id="enter-site"
              onClick={() => {
                this.setState({ out_animation: true });
                this.props.handlerSetLandingPageState(
                  CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LANDING_PAGE_CUBE_INTRO
                );
                setTimeout(() => {
                  this.setState({ visible: false });
                }, 1000);
              }}
            >
              ENTER &rarr;
            </div>
          ) : (
            <div id="load-progress">
              <div id="load-bar-track">
                <div
                  id="load-bar-fill"
                  style={{ width: `${pct}%` }}
                />
                <div id="load-bar-dot" style={{ left: `${pct}%` }} />
              </div>
              <div id="load-label">
                {pct < 100 ? `LOADING ${pct}%` : "LOADING..."}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

LandingPagePrompt.propTypes = {
  /** @brief Whether the 3D asset has finished loading. */
  assetHasLoaded: PropTypes.bool,
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func,
  /** @brief Indicates if the animation for the landing page load prompt should trigger. */
  landing_page_animations_middleTitle: PropTypes.string,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
  /** @brief 0-100 download progress of the GLTF asset. */
  loadProgress: PropTypes.number,
};

export default LandingPagePrompt;
