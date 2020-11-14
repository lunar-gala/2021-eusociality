import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PeoplePage from './pages/PeoplePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
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