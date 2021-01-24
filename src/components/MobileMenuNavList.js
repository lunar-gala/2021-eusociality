/**
 * The list of nav links that come from the mobile landing page
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import * as CONSTANTS from '../constants';

class MobileMenuNavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIdx: -1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, index, nav_link_info) {
    e.preventDefault();

    this.setState({
      activeIdx: index
    });

    setTimeout(() => {
      const { history } = this.props;

      // TODO: this is kinda messy, the priority is 1. Change state 2. Go to link
      if (nav_link_info.landing_page_state) {
        this.props.handlerSetLandingPageState(nav_link_info.landing_page_state);
      }

      if  (nav_link_info.link_name !== '') {
        history.push(`/${nav_link_info.link_name}`);
      }

      // Reset the state of the navbar
      this.setState({
        activeIdx: -1
      });
    }, 500);
  }
  /**
   * Generates a row of line information in the menu.
   *
   * @param {string} nav_link_info In the format:
   * {
   *   name: string,
   *   link_name: string
   * }
   */
  generateNavElement (nav_link_info, index) {
    return <Link
      className={`nav-element mobile-link ${this.state.activeIdx === index ? 'active' : ''}`}
      to={`/${nav_link_info.link_name}`}
      onClick={(e) => this.handleClick(e, index, nav_link_info)}
      key={index}>
      <div className='nav-element-body'>
        <div className='title'>
          {nav_link_info.name}
        </div>
        <div className='right-bar'>
          <div className='dot-basic'/>
          <div className='line'/>
        </div>
      </div>
    </Link>;
  }

  render() {
    return <div
      id='mobile-menu-nav-list'
      className={`mobile ${this.props.landing_page_state}`}>
      {CONSTANTS.NAV_LINK_INFO.map((nav_link_info, index) => this.generateNavElement(nav_link_info, index))}
    </div>;
  }
}

MobileMenuNavList.propTypes = {
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
  handlerSetLandingPageState: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default withRouter(MobileMenuNavList);
