import React from 'react';
import Navbar from './components/Navbar';
import TitleTheme from './components/TitleTheme';
import * as CONSTANTS from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Which line is currently being hovered
      selected_line_idx: null
    };
  }

  render () {
    return <div className="landing-page">
      <TitleTheme />
      <Navbar selected_line_idx={this.state.selected_line_idx}/>
      <div id='curr_line'>
        {`${this.state.selected_line_idx} | ${CONSTANTS.LINE_NAMES[this.state.selected_line_idx]}`}
      </div>
    </div>;
  }
}

export default App;