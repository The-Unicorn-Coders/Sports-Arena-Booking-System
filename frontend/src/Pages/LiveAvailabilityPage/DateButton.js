import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './DateButton.css';

export default function Pricing() {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const getButtonStyle = (button) => {
    const isActive = activeButton === button;
    return {
      boxSizing: 'border-box',
      width: '98px',
      height: '38px',
      background: isActive ? '#1C5555' : '#FFFFFF',
      border: `2px solid #1C5555`,
      color: isActive ? '#FFFFFF' : '#1C5555',
      textTransform: 'capitalize',
    };
  };

  return (
    <div>
      <span className='pricing'>Pricing</span>
      <Stack className='buttons' spacing={2} direction='row'>
        <Button 
          className="B1" 
          variant="outlined"
          style={getButtonStyle(0)}
          onClick={() => handleClick(0)}
        >
          Mon
        </Button>
        <Button 
          className="B2" 
          variant="outlined" 
          style={getButtonStyle(1)}
          onClick={() => handleClick(1)}
        >
          Tue
        </Button>
        <Button 
          className="B3" 
          variant="outlined" 
          style={getButtonStyle(2)}
          onClick={() => handleClick(2)}
        >
          Wed
        </Button>
        <Button 
          className="B4" 
          variant="outlined" 
          style={getButtonStyle(3)}
          onClick={() => handleClick(3)}
        >
          Thu
        </Button> 
        <Button 
          className="B5" 
          variant="outlined" 
          style={getButtonStyle(4)}
          onClick={() => handleClick(4)}
        >
          Fri
        </Button>
        <Button 
          className="B6" 
          variant="outlined" 
          style={getButtonStyle(5)}
          onClick={() => handleClick(5)}
        >
          Sat
        </Button>
        <Button
          className="B7"
          variant="outlined"
          style={getButtonStyle(6)}
          onClick={() => handleClick(6)}
        >
          Sun
        </Button>
      </Stack>
      <div className='selected-day'>
        You have selected {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][activeButton]}
      </div>
      <div className='box-1'></div>
      <div className='box-2'></div>
    </div>
  );
}
