import React, { useState } from "react";
import PropTypes from "prop-types";
import TeamBio from "../components/TeamBio";
import { PEOPLE_DATA, PEOPLE_BY_TEAMS } from "../data/people_data";

/**
 * One collapsible team panel on the People page.
 *
 * Previously this used @material-ui/core's Accordion + react-reveal's Fade,
 * both of which are unmaintained and trigger a pile of React 18 legacy-API
 * warnings (contextTypes, UNSAFE_componentWillReceiveProps, findDOMNode).
 * The markup is plain divs now — the People-page SCSS already targets
 * `.tab-main`, `.tab-header`, `.tab-body`, `.bioWrapper` directly, so the
 * existing styling continues to work without the dependency weight.
 */
export default function TeamTab({ teamName }) {
  const [clicked, setClicked] = useState(false);

  const entries = PEOPLE_BY_TEAMS[teamName] || [];
  const pictures = [];
  const notPictured = [];
  let parity = false;

  for (const andrew_id of entries) {
    const entry = PEOPLE_DATA[andrew_id];
    if (entry.image) {
      parity = !parity;
      pictures.push(
        <TeamBio
          key={andrew_id}
          imgSrc={entry.image}
          name={`${entry.first_name} ${entry.last_name}`}
          parity={parity}
          title={entry.position}
        />
      );
    } else {
      notPictured.push(
        <p key={andrew_id}>
          {entry.first_name} {entry.last_name} {"— "} {entry.position}
        </p>
      );
    }
  }

  const toggle = () => setClicked((c) => !c);

  return (
    <div className={`tab-main ${clicked ? "clicked" : "unclicked"}`}>
      <div
        className="tab-header"
        role="button"
        tabIndex={0}
        aria-expanded={clicked}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <h1 className="team-title">{teamName}</h1>
        <div className="display_circle" />
        <div className="display_line" />
      </div>
      {clicked && (
        <div className="tab-body">
          <div className="bioWrapper">{pictures}</div>
          {notPictured.length > 0 && (
            <div className="notPictured">
              <h2>Not Pictured</h2>
              {notPictured}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

TeamTab.propTypes = {
  /** @brief Name of the team to display as the header and lookup key. */
  teamName: PropTypes.string.isRequired,
};
