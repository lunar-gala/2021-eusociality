import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LinePage from './pages/LinePage';
import AboutPage from './pages/AboutPage';
import PeoplePage from './pages/PeoplePage';

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/lines/1'>
            <LinePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/people'>
            <PeoplePage />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;