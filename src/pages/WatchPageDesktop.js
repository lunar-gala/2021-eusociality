import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import * as UTIL from "../util";

class WatchPageDesktop extends React.Component {
  getCountdownComponent(label, number) {
    return (
      <div className="countdown-component">
        <div className="number">{number}</div>
        <div className="label">{label}</div>
      </div>
    );
  }

  render() {
    let date_formatted = UTIL.format_date(CONSTANTS.SHOW_DATE);
    return (
      <div
        id="watch-page-desktop"
        className={`${this.props.landing_page_state}`}
      >
        <div id="countdown">
          {this.getCountdownComponent("DAYS", this.props.countdownState.days)}
          {this.getCountdownComponent("HOURS", this.props.countdownState.hours)}
          {this.getCountdownComponent(
            "MINUTES",
            this.props.countdownState.minutes
          )}
          {this.getCountdownComponent(
            "SECONDS",
            this.props.countdownState.seconds
          )}
        </div>
        <div id="show-date">
          <div id="show-date-text">{date_formatted.date}</div>
          <div className="right-bar">
            <div className="dot-basic" />
            <div className="line" />
          </div>
        </div>
        <div id="show-time">
          <div className="left-bar">
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <div id="show-time-text">{date_formatted.time}</div>
        </div>
      </div>
    );
  }
}

WatchPageDesktop.propTypes = {
  /** @brief Countdown state of the watch page. */
  countdownState: PropTypes.object.isRequired,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default WatchPageDesktop;
