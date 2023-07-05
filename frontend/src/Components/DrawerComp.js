import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import profileImage from '../assets/profile.jpeg';

// Define the available pages in the drawer
const PAGES = ['EXPLORE', 'ABOUT US', 'HELP'];

// Define a functional component for the drawer
const DrawerComp = () => {
  // Use state to track whether the drawer is open or closed
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState({ name: 'John Doe' });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    // Use React.Fragment to return multiple elements without a wrapper div
    <React.Fragment>
      {/* Define the drawer */}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {/* Define the list of items in the drawer */}
        <List className="drawer" sx={{ backgroundColor: '#191919', height: 650, width: 200 }}>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: '#B7F500' }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <div className="buttons">
          <Button
            onClick={handleClick}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
              color: '#b7f500',
            }}
          >
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="32px"
              width="32px"
              borderRadius="50%"
              sx={{ objectFit: 'cover' }}
            />
            <Box textAlign="left">
              <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: "#B7F500" }}>
                {user.name}
              </Typography>
            </Box>
            <ArrowDropDownOutlinedIcon sx={{ color: "#B7F500", fontSize: '25px' }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </div>
      </Drawer>
      {/* Define the button that opens the drawer */}
      <IconButton className="menubutton" sx={{ color: '#B7F500', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

// Export the component as the default export
export default DrawerComp;
