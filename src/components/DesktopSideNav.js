/**
 * Navigation sidebar on desktop
 */

import React from "react";
import { Link } from "react-router-dom";

class DesktopSideNav extends React.Component {
  render() {
    return (
      <div className="links desktop">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/people">
          People
        </Link>
        <Link className="link" to="/">
          Livestream
        </Link>
      </div>
    );
  }
}

DesktopSideNav.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  //landing_page_state: PropTypes.string.isRequired
};

export default DesktopSideNav;
