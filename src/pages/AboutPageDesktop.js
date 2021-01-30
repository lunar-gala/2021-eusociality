import React from 'react';
import PropTypes from "prop-types";
import * as CONSTANTS from '../constants';

class AboutPageDesktop extends React.Component {
  render() {
    return (
      <div id='about-page-desktop' className={`desktop ${this.props.landing_page_state}`}>
        <div id='headline'>
          <div id='headline-text'>
            {CONSTANTS.ABOUT_HEADER_TEXT}
          </div>
          <div id='right-bar'>
            <div className='dot-basic'/>
            <div className='line'/>
          </div>
        </div>
        <div id='bottom-descriptor'>
          <div id='left-bar'>
            <div className='dot-basic'/>
            <div className='line'/>
          </div>
          <div id='description'>
            {CONSTANTS.ABOUT_TEXT}
          </div>
        </div>
      </div>
    );
  }
}

AboutPageDesktop.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default AboutPageDesktop;