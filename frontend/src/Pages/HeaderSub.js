import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import DrawerComp from './DrawerComp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css';

const PAGES1 = ["EXPOLER"];
const PAGES2 = ["ABOUT US"];
const PAGES3 = ["HELP"];

const propTypes = {};

const defaultProps = {};

const HeaderSub = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [profilePicture, setProfilePicture] = useState('profile-picture-url');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar className='appbar' sx={{ background: "#191919" }}>
          <Toolbar>
            <PlaceIcon className='icon' sx={{ background: "#191919", color: '#B7F500' }} />

            {isMatch ? (
              <>
                <Typography className='arena2' sx={{ fontSize: 30, fontFamily: 'Bebas Neue', fontStyle: 'normal' }}>
                  ARENA
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Typography className='arena' sx={{
                  fontSize: 15,
                  fontFamily: 'Bebas Neue',
                  fontStyle: 'normal',
                  color: '#B7F500',
                  width: 120,
                  height: 60,
                  fontWeight: 400,
                  letterSpacing: 0.1
                }}>
                  <h1>ARENA</h1>
                </Typography>

                <Tabs className='tabs'
                  textColor=' #FFFFFF' value={value}
                  onChange={(_e, value) => setValue(value)}
                  TabIndicatorProps={{ style: { background: '#B7F500' } }}>
                  {PAGES1.map((EXPOLER, index1) => (
                    <Tab key={index1} label={EXPOLER} sx={{ marginLeft: '300px' }} />
                  ))}
                  {PAGES2.map((ABOUT_US, index2) => (
                    <Tab key={index2} label={ABOUT_US} sx={{ marginRight: '50px' }} />
                  ))}
                  {PAGES3.map((HELP, index3) => (
                    <Tab key={index3} label={HELP} sx={{ marginLeft: '-60px' }} />
                  ))}
                </Tabs>

                <div style={{ flexGrow: 1 }} /> {/* Add a flexible box to push the IconButton to the right side */}

                <IconButton className='blogin' type='button' sx={{ color: '#FFFFFF' }} onClick={handleMenuOpen}>
                  <Avatar src={profilePicture} alt="Profile Picture" sx={{ width: 32, height: 32 }} />
                  <ExpandMoreIcon />
                </IconButton>

                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={() => handleOptionSelect('Option 1')}>My Profile</MenuItem>
                  {/*<MenuItem onClick={() => handleOptionSelect('Option 2')}>Bookings</MenuItem>*/}
                </Menu>
              </>
            )}
          </Toolbar>
        </AppBar>
        {selectedOption && <Typography>{selectedOption}</Typography>}
      </React.Fragment>
    </div>
  );
}

HeaderSub.propTypes = propTypes;
HeaderSub.defaultProps = defaultProps;

export default HeaderSub;
