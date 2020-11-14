import React from 'react';
import * as CONSTANTS from '../constants';

/**
 * Navbar for selecting lines
 */
class Navbar extends React.Component {
  render () {
    return <div className='navbar'>
      {
        CONSTANTS.LINE_NAMES.map( item => create_navbar_item(item.toUpperCase()) )
      }
    </div>;
  }
}

/**
 * This is the circle for each line.
 *
 * When the user hovers over a circle, the line name should appear
 *
 * @param {string} name Name of the line
 */
function create_navbar_item (name) {
  return <div className='navbar-item' key={name}>
    item
  </div>;
}

export default Navbar;