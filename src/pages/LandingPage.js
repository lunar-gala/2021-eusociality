import React from 'react';
import {Link} from "react-router-dom";
import * as CONSTANTS from '../constants';
import Navbar from '../components/Navbar';
import TitleTheme from '../components/TitleTheme';
import Logo from '../components/Logo';
import MobileOpenMenu from '../components/MobileOpenMenu';
import MobileMenuLineList from '../components/MobileMenuLineList';
import * as GESTURE from '../lib/Gesture';

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
      first_touch: [],
      current_touch: []
    };
    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }

  touchStart (event) {
    let touches = GESTURE.getTouchesList(event);

    this.setState({
      first_touch: GESTURE.getFingerPosition(touches, touches.length),
      current_touch: GESTURE.getFingerPosition(touches, touches.length)
    })
  }

  touchMove (event) {
    let touches = GESTURE.getTouchesList(event);

    this.setState({
      current_touch: GESTURE.getFingerPosition(touches, touches.length)
    });
  }

  touchEnd () {
    let gesture = GESTURE.getGesture(
      this.state.first_touch[0].x,
      this.state.current_touch[0].x,
      this.state.first_touch[0].y,
      this.state.current_touch[0].y);

    if (gesture === 'Up') {
      console.log('up');
    } else if (gesture == 'Tap') {
      console.log('tap', this.state.current_touch);
    }
  }

  handlerSelectedLineIdx (index) {
    this.setState({
      selectedLineIdx: index,
    });
  }

  render() {
    return (
        <div className='landing-page'
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        >
          { /* Common Elements */ }
          <TitleTheme/>
          <Logo/>
          { /* Mobile Elements */ }
          <MobileOpenMenu/>
          <MobileMenuLineList/>
          { /* Desktop Elements */ }
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