import React from 'react';
import PropTypes from 'prop-types';

import * as CONSTANTS from '../constants';
import * as LINE_DATA from '../data/line_data';
import * as UTIL from '../util';

// Components
import DesktopSideNav from '../components/DesktopSideNav';
import BackButton from '../components/BackButton';

class LinePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const regexFindLineIndex = /\/lines\/(\d+)/;
    const currLineIdx = regexFindLineIndex.exec(this.props.location.pathname)[1];
    const line_info = LINE_DATA.LINE_INFO[currLineIdx];

    return (
      <div id='line-page'>
        <div id='top-title'>
          {CONSTANTS.LANDING_PAGE_TITLE}
        </div>
        <div id='name'>
          {line_info.name}
        </div>
        <div id='designers'>
          {UTIL.name_list_formatter(line_info.designers)}
        </div>
        <div id='pictures-top'>
          Top pictures go here
        </div>
        <div id='description'>
          {line_info.description}
        </div>
        <div id='pictures-bottom'>
          Bottom pictures go here
        </div>

        {/* Additional overlay components */}
        <DesktopSideNav />
        <BackButton />
      </div>
    );
  }
}

LinePage.propTypes = {
  location: PropTypes.object
};

export default LinePage;
