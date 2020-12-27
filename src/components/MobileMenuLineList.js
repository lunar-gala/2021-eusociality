/**
 * The list of lines that come from the mobile menu
 */

import React from 'react';
import * as UTIL from '../util';
import * as CONSTANTS from '../constants';

class MobileMenuLineList extends React.Component {
  /**
   * Generates a row of line information in the menu.
   *
   * @param {line_info_element} line_info_element
   * In the format:
   * {
   *   name: String,
   *   designers: String[]
   * }
   */
  generateLineElement (line_info_element, index) {
    return <div className='line-element' key={index}>
      <div className='bullet'></div>
      <div className='line-element-body'>
        <div className='title'>
          {`${UTIL.line_number_formatter(index)}|${line_info_element.name}`}
        </div>
        <div className='designers'>
          {UTIL.name_list_formatter(line_info_element.designers)}
        </div>
      </div>
    </div>;
  }

  render() {
    return <div id='mobile-menu-line-list' className='mobile'>
      {CONSTANTS.LINE_INFO.map((line_info, index) => this.generateLineElement(line_info, index))}
    </div>;
  }
}

export default MobileMenuLineList;