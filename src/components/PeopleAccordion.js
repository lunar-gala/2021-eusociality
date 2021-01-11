import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion className="tab-main" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="tab-header" aria-controls="panel1d-content" id="panel1d-header">
          <h1 className="team-title">Producers</h1>
        </AccordionSummary>
        <AccordionDetails className="tab-body">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="tab-main" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className="tab-header" aria-controls="panel2d-content" id="panel2d-header">
        <h1 className="team-title">Production</h1>
        </AccordionSummary>
        <AccordionDetails className="tab-body">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="tab-main" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className="tab-header" aria-controls="panel3d-content" id="panel3d-header">
        <h1 className="team-title">Creative</h1>
        </AccordionSummary>
        <AccordionDetails className="tab-body">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}