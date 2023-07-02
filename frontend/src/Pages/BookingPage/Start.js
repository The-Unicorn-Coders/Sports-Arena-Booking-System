import React, { useState } from 'react';
import './Start.css'

function Start() {
  // Set initial state for selectedOption and create function to update it
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    // Update selectedOption when dropdown value changes
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Render heading */}
      <div>
        <span className='topic'>Customer Bookings</span>
      </div>
      {/* Render dropdown with options and update selectedOption on change */}
      <select className='dropdown' value={selectedOption} onChange={handleSelect}>
        <option value=""><b>All Bookings</b></option>
        <option value="option1">Cancel Bookings</option>
        <option value="option2">Active Bookings</option>
        <option value="option3">Past Bookings</option>
      </select>
      <p>All Bookings {selectedOption}</p>
    </div>
  );
}

export default Start;
