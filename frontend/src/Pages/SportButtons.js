import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./ExpolertPart.css";


function SportButtons(props) {
  return (
    <div className='xbuttons'style={{}} >
      
      <Stack spacing={4} direction="row">
        {/* Button for indoor cricket */}
        <Button className='cricket' variant="contained" style={{ textTransform: 'capitalize' }}>
          Indoor-Cricket
        </Button>
        {/* Button for swimming */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Badminton
        </Button>
        {/* Button for table tennis */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Futsal
        </Button>
        {/* Button for billiard */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Table Tennis
        </Button>
        {/* Button for gym */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Billiard
        </Button>
      
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
        Rowing
        </Button>
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Gym
        </Button>
        </Stack>

        <br></br>
      
        <div >

          <Stack spacing={4} direction="row">
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          swimming
        </Button>
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Basket Ball
        </Button>
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' }}>
          Volley Ball
        </Button>
        </Stack>
        </div>

    
      
    </div>
  );
}

export default SportButtons;
