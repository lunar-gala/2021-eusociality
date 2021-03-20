/**
 * Navigation sidebar on desktop
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as CONSTANTS from "../constants";

class DesktopSideNav extends React.Component {
  render() {
    // TODO: reuse code here
    return (
      <div
        className={`links desktop ${this.props.landing_page_state} ${this.props.landing_page_animations_header}`}
      >
        <div
          className={`link-wrapper ${
            this.props.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.DEFAULT || 
            this.props.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_OPEN
              ? "selected"
              : ""
          }`}
        >
          <div className="left-bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <Link
            className="link"
            to="/"
            onClick={() => {
              this.props.handlerSetLandingPageState ?
              this.props.handlerSetLandingPageState(this.props.landing_page_state ===
                CONSTANTS.LANDING_PAGE_STATES.DEFAULT || CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_OPEN
              ) : null
            }}
          >
            Lines
          </Link>
        </div>
        <div
          className={`link-wrapper ${
            this.props.landing_page_state ===
            CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN
              ? "selected"
              : ""
          }`}
        >
          <div className="left-bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <Link
            className="link"
            to="/about"
            onClick={() => {
              this.props.handlerSetLandingPageState ?
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN
              ) : null
            }}
          >
            About
          </Link>
        </div>
        <div
          className={`link-wrapper ${
            this.props.landing_page_state ===
            CONSTANTS.LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_OPEN
              ? "selected"
              : ""
          }`}
        >
          <div className="left-bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <Link
            className="link"
            to="/people"
            onClick={() => {
              this.props.handlerSetLandingPageState ?
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_OPEN
              ) : null
            }}
          >
            People
          </Link>
        </div>
        <div
          className={`link-wrapper ${
            this.props.landing_page_state ===
            CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN 
              ? "selected"
              : ""
          }`}
        >
          <div className="left-bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <Link
            className="link"
            to="/watch"
            onClick={() => {
              this.props.handlerSetLandingPageState ?
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN
              ) : null
            }}
          >
            Watch
          </Link>
        </div>
      </div>
    );
  }
}

DesktopSideNav.propTypes = {
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func,
  /** @brief Can trigger animations for the element */
  landing_page_animations_header: PropTypes.string,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string,
};

export default DesktopSideNav;
