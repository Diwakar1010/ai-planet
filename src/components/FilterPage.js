import React, { useContext, useState } from 'react'
import { Grid2 } from '@mui/material';
import EventCard from './EventCard';
import {Accordion,  AccordionSummary,  AccordionDetails,  Typography,  Checkbox,  FormControlLabel,  FormGroup,  FormControl,FormLabel, Button} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';
import { EventContext } from '../App';
import { Link } from 'react-router-dom';

const FilterPage = () => { 
  const{events} = useContext(EventContext)
  
  const [filteredEvents, setFilteredEvents] = useState(events)
  const [expanded, setExpanded] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    All: false,
    Active: false,
    Upcoming: false,
    Past: false,
  });


  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'All') {
      setCheckboxes({
        All: checked,
        Active: checked,
        Upcoming: checked,
        Past: checked,
      });
      setFilteredEvents(events)
    } else {
      setCheckboxes((prev) => {
        const updatedCheckboxes = { ...prev, [name]: checked };
          const allChecked = updatedCheckboxes.Active && updatedCheckboxes.Upcoming && updatedCheckboxes.Past;
          
          const activeFilters = Object.keys(updatedCheckboxes).filter((key) => updatedCheckboxes[key] && key !== 'All');
    
          const filteredList = activeFilters.length ? events.filter((event) => activeFilters.includes(event.status)): events;
    
          setFilteredEvents(filteredList);
    
        return {
          ...updatedCheckboxes,
          All: allChecked,
        };
      });
      
    }

  }


  const handleRemoveFilter = (filter) => {
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [filter]: false };
  
      
      const activeStatusFilters = Object.keys(updatedCheckboxes).filter(
        (key) => updatedCheckboxes[key] && ['Active', 'Upcoming', 'Past'].includes(key)
      );
      const activeLevelFilters = Object.keys(updatedCheckboxes).filter(
        (key) => updatedCheckboxes[key] && ['Easy', 'Medium', 'Hard'].includes(key)
      );
  
      
      const filteredList = events.filter((event) => {
        const matchesStatus = activeStatusFilters.length
          ? activeStatusFilters.includes(event.status)
          : true;
        const matchesLevel = activeLevelFilters.length
          ? activeLevelFilters.includes(event.level)
          : true;
        return matchesStatus && matchesLevel;
      });
  
      setFilteredEvents(filteredList);
  
      
      const allUnchecked =
        !updatedCheckboxes.Active &&
        !updatedCheckboxes.Upcoming &&
        !updatedCheckboxes.Past &&
        !updatedCheckboxes.Easy &&
        !updatedCheckboxes.Medium &&
        !updatedCheckboxes.Hard;
  
      return {
        ...updatedCheckboxes,
        All: !allUnchecked && updatedCheckboxes.All, 
      };
    });
  };
  
  


  const renderSelectedFilters = () => {
    return Object.keys(checkboxes)
      .filter((key) => checkboxes[key] && key !== 'All') 
      .map((key) => (
        <Button
          key={key}
          variant="contained"
          color="primary"
          style={{ marginRight: '10px', backgroundColor: '#6c757d', borderRadius:"30px" }} 
          endIcon={<CancelIcon onClick={() => handleRemoveFilter(key)} />}
        >
          {key}
        </Button>
      ));
  };
  return ( 
    <>
      <div className='filter-page'>
        <h1>Explore Challenges</h1>
        <input type='text' placeholder='Search'/>
        <div className={`drop-down ${expanded ? 'expanded' : ''}`}>
      <Accordion onChange={handleAccordionChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormLabel component="legend">Status</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox  name="All" checked={checkboxes.All} onChange={handleCheckboxChange} />} 
              label="All" />
              <FormControlLabel control={<Checkbox  name="Active" checked={checkboxes.Active} onChange={handleCheckboxChange}/>}
               label="Active" />
              <FormControlLabel control={<Checkbox  name="Upcoming" checked={checkboxes.Upcoming} onChange={handleCheckboxChange}/>}
               label="Upcoming" />
              <FormControlLabel control={<Checkbox  name="Past" checked={checkboxes.Past} onChange={handleCheckboxChange}/>} 
              label="Past" />
            </FormGroup>
            <FormLabel component="legend">Level</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Easy" />
              <FormControlLabel control={<Checkbox />} label="Medium" />
              <FormControlLabel control={<Checkbox />} label="Hard" />
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
        </div>
        <div style={{ marginTop: '20px', position:"absolute",top:"225px",left:"238px" }}>
          {renderSelectedFilters()}
        </div>
      </div>
      <div className="challenge-cards">
      <div style={{ padding: '20px', width: '1172px', height: '996px', margin: '0 auto' }}>
      <Grid2 container spacing={3}>
        {filteredEvents.map((event, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Link to='/preview' state={event} style={{ textDecoration: 'none' }} >
            <EventCard
              imageUrl={event.imageUrl}
              status={event.status}
              title={event.title}
              date={event.date}
              buttonText={event.buttonText}
            />
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </div>
      </div>
    </>

  )
}

export default FilterPage
