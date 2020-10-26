import React from 'react';
import Navbar from './components/Navbar';
import TitleTheme from './components/TitleTheme';

class App extends React.Component {
  render () {
    return <div className="landing-page">
      <TitleTheme />
      <Navbar/>
    </div>;
  }
}

export default App;