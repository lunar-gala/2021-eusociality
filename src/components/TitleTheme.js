import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";

class TitleTheme extends React.Component {
  render() {
    return (
      <div
        className={`title-theme ${this.props.landing_page_state} ${
          this.props.landing_page_animations_header
        } ${
          this.props.selectedLineIdx >= 0 ||
          this.props.landing_page_state ==
            CONSTANTS.LANDING_PAGE_STATES.DEFAULT ||
          this.props.landing_page_state ==
            CONSTANTS.LANDING_PAGE_STATES.DESKTOP_ABOUT_PAGE_OPEN ||
          this.props.landing_page_state ==
            CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN
            ? "visible"
            : ""
        }`}
        onClick={() => {
          this.props.handlerSetLandingPageState(
            CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          );
        }}
      >
        {CONSTANTS.LANDING_PAGE_TITLE}
      </div>
    );
  }
}

TitleTheme.propTypes = {
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func,
  /** @brief Can trigger animations for the element */
  landing_page_animations_header: PropTypes.string,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
  /** @brief The currently selected line index on the navbar */
  selectedLineIdx: PropTypes.number,
};

export default TitleTheme;
