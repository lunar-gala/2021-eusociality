import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import TeamBio from "../components/TeamBio";
import { PEOPLE_DATA, PEOPLE_BY_TEAMS } from "../data/people_data";

export default function TeamTab(props) {
  const { expanded, handleChange, teamName } = props;

  const [curClicked, setCurClicked] = useState(false);

  let pictures = [];
  let notPictured = [];
  let parity = false;

  if (PEOPLE_BY_TEAMS[teamName] !== undefined) {
    pictures = PEOPLE_BY_TEAMS[teamName].map((andrew_id) => {
      let entry = PEOPLE_DATA[andrew_id];

      if (entry.image !== undefined && entry.image !== null) {
        parity = !parity;

        return (
          <TeamBio
            imgSrc={entry.image}
            name={`${entry.first_name} ${entry.last_name}`}
            parity={parity}
            title={entry.position}
            key={andrew_id}
          />
        );
      } else {
        notPictured.push(
          <p key={andrew_id}>
            {entry.first_name} {entry.last_name}
          </p>
        );
        return <></>;
      }
    });
  }

  return (
    <Accordion
      className={`tab-main ${curClicked ? "clicked" : "unclicked"}`}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        className="tab-header"
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <h1 className="team-title" onClick={() => setCurClicked(!curClicked)}>
          {teamName}
        </h1>
        <div className="display_circle" /> <div className="display_line" />
      </AccordionSummary>
      <AccordionDetails className="tab-body">
        <div className="bioWrapper">{pictures}</div>

        <div className="notPictured">
          {notPictured.length > 0 && (
            <>
              <h2>Not Pictured</h2>
              {notPictured}
            </>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

TeamTab.propTypes = {
  /** @brief Shows if the tab is expanded or not */
  expanded: PropTypes.bool,
  /** @brief Handles updating accordion when tab is clocked */
  handleChange: PropTypes.func.isRequired,
  /** @brief Name of the team */
  teamName: PropTypes.string.isRequired,
};
