import React, {useState} from 'react';
import TeamTab from '../components/TeamTab';
import * as CONSTANTS from '../constants';

export default function PeopleAccordion() {
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => () => {
    if (expanded.includes(panel)) {
      setExpanded(expanded.filter((item) => {
        return item !== panel;
      }));
    } else {
      setExpanded([...expanded, panel]);
    }
  };

  return (
    <div>
      {
        CONSTANTS.TEAM_NAMES.map(teamName => {
          return <TeamTab panelId={teamName} teamName={teamName} handleChange={() => handleChange(teamName)} key={teamName}/>
        })
      }
    </div>
  );
}