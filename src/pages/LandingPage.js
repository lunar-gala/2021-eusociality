import React from 'react';
import {Link} from "react-router-dom";
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

          <img className="logo" src='img/1.png'></img>

          <div className='links'>
            <Link className='link' to='/'>LIVESTREAM</Link>
            <Link className='link' to='/about'>ABOUT</Link>
            <Link className='link' to='/people'>PEOPLE</Link>
          </div>

          <div id='curr-line'>
            <div id='line-name'>
              {
                // Only show the line name if we have hovered over a NavItem
                (this.state.selectedLineIdx >= 0) ?
                  UTIL.get_line_name(this.state.selectedLineIdx) :
                  ''
              }
            </div>
            <div id='designers-name'>
              {
                // Only show the designers names if we have hovered over a NavItem
                (this.state.selectedLineIdx >= 0) ?
                  UTIL.get_designer_name(this.state.selectedLineIdx) :
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