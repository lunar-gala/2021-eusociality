/**
 * LG logo.
 *
 * We are using the white logo because a lot of our backgrounds are black.
 */

import React from "react";
import PropTypes from "prop-types";
import LG_LOGO from "../../assets/logo/LGLogo_white.svg";

class Logo extends React.Component {
  render() {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://lunargala.org/"
        className={`logo ${this.props.landing_page_state} ${this.props.landing_page_animations_header}`}
      >
        <LG_LOGO />
      </a>
    );
  }
}

Logo.propTypes = {
  /** @brief Can trigger animations for the element */
  landing_page_animations_header: PropTypes.string,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default Logo;
