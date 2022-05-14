import React ,{ useState, useEffect } from 'react'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import './Person.css';

const Results = () => (
  <div className="settings">
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Choose Default or Upload Custom Pronunuciation</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Choose Default or Upload Custom Pronunuciation
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Logout</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Logout
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
)

function Person() {

  const [showPreference, setShowPreference] = React.useState(false);
  const onToggle = () => {
    if(showPreference)
    setShowPreference(false)
  else
    setShowPreference(true)
}
  return (
    <div className="person"  >
      <h6 style={{ 'color': "white" }}>Welcome {window.firstName} {window.lastName}</h6>
      <AccountBoxRoundedIcon onClick={onToggle} fontSize="large" style={{ 'color': "white" }} />
      <Results /> 
      </div>
    
  )
}

export default Person