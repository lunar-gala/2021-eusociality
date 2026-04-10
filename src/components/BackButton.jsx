/**
 * Goes back to the previous url, react router
 */

import React from 'react';
import PropTypes from 'prop-types';

class BackButton extends React.Component {
  render() {
    return <div className='back-button' onClick={
      () => this.props.history.goBack()
    } />
  }
}

BackButton.propTypes = {
  /** @brief Tells us which URL to go back to */
  history: PropTypes.object
}

export default BackButton;
