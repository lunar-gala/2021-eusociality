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
    this.handler = this.handler.bind(this);
  }

  handler(index) {
    this.setState({
      selected_line_idx: index,
    });
  }

  render() {
    return (
        <div className="landing-page">
          <TitleTheme/>
          <Link className='link' id='about' to='/about'>About</Link>
          <Link className='link' id='people' to='/people'>People</Link>
          <Navbar handler={this.handler}/>
          <div id='curr_line'>
            {`${this.state.selected_line_idx+1} | ${CONSTANTS.LINE_NAMES[this.state.selected_line_idx]}`}
          </div>
        </div>
    );
  }
}

export default LandingPage;