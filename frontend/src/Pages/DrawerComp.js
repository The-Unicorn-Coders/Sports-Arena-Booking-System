import React, {useState} from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Define the available pages in the drawer
const PAGES = ["EXPLORE", "ABOUT US", "HELP" , "LOG IN" , "SIGNUP"];

// Define a functional component for the drawer
const DrawerComp = () => {
  // Use state to track whether the drawer is open or closed
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    // Use React.Fragment to return multiple elements without a wrapper div
    <React.Fragment>
        {/* Define the drawer */}
        <Drawer 
        open={openDrawer}
        onClose = {() => setOpenDrawer(false)}>
            {/* Define the list of items in the drawer */}
            <List className='drawer' sx={{ backgroundColor:"#191919", height:650, width:200}}>
                {
                    // Map over the available pages and create a list item for each one
                    PAGES.map((page,index) => (
                        <ListItemButton onClick= {()=> setOpenDrawer(false)} key={index} >
                        <ListItemIcon>
                            <ListItemText sx={{ color:"#B7F500"}}>
                                {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))
                }

            </List>
        </Drawer>
        {/* Define the button that opens the drawer */}
        <IconButton className='menubutton' sx = {{color: '#B7F500' , marginLeft: 'auto'}} onClick= {() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
        </IconButton>
    </React.Fragment>
  );
};

// Export the component as the default export
export default DrawerComp;
