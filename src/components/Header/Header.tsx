import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import * as React from "react";
import Drawer from "../ui/Drawer/Drawer";
import HeaderLinks from "../ui/HeaderLinks";


function Header() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar component="nav" position='fixed'>
        <Toolbar sx={{justifyContent: {xs: 'right', sm: 'center'}}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display: {sm: 'none'}}}
          >
            <Box>
              <img src='assets/menu.png' alt='menu'/>
            </Box>
          </IconButton>
          <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
            <HeaderLinks/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>

      <Box position={'relative'}>
        <img width={'100%'} height={'500px'} src={'assets/header-bg-2x.png'} alt={'header2x'}
             style={{position: 'relative', top: 0, right: 0}}/>
        <img src={'assets/logo.png'} style={{
          objectFit: 'cover',
          objectPosition: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: "absolute",
          maxWidth: '100%'
        }} alt={'header'}/>
      </Box>
    </>
  );
}

export default Header;