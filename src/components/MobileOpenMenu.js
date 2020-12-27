/**
 * Button that opens the mobile menu
 */

import React from 'react';

class MobileOpenMenu extends React.Component {
  render() {
    return <div id='mobile-open-menu' className='mobile'>
      <div id='mobile-open-menu-sign'>
        +
      </div>
      <div id='mobile-open-menu-border'></div>
    </div>;
  }
}

export default MobileOpenMenu;