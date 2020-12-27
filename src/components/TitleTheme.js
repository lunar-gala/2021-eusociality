import React from 'react';
import * as CONSTANTS from '../constants';

class TitleTheme extends React.Component {
  render() {
    return <div className='title-theme'>
      {CONSTANTS.LANDING_PAGE_TITLE}
    </div>;
  }
}

export default TitleTheme;