import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Static imports — not lazy-loaded.
// We originally used React.lazy here, but CSSTransition + Suspense are
// fundamentally incompatible: the transition enters on Suspense's blank
// fallback <div> instead of the real component, so clicking "See More"
// on the landing page or navigating to /#/lines/N would show a black
// screen. Both chunks are small enough (~7 kB LinePage, ~126 kB
// LandingPage gzipped) that the code-split complexity wasn't worth it.
import LandingPage from "./pages/LandingPage";
import LinePage from "./pages/LinePage";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page_has_loaded: false,
      transition_key: 0,
    };

    this.handlePageLoad = this.handlePageLoad.bind(this);
  }

  /**
   * Indicate that the page has loaded, so we are free to run animations
   * without waiting for any assets to load, which would chop up the smoothness
   * of the animation.
   */
  handlePageLoad() {
    this.setState({
      page_has_loaded: true,
    });
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Route
          render={({ location }) => (
            <TransitionGroup id="transition-group">
              <CSSTransition
                timeout={1000}
                classNames="fade"
                key={location.pathname.includes("lines/")}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/lines/([1-9]|10|11|12|13|14|15|16)"
                    render={(props) => (
                      <LinePage
                        {...props}
                        handlePageLoad={this.handlePageLoad}
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
