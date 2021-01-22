import React from 'react';
import PropTypes from "prop-types";
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import TeamBio from '../components/TeamBio';
import headshot1 from '../../assets/img/headshot1.png'
import headshot2 from '../../assets/img/headshot2.png'
import headshot3 from '../../assets/img/headshot3.png'
import headshot4 from '../../assets/img/headshot4.png'


export default function TeamTab(props) {
  const {expanded, handleChange, teamName} = props;

  return (
      <Accordion className="tab-main" expanded={expanded} onChange={handleChange}>
        <AccordionSummary className="tab-header" aria-controls="panel1d-content" id="panel1d-header">
          <h1 className="team-title">{teamName}</h1>
        </AccordionSummary>
        <AccordionDetails className="tab-body">
          <TeamBio imgSrc={headshot1} name={'Mimi Jiao'} title={'Co-Head Director'}/>
          <TeamBio imgSrc={headshot2} name={'Mimi Jiao'} title={'Co-Head Director'}/>
          <TeamBio imgSrc={headshot3} name={'Mimi Jiao'} title={'Co-Head Director'}/>
          <TeamBio imgSrc={headshot4} name={'Mimi Jiao'} title={'Co-Head Director'}/>

          <TeamBio imgSrc={headshot1} name={'Mimi Jiao'} title={'Co-Head Director'}/>
          <TeamBio imgSrc={headshot2} name={'Mimi Jiao'} title={'Co-Head Director'}/>
          <TeamBio imgSrc={headshot3} name={'Mimi Jiao'} title={'Co-Head Director'}/>
          <TeamBio imgSrc={headshot4} name={'Mimi Jiao'} title={'Co-Head Director'}/>

        </AccordionDetails>
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
