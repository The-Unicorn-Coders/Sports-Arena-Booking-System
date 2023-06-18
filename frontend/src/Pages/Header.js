import React,{useState} from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery,useTheme } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import DrawerComp from './DrawerComp';
import './Header.css'

const PAGES1 = ["EXPOLER"];
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
const Header = () => {

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
          {/* Icon with 'ARENA' */}
          <PlaceIcon  className='icon' 
            sx = {{background: "#191919" , color: '#B7F500'}}/>

          {/* If screen is < 960px, render drawer component */}
          {isMatch ? (
            <>
              <Typography className='arena2' 
                sx = {{fontSize: 30, fontFamily:'Bebas Neue', fontStyle:'normal'}}>
                  ARENA
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              {/* Title with 'ARENA' */}
              <Typography className='arena' 
                sx = {{
                  fontSize: 15, 
                  fontFamily:'Bebas Neue', 
                  fontStyle:'normal', 
                  color: '#B7F500',   
                  width: 120,
                  height: 60,
                  fontWeight: 400,
                  letterSpacing: 0.1
                }}>
                <h1>ARENA</h1>
              </Typography>

              {/* Tabs with page names */}
              <Tabs className='tabs'
                textColor=' #FFFFFF' value={value} 
                onChange={(_e, value)=> setValue(value)}
                TabIndicatorProps={{style: {background:'#B7F500'}}}>
                {
                  PAGES1.map((EXPOLER,index1)=> (
                    <Tab key= {index1}  label={EXPOLER} sx={{marginLeft: '300px'}} />
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

              {/* Buttons for login and sign up */}
              <div className='buttons'>      
                <Button className='blogin' type = 'button' sx={{marginLeft: 'auto', background: "#191919" , boarderColor:'#B7F500'}} variant='outlined' >
                  <label className='login'>Log in</label>
                </Button>
                <Button sx={{marginLeft: '10px', background: "#B7F500"}} variant='contained'>
                  <label className='sign-up'>Signup</label>
                </Button> 
              </div> 
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>

    </div>;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;