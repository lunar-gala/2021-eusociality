import React from 'react';
import PropTypes from "prop-types";
import * as CONSTANTS from '../constants';
import * as UTIL from '../util';

class WatchPageDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdownState: UTIL.calculate_date_difference(CONSTANTS.SHOW_DATE)
    };

    this.updateCountdown = this.updateCountdown.bind(this);
  }

  componentDidMount() {
    this.updateCountdown();
  }

  updateCountdown () {
    this.setState({
      countdownState: UTIL.calculate_date_difference(CONSTANTS.SHOW_DATE)
    });
    setInterval(this.updateCountdown, 1000);
  }

  getCountdownComponent (label, number) {
    return <div className='countdown-component'>
      <div className='number'>
        {number}
      </div>
      <div className='label'>
        {label}
      </div>
    </div>;
  }

  render() {
    let date_formatted = UTIL.format_date(CONSTANTS.SHOW_DATE);
    return (
      <div id='watch-page-desktop' className={`desktop ${this.props.landing_page_state}`}>
        <div id='countdown'>
          {this.getCountdownComponent('DAYS', this.state.countdownState.days)}
          {this.getCountdownComponent('HOURS', this.state.countdownState.hours)}
          {this.getCountdownComponent('MINUTES', this.state.countdownState.minutes)}
          {this.getCountdownComponent('SECONDS', this.state.countdownState.seconds)}
        </div>
        <div id='show-date'>
          <div id='show-date-text'>
            {date_formatted.date}
          </div>
          <div className='right-bar'>
            <div className='dot-basic'/>
            <div className='line'/>
          </div>
        </div>
        <div id='show-time'>
          <div className='left-bar'>
            <div className='line'/>
            <div className='dot-basic'/>
          </div>
          <div id='show-time-text'>
            {date_formatted.time}
          </div>
        </div>
      </div>
    )
  }
}

WatchPageDesktop.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default WatchPageDesktop;