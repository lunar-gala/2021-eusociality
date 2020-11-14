import React from 'react';
import PropTypes from 'prop-types';

class LinePage extends React.Component {
  render() {
    return (
      <div>
        {this.props.line_name}
      </div>
    );
  }
}

LinePage.propTypes = {
  line_name: PropTypes.string.isRequired
};

export default LinePage;
