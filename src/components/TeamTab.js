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

  const [curHover, setCurHover] = useState(false);

  let pictures = [];

  if (PEOPLE_BY_TEAMS[teamName] !== undefined) {
    pictures = PEOPLE_BY_TEAMS[teamName].map((andrew_id) => {
      let entry = PEOPLE_DATA[andrew_id];

      if (entry.image !== undefined) {
        if (entry.image === undefined) {
          console.log(entry, entry.image)
        }
        return (
          <TeamBio
            imgSrc={entry.image}
            name={`${entry.first_name} ${entry.last_name}`}
            title={entry.position}
            key={andrew_id}
          />
        );
      } else {
        return null;
      }
    });
  }

  return (
    <Accordion className="tab-main" expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        className="tab-header"
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <h1
          className="team-title"
          onMouseEnter={() => setCurHover(true)}
          onMouseLeave={() => setCurHover(false)}
        >
          {teamName}
        </h1>
        {curHover && (
          <>
            <div className="display_circle" /> <div className="display_line" />
          </>
        )}
      </AccordionSummary>
      <AccordionDetails className="tab-body">{pictures}</AccordionDetails>
    </Accordion>
  );
}

TeamTab.propTypes = {
  /** @brief Shows if the tab is expanded or not */
  expanded: PropTypes.bool.isRequired,
  /** @brief Handles updating accordion when tab is clocked */
  handleChange: PropTypes.func.isRequired,
  /** @brief Name of the team */
  teamName: PropTypes.string.isRequired,
};
