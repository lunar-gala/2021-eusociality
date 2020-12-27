import React from 'react';
import {Link} from "react-router-dom";
import * as CONSTANTS from '../constants';
import Navbar from '../components/Navbar';
import TitleTheme from '../components/TitleTheme';
import Logo from '../components/Logo';
import MobileOpenMenu from '../components/MobileOpenMenu';

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
          <Logo/>
          <MobileOpenMenu/>
          <Link className='link' id='about' to='/about'>About</Link>
          <Link className='link' id='people' to='/people'>People</Link>
          <div id='label'>
            {(this.state.selectedLineIdx >= 0) ? 'Click image to see more' : ''}
          </div>
          <div id='curr_line'>
            {
              // Only show the line name and number if we have hovered over a NavItem
              (this.state.selectedLineIdx >= 0)  ?
                `${this.state.selectedLineIdx < 9 ? '0' : ''}${this.state.selectedLineIdx+1} | ${CONSTANTS.LINE_NAMES[this.state.selectedLineIdx]}` :
                ''
            }
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