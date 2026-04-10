/**
 * Navigation sidebar on desktop
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as CONSTANTS from "../constants";
import { is_modified_click } from "../util";

class DesktopSideNav extends React.Component {
  render() {
    // TODO: reuse code here

    let select_line =
      this.props.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.DEFAULT ||
      this.props.landing_page_state ===
        CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_LOAD ||
      this.props.landing_page_state ===
        CONSTANTS.LANDING_PAGE_STATES.DESKTOP_LINE_PAGE_OPEN;

    return (
      <div
        className={`links desktop ${this.props.landing_page_state} ${this.props.landing_page_animations_header}`}
      >
        <div className={`link-wrapper ${select_line ? "selected" : ""}`}>
          <div className="left-bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <Link
            className="link"
            to="/"
            onClick={(e) => {
              // Let cmd/ctrl-click open in a new tab without changing the
              // current tab's state. See issue #41.
              if (is_modified_click(e)) return;
              if (!this.props.handlerSetLandingPageState || select_line) return;
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DEFAULT
              );
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
            onClick={(e) => {
              if (is_modified_click(e)) return;
              if (!this.props.handlerSetLandingPageState) return;
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN
              );
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
            onClick={(e) => {
              if (is_modified_click(e)) return;
              if (!this.props.handlerSetLandingPageState) return;
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_PEOPLE_PAGE_OPEN
              );
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
            onClick={(e) => {
              if (is_modified_click(e)) return;
              if (!this.props.handlerSetLandingPageState) return;
              this.props.handlerSetLandingPageState(
                CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN
              );
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
