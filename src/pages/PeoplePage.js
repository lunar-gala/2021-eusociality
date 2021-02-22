import React from "react";
import PropTypes from "prop-types";
import * as CONSTANTS from "../constants";
import PeopleAccordion from "../components/PeopleAccordion";
import PeopleBackground from "../components/PeopleBackground";
import { Parallax, Background } from "react-parallax";

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
    };
  }

  render() {
    return (
      <div
        id="people-page"
        className={`main-page ${this.props.landing_page_state}`}
      >
        <Parallax
          strength={500}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "-50vw",
            right: "50vw",
          }}
        >
          <Background
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
          {/*
            <PeopleBackground />
          */}
          </Background>
        </Parallax>

        <div id="team-accordion">
          <PeopleAccordion />
        </div>

        <div className="vertical-line" id="outer-lines" />
        <div className="vertical-line" id="inner-lines" />
      </div>
    );
  }
}

PeoplePage.propTypes = {
  /** @brief Sets the landing page state */
  handlerSetLandingPageState: PropTypes.func.isRequired,
  /** @brief Indicates if the menu is open or not, controlled by the parent */
  landing_page_state: PropTypes.string.isRequired,
};

export default PeoplePage;
