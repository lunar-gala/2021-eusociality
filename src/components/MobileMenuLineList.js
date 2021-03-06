/**
 * The list of lines that come from the mobile menu
 */

import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import * as UTIL from '../util';
import * as LINE_DATA from '../data/line_data';

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
    return <Link
      className='line-element'
      key={index}
      to={`/lines/${index+1}`}>
      <div className='line-element-body'>
        <div className='title'>
          {`${UTIL.line_number_formatter(index)} | ${line_info_element.name}`}
        </div>
        <div className='designers'>
          {UTIL.name_list_formatter(line_info_element.designers)}
        </div>
      </div>
    </Link>;
  }

  render() {
    return <div
      id='mobile-menu-line-list'
      className={`mobile ${this.props.landing_page_state}`}>
      {LINE_DATA.LINE_INFO.map((line_info, index) => this.generateLineElement(line_info, index))}
    </div>;
  }
}

MobileMenuLineList.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired
}

export default MobileMenuLineList;