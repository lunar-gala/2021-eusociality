import React from "react";
import * as CONSTANTS from "../constants";
import PeopleAccordion from "../components/PeopleAccordion";
import PeopleBackground from "../components/PeopleBackground";

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

        <div id="team-accordion">
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
