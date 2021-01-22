import React from 'react';
import PropTypes from 'prop-types';

import * as CONSTANTS from '../constants';
import * as LINE_DATA from '../data/line_data';
import * as UTIL from '../util';

// Components
import DesktopSideNav from '../components/DesktopSideNav';
import BackButton from '../components/BackButton';

// Images
// TODO: there will be a lot of these, so probably a good idea to move this into a file and import everything in that file
import BACKGROUND_FIRST from '../../assets/img/examples/bg1.jpg';
import BACKGROUND_SECOND from '../../assets/img/examples/bg2.jpg';
import MODEL_1 from '../../assets/img/examples/girl1.jpg';
import MODEL_2 from '../../assets/img/examples/girl2.jpg';
import MODEL_3 from '../../assets/img/examples/girl3.jpg';
import MODEL_4 from '../../assets/img/examples/girl4.jpg';
import NavbarLinePage from '../components/NavbarLinePage';

class LinePage extends React.Component {
  constructor(props) {
    super(props);

    const regexFindLineIndex = /\/lines\/(\d+)/;
    const currLineNumber = regexFindLineIndex.exec(this.props.location.pathname)[1];

    this.state = {
      selectedLineIdx: currLineNumber - 1
    };

    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
  }

  handlerSelectedLineIdx (index) {
    this.setState({selectedLineIdx: index});
  }

  slidingImage (image, id) {
    return <div className='sliding-image'>
      <img src={image} className={`image`} key={this.state.selectedLineIdx} id={id}/>
      <div className='frame' />
    </div>
  }

  render () {
    const line_info = LINE_DATA.LINE_INFO[this.state.selectedLineIdx];

    return (
      <div id='line-page'>
        <div id='background'>
          <img src={BACKGROUND_FIRST} id='first' className='background-picture' />
          <img src={BACKGROUND_SECOND} id='second' className='background-picture' />
        </div>
        <div id='top-title'>
          {CONSTANTS.LANDING_PAGE_TITLE}
        </div>
        <div className='main-content'>
          <div id='name'>
            {line_info.name}
          </div>
          <div id='designers'>
            <div id='designers-text'>
              {UTIL.name_list_formatter(line_info.designers)}
            </div>
            <div id='right-bar'>
              <div className='dot-basic'/>
              <div className='line'/>
            </div>
          </div>
          <div id='pictures-top'>
            { this.slidingImage(MODEL_2, 'a') }
            { this.slidingImage(MODEL_4, 'b') }
            { this.slidingImage(MODEL_1, 'c') }
            { this.slidingImage(MODEL_3, 'd') }
          </div>
          <div id='description'>
            {line_info.description ? line_info.description : LINE_DATA.LINE_INFO[0].description }
          </div>
          <div id='left-bar'>
            <div className='line'/>
            <div className='dot-basic'/>
          </div>
          <div id='pictures-bottom'>
            <img src={MODEL_4} id='left' />
            <img src={MODEL_3} id='right' />
          </div>
        </div>
        <NavbarLinePage selectedLineIdx={this.state.selectedLineIdx} handlerSelectedLineIdx={this.handlerSelectedLineIdx} />
        { /* Navbar goes here */ }

        {/* Additional overlay components */}
        { /* TODO: make the desktop side nav fixable so it moves with scroll */ }
        <DesktopSideNav />
        <BackButton />
      </div>
    );
  }
}

LinePage.propTypes = {
  location: PropTypes.object
};

export default LinePage;
