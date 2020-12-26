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
      // Defaults to -1 when nothing is selected
      selectedLineIdx: -1,
    };
    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
  }

  handlerSelectedLineIdx(index) {
    this.setState({
      selectedLineIdx: index,
    });
  }

  render() {
    return (
        <div className={'landing-page'}>
          <TitleTheme/>

          <div className="links">
            <Link className='link' to='/about'>Livestream</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/people'>People</Link>
          </div>

          <div id='curr_line'>
            <div id='line_name'>
              {
                // Only show the line name if we have hovered over a NavItem
                (this.state.selectedLineIdx >= 0) ?
                  `${CONSTANTS.LINE_NAMES[this.state.selectedLineIdx]}` :
                  ''
              }
            </div>
            <div id='designers_name'>
              {
                // Only show the designers names if we have hovered over a NavItem
                (this.state.selectedLineIdx >= 0) ?
                  `${CONSTANTS.DESIGNERS_NAMES[this.state.selectedLineIdx]}` :
                  ''
              }
            </div>
          </div>
          <Navbar
            handlerSelectedLineIdx={this.handlerSelectedLineIdx}
            selectedLineIdx={this.state.selectedLineIdx}
          />
        </div>
    );
  }
}

export default LandingPage;