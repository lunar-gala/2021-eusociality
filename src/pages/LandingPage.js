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
      current_touch: [],
      /**
       * We have an FSM-like organization for states. We do a Moore-type
       * machine, where we perform actions and change states based on which
       * state we are in.
       */
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT
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

    if (gesture === 'Tap') {
      console.log('[DEBUG] Tap', this.state.current_touch[0].y);
    }

    /**
     * To prevent extra scrolling from touch, we are adding a timeout here to
     * wait for the touch event to end. This is _very_ hacky and I'm not sure
     * if this is a good idea at all...seems to work though and 25ms to be good
     * enough to not be too noticeable for humans.
     */
    setTimeout(() => {
      if (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN) {
        // Has to be a swipe down *and* the mobile line menu has to be at the top
        if (gesture === 'Down') {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          });
        } else if (gesture === 'Tap' && this.state.current_touch[0].y <= 256) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          });
        }
      } else if (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN) {
        if (gesture === 'Tap' && (
          this.state.current_touch[0].y >= 256 ||
          this.state.current_touch[0].y <= 256
        )) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT
          });
        }
      } else {
        // Swiping up on the default landing page opens the line menu
        if (gesture === 'Up') {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN
          });
        }
        // Tapping the top of the default landing page opens the nav menu
        else if (gesture === 'Tap' && this.state.current_touch[0].y < 90) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_NAV_MENU_OPEN
          });
        }
        // Tapping the lower part of the default landing page opens the line menu
        else if (gesture === 'Tap' && this.state.current_touch[0].y >= 90) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN
          });
        }
      }

      console.log('[DEBUG] State:', this.state.landing_page_state);
    }, 25);

  }

  handlerSelectedLineIdx (index) {
    this.setState({
      selectedLineIdx: index,
    });
  }

  render() {
    return (
        <div className={`landing-page${
          (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN) ?
          ' mobile-line-menu-open' : ''
        }`}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          onScroll={e => e.preventDefault()}
        >
          { /* Common Elements */ }
          <TitleTheme
            landing_page_state={this.state.landing_page_state}
          />
          <Logo/>
          { /* Mobile Elements */ }
          <MobileOpenMenu/>
          <MobileMenuLineList
            landing_page_state={this.state.landing_page_state}
          />
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