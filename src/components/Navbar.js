import React from 'react';
import * as CONSTANTS from '../constants';

function create_navbar_item (name) {
  return <div className='navbar-item'>
    {name}
  </div>;
}

class Navbar extends React.Component {
  render () {
    return <div className='navbar'>
      {
        CONSTANTS.NAVBAR_LIST.map( item => create_navbar_item(item) )
      }
    </div>;
  }
}

export default Navbar;