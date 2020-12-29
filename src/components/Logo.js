/**
 * LG logo.
 *
 * We are using the white logo because a lot of our backgrounds are black.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LG_LOGO from '../../assets/logo/LGLogo_white.svg';

class Logo extends React.Component {
  render() {
    return <Link to="/">
      <LG_LOGO className={`logo ${this.props.landing_page_state}`}/>
    </Link>
  }
}

Logo.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default Logo;