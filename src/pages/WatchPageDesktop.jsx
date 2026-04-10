import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import * as UTIL from "../util";
import ReactPlayer from "react-player";

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
        {this.props.countdownState.is_past &&
        (this.props.landing_page_state ===
          CONSTANTS.LANDING_PAGE_STATES.DESKTOP_WATCH_PAGE_OPEN ||
          this.props.landing_page_state ===
            CONSTANTS.LANDING_PAGE_STATES.MOBILE_WATCH_PAGE_OPEN) ? (
          <div id="player-wrapper">
            <ReactPlayer
              id="player"
              url={CONSTANTS.SHOW_VIDEO_LINK}
              playing={false}
              controls={true}
              playIcon={<button></button>}
              onStart={this.handlerVideoLoad}
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <div>
            <div id="countdown">
              {this.getCountdownComponent(
                "DAYS",
                this.props.countdownState.days
              )}
              {this.getCountdownComponent(
                "HOURS",
                this.props.countdownState.hours
              )}
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
        )}
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
