import React from 'react';
import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import HeaderLinks from "../HeaderLinks";

const Drawer = ({handleDrawerToggle, mobileOpen}: { handleDrawerToggle: () => void, mobileOpen: boolean }) => {
  const drawer = (
    <Box sx={{height: '100vh', backgroundImage: "url('assets/header-bg-2x.png')"}}>
      <Box p={2}>
        <Grid container>
          <Grid item xs={12} sx={{textAlign: 'left'}}>
            <img src={'assets/close.png'} alt={'close'} onClick={handleDrawerToggle} style={{cursor: 'pointer'}}/>
          </Grid>
          <Grid item xs={12} width={'100%'} textAlign={'center'}>
            <HeaderLinks />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
  return (
    <Box component="nav">
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: '100%'},
        }}
      >
        {drawer}
      </MuiDrawer>
    </Box>
  );
};

export default Drawer;
