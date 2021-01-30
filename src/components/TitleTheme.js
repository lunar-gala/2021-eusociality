import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../constants';

class TitleTheme extends React.Component {
  render() {
    return <div
      className={`title-theme ${this.props.landing_page_state}`}
      onClick={() => {
        this.props.handlerSetLandingPageState(CONSTANTS.LANDING_PAGE_STATES.DEFAULT)
      }}
    >
      {CONSTANTS.LANDING_PAGE_TITLE}
    </div>;
  }
}

TitleTheme.propTypes = {
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default TitleTheme;