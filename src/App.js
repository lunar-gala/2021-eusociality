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

  /**
   * Indicate that the page has loaded, so we are free to run animations
   * without waiting for any assets to load, which would chop up the smoothness
   * of the animation.
   */
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
            <TransitionGroup id='transition-group'>
              <CSSTransition timeout={1000} classNames="fade" key={location.pathname.includes('lines/')}>
                <Switch location={location}>
                  <Route
                    exact path="/lines/([1-9]|10|11|12|13|14|15|16|17)"
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
