import React, {useState} from 'react';

import Header from './Header';
import '../index.css';
import {
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import FlexBetween from "./FlexBetween";
import PieRechartComponent from './TodayProfit';
import OverviewChart from "./OverviewChart";
import BookingsTable from './BookingsTable';




const Dashboard = () => {
 // const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [user, setUser] = useState({ name: "Mary" });



  return (
    <div className="App">
    <Header/>

        <div className='bg' style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center', marginTop:'95px'}}>
        <div style={{marginLeft:'65px'}}>
        <p style = {{color:'#B7F500',fontFamily:'inter', fontWeight: 'bold'}}>Ground</p>            
        <EditRoundedIcon sx={{ color: '#B7F500', fontSize: '27px', border: '2px solid #B7F500', padding: '2px', borderRadius: '5px',marginRight: '20px'}}/>
            <AddBoxRoundedIcon sx={{ color: '#B7F500', fontSize: '35px' }}/>
          </div>
          <div>
          <p style = {{color:'#B7F500',fontFamily:'inter', fontWeight: 'bold'}}>Court</p>
            <EditRoundedIcon sx={{ color: '#B7F500', fontSize: '27px', border: '2px solid #B7F500', padding: '2px', borderRadius: '5px',marginRight: '20px'}}/>
            <AddBoxRoundedIcon sx={{ color: '#B7F500', fontSize: '35px' }}/>
          </div>


          <div className='box' >
          <Box sx={{ width:'350px', height:'100px', marginRight: '65px'}}
          backgroundColor="#ffffff"
          p="1rem"
          borderRadius="0.55rem"
        >
            {/*Ratings */}
            
        </Box>
        
          </div>
          
                      
        </div>

        <div>
        
        <Box m="1.5rem 2.5rem">
        
      <FlexBetween>
      <Typography variant="h5" style={{ fontWeight: 600, color:"#1C5555" }}>DASHBOARD</Typography>
      </FlexBetween>
      <FlexBetween>
      <Typography variant="h6" style={{ fontWeight: 520, color:"#1C5555" }}>Welcome to your dashboard</Typography>
      </FlexBetween>
        
      
      

      
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#e8e8e8"
          p="1rem"
          borderRadius="0.55rem"
          
        >
          <OverviewChart/>
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#e8e8e8"
          p="1rem"
          borderRadius="0.55rem"
          
        >
            <Typography variant="h5"  style={{ fontWeight: 600, color:"#1C5555" }} gutterBottom>Total Income for Today</Typography>
            <Typography sx={{fontSize:"21px", flex: 1}}color="#475569"  >
                  Hey {user.name}, here is your total income for the day
            </Typography>
            <Typography sx={{fontSize:"18px", fontWeight: 600}} color="#1E293B">
                  Rs.224,807.27
            </Typography>
            <div>
                <PieRechartComponent />
            </div>
          
        </Box>
         
       

        {/* ROW 2 */}
        
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          mt="1rem"
        >
        <Typography variant="h5" style={{ fontWeight: 600, color:"#1C5555" }}>Bookings</Typography>
          <Box mt="1rem"> 
              <BookingsTable />
          </Box>

         
        </Box>
        
       
      </Box>
    </Box>
    </div>
    </div>
   
  );
}

export default Dashboard;
