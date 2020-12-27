/**
 * LG logo.
 *
 * We are using the white logo because a lot of our backgrounds are black.
 */

import React from 'react';
import LG_LOGO from '../../assets/logo/LGLogo_white.svg';

class Logo extends React.Component {
  render() {
    return <LG_LOGO className='logo'/>;
  }
}

export default Logo;