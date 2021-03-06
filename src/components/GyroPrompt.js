import React from "react";
import PropTypes from 'prop-types';
import RotateIcon from "../../assets/img/rotate_icon_svg.svg";

/**
 * Prompt that pops up when you enable gyroscope data access by the web app.
 *
 * iOS only, since Android allows gyroscope data access by default.
 */
class GyroPrompt extends React.Component {
  render() {
    return (
      <div id="gyro-prompt-overlay" className={`mobile ${this.props.mobile_show_gyro_prompt}`}>
        <div id="gyro-prompt-content">
          <div id="gyro-prompt-icon-wrapper">
            <RotateIcon id="gyro-prompt-icon"/>
          </div>
          <p id="gyro-prompt-text">
            ROTATE PHONE SIDE TO SIDE TO SEE THE OBJECT ROTATE
          </p>
        </div>
      </div>
    );
  }
}

GyroPrompt.propTypes = {
  mobile_show_gyro_prompt: PropTypes.string.isRequired,
}

export default GyroPrompt;
