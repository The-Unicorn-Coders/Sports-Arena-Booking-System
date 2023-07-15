import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./ExpolertPart.css";


function SportButtons(props) {
  return (
    <div className='xbuttons'style={{}} >
      
      <Stack spacing={4} direction="row">
        {/* Button for indoor cricket */}
        <Button className='cricket' variant="contained" style={{ textTransform: 'capitalize',borderRadius:40 }} >
          Indoor-Cricket
        </Button>
        {/* Button for swimming */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          Badminton
        </Button>
        {/* Button for table tennis */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          Futsal
        </Button>
        {/* Button for billiard */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          Table Tennis
        </Button>
        {/* Button for gym */}
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          Billiard
        </Button>
      
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
        Rowing
        </Button>
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          Gym
        </Button>
        </Stack>

        <br></br>
      
        <div >
          <Stack spacing={4} direction="row">
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          swimming
        </Button>
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize',borderRadius:40,borderColor:'#1c5555',color:' #1c5555', }}>
          Basket Ball
        </Button>
        <Button className='sport2' variant="outlined" style={{ textTransform: 'capitalize' ,borderRadius:40,borderColor:'#1c5555',color:' #1c5555',}}>
          Volley Ball
        </Button>
        </Stack>
        </div>

    
      
    </div>
  );
}

export default SportButtons;
