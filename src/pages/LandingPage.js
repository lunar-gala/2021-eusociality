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
      selected_line_idx: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(index) {
    this.setState({
      selected_line_idx: index,
    });
  }

  render() {
    var curLine = `${this.state.selected_line_idx+1} | ${CONSTANTS.LINE_NAMES[this.state.selected_line_idx]}`;
    var imgClass = `background-${this.state.selected_line_idx+1}`;
    if (this.state.selected_line_idx == null || this.state.selected_line_idx == 15) {
      curLine = "";
      imgClass = "background-main";
    }
    return (
        <div className={"landing-page " + imgClass}>
          <TitleTheme/>
          <Link className='link' id='about' to='/about'>About</Link>
          <Link className='link' id='people' to='/people'>People</Link>
          <div id="label">Click image to see more</div>
          <div id='curr_line'>
            {curLine}
          </div>
          <Navbar handler={this.handler}/>
        </div>
    );
  }
}

export default LandingPage;