import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LinePage from "./pages/LinePage";
import ScrollToTop from "./lib/ScrollToTop";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page_has_loaded: false,
      transition_key: 0
    };

    this.handlePageLoad = this.handlePageLoad.bind(this);
  }

  handlePageLoad () {
    this.setState({
      page_has_loaded: true,
    });
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition timeout={1000} classNames="fade" key={location.pathname.includes('lines')}>
                <Switch location={location}>
                  <Route
                    path="/lines/([1-9]|10|11|12|13|14|15|16|17)"
                    render={(props) => (
                      <LinePage
                        {...props}
                      />
                    )}
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
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;
