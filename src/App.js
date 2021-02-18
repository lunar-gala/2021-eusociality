import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LinePage from "./pages/LinePage";
import PeoplePage from "./pages/PeoplePage";
import ScrollToTop from "./lib/ScrollToTop";

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
        <ScrollToTop />
        <Switch>
          <Route
            path="/lines/([1-9]|10|11|12|13|14|15|16)"
            component={LinePage}
          ></Route>
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
