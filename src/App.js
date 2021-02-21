import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LinePage from "./pages/LinePage";
import ScrollToTop from "./lib/ScrollToTop";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page_has_loaded: false,
    };

    this.handlePageLoad = this.handlePageLoad.bind(this);
  }

  handlePageLoad() {
    this.setState({
      page_has_loaded: true,
    });
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route
            path="/lines/([1-9]|10|11|12|13|14|15|16)"
            component={LinePage}
          />
          <Route
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                handlePageLoad={this.handlePageLoad}
                page_has_loaded={this.state.page_has_loaded}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
