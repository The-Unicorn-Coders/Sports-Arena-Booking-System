import React,{useState} from 'react'

import { AppBar, Tab, Tabs, Box, Toolbar, Typography, Button, Menu, MenuItem, useMediaQuery,useTheme } from '@mui/material';
import profileImage from '../assets/profile.jpeg';
import SubDrawerComp from './SubDrawerComp';
import './SubHeader.css';
import {ArrowDropDownOutlined} from "@mui/icons-material";

const PAGES1 = ["EXPLORE"];
const PAGES2 = ["ABOUT US"];
const PAGES3 = ["HELP"];




// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SubHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
const [user, setUser] = useState({ name: "John Doe" });

     // State to keep track of the current active tab
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);

  // Conditionally render based on media query, true if screen width < 960px
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

    return <div>


<React.Fragment>
      <AppBar className='appbar'
        sx = {{background: "#191919"}}>
        <Toolbar>
          

          {/* If screen is < 960px, render drawer component */}
          {isMatch ? (
            <>
            <Box m="1.5rem 2rem 2rem 3rem">{/*margin clockwise top, right,bottom,left*/}
                <Box display="flex" alignItems="center" gap="0.5rem">
                <img class="imglogo" src="Logo.png" alt="logo" style={{ width: "55px", height: "56.5px" }}/>
                  <Typography fontWeight="bold" color="#b7f500"  sx = {{
                            fontSize: 40, 
                            fontFamily:'Bebas Neue',  
                            letterSpacing: '0.1em',
                            position: 'absolute', 
                            top:'15px',
                            left:'125px'
                            }}>
                    ARENA
                  </Typography>
                </Box>
              </Box>
              <SubDrawerComp />
            </>
          ) : (
            <>
              {/* Title with 'ARENA' */}
              <Box m="1.5rem 2rem 2rem 3rem">{/*margin clockwise top, right,bottom,left*/}
                <Box display="flex" alignItems="center" gap="0.5rem">
                <img class="imglogo" src="Logo.png" alt="logo" style={{ width: "55px", height: "56.5px" }}/>
                  <Typography fontWeight="bold" color="#b7f500"  sx = {{
                            fontSize: 40, 
                            fontFamily:'Bebas Neue',  
                            letterSpacing: '0.1em',
                            position: 'absolute', 
                            top:'15px',
                            left:'125px'
                            }}>
                    ARENA
                  </Typography>
                </Box>
              </Box>
              {/* Tabs with page names */}
              <Tabs className='tabs'
                textColor=' #FFFFFF' value={value} 
                onChange={(_e, value)=> setValue(value)}
                TabIndicatorProps={{style: {background:'#B7F500'}}}>
                {
                  PAGES1.map((EXPLORE,index1)=> (
                    <Tab key= {index1}  label={EXPLORE} sx={{marginLeft: '300px'}} />
                  )) 
                }
                {
                  PAGES2.map((ABOUT_US,index2)=> (
                    <Tab key= {index2}  label={ABOUT_US} sx={{marginRight: '50px'}}/>
                  )) 
                }
                {
                  PAGES3.map((HELP, index3)=> (
                    <Tab key= {index3}  label={HELP} sx={{marginLeft: '-60px'}} />
                  )) 
                }
              </Tabs>

              {/* Button for logout*/}
              <div className='buttons'>      
              <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
                color: "#b7f500",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                marginLeft="1000px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: "#ffffff" }}
                >
                  {user.name}
                </Typography>
                
              </Box>
              <ArrowDropDownOutlined
                sx={{ fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
              </div> 
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>

    </div>;
}

SubHeader.propTypes = propTypes;
SubHeader.defaultProps = defaultProps;
// #endregion

export default SubHeader;