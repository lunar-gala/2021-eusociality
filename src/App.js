import React from 'react';
import LandingPageModel from './components/LandingPageModel';

/**
 * This is the highest level of the web app.
 *
 * We will store state here, and keep track of all user interactions at this
 * level.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    /*** Initialization ***/
    this.state = {
      /** @brief Mouse position x */
      x: 0,
      /** @brief Mouse position y */
      y: 0,
      /** @brief Window width, including resizing */
      width: 0,
      /** @brief Window height, including resizing */
      height: 0
    };

    // Keep track of window width
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  _onMouseMove(e) {
    console.log(e);
    this.setState({ x: e.screenX, y: e.screenY });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render () {
    return <div onMouseMove={this._onMouseMove.bind(this)}>
      <LandingPageModel />
    </div>;
  }
}

export default App;