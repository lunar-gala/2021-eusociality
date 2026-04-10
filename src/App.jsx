import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Code-split the landing and line pages. The landing page pulls in three.js,
// GLTF loaders, and all the line imagery; the line page is only reached via
// a route hit. Splitting lets the initial paint skip anything the user isn't
// actively viewing. See the perf notes in vite.config.js.
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LinePage = lazy(() => import("./pages/LinePage"));

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
        {/*
          Suspense wraps the TransitionGroup (not the other way around): if a
          lazy chunk suspends inside a CSSTransition, the transition gets a
          promise-throwing child and the whole subtree can end up stuck in a
          half-rendered state on a direct-URL load like /#/lines/7.
        */}
        <Suspense fallback={<div id="app-loading" />}>
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
        </Suspense>
      </Router>
    );
  }
}

export default App;
