import React from 'react';
import {Link} from "react-router-dom";
import * as CONSTANTS from '../constants';
import Navbar from '../components/Navbar';
import TitleTheme from '../components/TitleTheme';

/**
 * Navbar for selecting lines
 */
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Which line is currently being hovered
      selected_line_idx: null
    };
  }

  render() {
    return (
        <div className="landing-page">
          <TitleTheme/>
          <Link className='link' id='about' to='/about'>About</Link>
          <Link className='link' id='people' to='/people'>People</Link>
          <Navbar selected_line_idx={this.state.selected_line_idx}/>
          <div id='curr_line'>
            {`${this.state.selected_line_idx} | ${CONSTANTS.LINE_NAMES[this.state.selected_line_idx]}`}
          </div>
        </div>
    );
  }
}

export default LandingPage;