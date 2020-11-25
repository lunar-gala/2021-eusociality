import React from 'react';
import LandingPageModel from './components/LandingPageModel';

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div>
      <LandingPageModel />
    </div>;
  }
}

export default App;