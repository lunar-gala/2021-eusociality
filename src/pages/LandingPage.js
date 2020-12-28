import React from 'react';
import {Link} from "react-router-dom";
import * as CONSTANTS from '../constants';
import * as UTIL from '../util';
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
    console.log(process.cwd());
    return (
        <div className={'landing-page'}>
          <TitleTheme/>

          <div className="links">
            <Link className='link' to='/'>Livestream</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/people'>People</Link>
          </div>

          <div id='curr-line'>
            <div id='line-name'>
              {
                // Only show the line name if we have hovered over a NavItem
                (this.state.selectedLineIdx >= 0) ?
                  `${CONSTANTS.LINE_INFO[this.state.selectedLineIdx].name}` :
                  ''
              }
            </div>
            <div id='designers-name'>
              {
                // Only show the designers names if we have hovered over a NavItem
                (this.state.selectedLineIdx >= 0) ?
                  `${UTIL.name_list_formatter(CONSTANTS.LINE_INFO[this.state.selectedLineIdx].designers)}` :
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