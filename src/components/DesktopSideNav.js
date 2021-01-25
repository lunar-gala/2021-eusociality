/**
 * Navigation sidebar on desktop
 */

import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as CONSTANTS from '../constants';

class DesktopSideNav extends React.Component {
  render() {
    return (
      <div className="links desktop">
        <Link className="link"
          to="/about"
          onClick={() => {
            this.props.handlerSetLandingPageState(CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN)
          }}>
          About
        </Link>
        <Link className="link" to="/people">
          People
        </Link>
        <Link className="link" to="/">
          Watch
        </Link>
      </div>
    );
  }
}

DesktopSideNav.propTypes = {
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func
};

export default DesktopSideNav;
