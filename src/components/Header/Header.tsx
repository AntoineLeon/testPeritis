import Link from "../ui/Link";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import * as React from "react";


function Header(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>

      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            MUI
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {['LE COTÉ LUMINEUX', 'LE COTÉ OBSCUR', 'L’EMPIRE', 'LES DROÏDES', 'LES EWOKS', 'JABBA LE HUTT]'].map(title =>
              <Link title={title}/>
            )}
          </Box>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default Header;