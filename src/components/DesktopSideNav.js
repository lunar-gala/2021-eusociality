import React from "react";
import { Link } from "react-router-dom";

class DesktopSideNav extends React.Component {
  render() {
    return (
      <div className="links">
        <Link className="link" to="/">
          <sup className="linkNum">01</sup> Livestream
        </Link>
        <Link className="link" to="/about">
          <sup className="linkNum">02</sup> About
        </Link>
        <Link className="link" to="/people">
          <sup className="linkNum">03</sup> People
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
