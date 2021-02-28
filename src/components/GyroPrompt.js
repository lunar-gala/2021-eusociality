import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import RotateIcon from "../../assets/img/rotateicon.png";

class GyroPrompt extends React.Component {
    render() {
        return <div id='gyro-prompt-overlay' className='mobile'>
            <div id='gyro-prompt-content'>
                <img src={RotateIcon} id='gyro-prompt-icon'></img>
                <p id='gyro-prompt-text'>ROTATE PHONE SIDE TO SIDE TO SEE THE OBJECT ROTATE</p>
            </div>
        </div>;
    }
}

export default GyroPrompt;