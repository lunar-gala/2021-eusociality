import React, {useState} from 'react';
import * as CONSTANTS from '../constants';
import * as UTIL from '../util';
import Navbar from '../components/Navbar';
import TitleTheme from '../components/TitleTheme';
import Logo from '../components/Logo';
import MobileOpenMenu from '../components/MobileOpenMenu';
import MobileMenuLineList from '../components/MobileMenuLineList';
import MobileMenuNavList from '../components/MobileMenuNavList';
import * as GESTURE from '../lib/Gesture';
import LandingPageModel from '../components/LandingPageModel';
import DesktopSideNav from '../components/DesktopSideNav';

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
      /** @brief First touch recorded by `touchStart` handler */
      first_touch: [],
      /** @brief Current touch recorded by `touchMove` handler */
      current_touch: [],
      /**
       * We have an FSM-like organization for states. We do a Moore-type
       * machine, where we perform actions and change states based on which
       * state we are in.
       */
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
      /**
       * @brief Keeps track of how far we have scrolled in the mobile line menu.
       * We use this to figure out if we should close the mobile menu or not.
       * If we swipe down and we aren't at the top of the list yet, then we
       * don't close the bottom sheet yet.
       */
      mobile_line_menu_y_offset: 0,
      fading: false,
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
    } else if (
      this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN &&
      (gesture === 'Up')) {
      this.setState({
        mobile_line_menu_y_offset: this.state.mobile_line_menu_y_offset +
          this.state.first_touch[0].y - this.state.current_touch[0].y
      });
    }

    /**
     * To prevent extra scrolling from touch, we are adding a timeout here to
     * wait for the touch event to end. This is _very_ hacky and I'm not sure
     * if this is a good idea at all...seems to work though and 25ms to be good
     * enough to not be too noticeable for humans.
     *
     * TODO: I haven't figured out a good way to detect if the user touches
     * "outside" of the nav and line menus. I'm hard coding rn, but I don't
     * think this is good bc of different platforms and such
     */
    setTimeout(() => {
      if (this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN) {
        // Has to be a swipe down *and* the mobile line menu has to be at the top
        if (gesture === 'Down' && this.state.mobile_line_menu_y_offset < 10) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
            mobile_line_menu_y_offset: 0
          });
        }
        else if (gesture === 'Tap' && this.state.current_touch[0].y <= 256) {
          this.setState({
            landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
            mobile_line_menu_y_offset: 0
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

      // Happens after the delayed handle
      console.log('[DEBUG] State:', this.state.landing_page_state);
      if (
        this.state.landing_page_state === CONSTANTS.LANDING_PAGE_STATES.MOBILE_LINE_MENU_OPEN &&
        (gesture === 'Down')) {
        this.setState({
          mobile_line_menu_y_offset: this.state.mobile_line_menu_y_offset +
            this.state.first_touch[0].y - this.state.current_touch[0].y
        });
      }
    }, 25);
  }

  handlerSelectedLineIdx (index) {
    this.setState({fading: true}); // fade out
    this.timer = setTimeout(_ => {
      this.setState({selectedLineIdx: index});
      this.setState({fading: false}); // fade back in
  }, 200); // animation timing offset
  }

  render() {
    const {fading} = this.state;

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
          <LandingPageModel
            landing_page_state={this.state.landing_page_state}
          />
          <TitleTheme
            landing_page_state={this.state.landing_page_state}
          />
          <Logo
            landing_page_state={this.state.landing_page_state}
          />
          { /* Mobile Elements */ }
          <MobileOpenMenu
            landing_page_state={this.state.landing_page_state}
          />
          <MobileMenuLineList
            landing_page_state={this.state.landing_page_state}
          />
          <MobileMenuNavList
            landing_page_state={this.state.landing_page_state}
          />
          { /* Desktop Elements */ }

          <DesktopSideNav />
          <div id="main-screen">
            <div className={`${fading ? 'faded' : 'notFaded'}`} id='curr-line'>
              <div id='line-name'>
                {
                  (this.state.selectedLineIdx >= 0) ?
                    `${CONSTANTS.LINE_INFO[this.state.selectedLineIdx].name}` :
                    'COLLECTIVA'
                }
              </div>
              <div id='designers-name'>
                {
                  (this.state.selectedLineIdx >= 0) ?
                    `${UTIL.name_list_formatter(CONSTANTS.LINE_INFO[this.state.selectedLineIdx].designers)}` :
                    ''
                }
              </div>
            </div>
            <div id="more-info">
              See more &gt;
            </div>

            { /* Various line and dot elements */ }
            <div id="see-more-line" />
            <div className="dot" id="see-more-dot" />
            <div className="vertical-line" id="outer-lines" />
            <div className="vertical-line" id="inner-lines" />
            <div className="horizontal-line lower" />
            <div className="horizontal-line upper" />
            <div className="dot left-dot lower"/>
            <div className="dot left-dot upper" />
            <div className="dot right-dot lower"/>
            <div className="dot right-dot upper" />

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