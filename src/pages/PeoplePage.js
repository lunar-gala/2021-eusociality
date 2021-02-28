import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import TitleTheme from "../components/TitleTheme";
import DesktopSideNav from "../components/DesktopSideNav";
import PeopleAccordion from "../components/PeopleAccordion";
import PeopleBackground from "../components/PeopleBackground";
import MobileOpenMenu from "../components/MobileOpenMenu";
import MobileMenuNavList from "../components/MobileMenuNavList";

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
    };
  }

  render() {
    return (
      <div className="main-page">
        <PeopleBackground />
        <div className="wrapper">
          <div className="header">
            {/* Common Elements */}
            <TitleTheme landing_page_state={this.state.landing_page_state} />
            {/*<Logo landing_page_state={this.state.landing_page_state} />*/}
            <DesktopSideNav />
            <MobileOpenMenu />
            {/* <MobileMenuNavList
              landing_page_state={this.state.landing_page_state}
            /> */}
          </div>
        </div>

        <div id="team-acordion">
          <PeopleAccordion />
        </div>

        {/* Various line and dot elements */}
        <div className="vertical-line" id="outer-lines" />
        <div className="vertical-line" id="inner-lines" />
      </div>
    );
  }
}

export default PeoplePage;
