import React from 'react';
import {Grid, Typography} from "@mui/material";
import Link from "../ui/Link";

function Footer() {
  return (
    <Grid container style={{
      height: '272px',
      backgroundImage: "url('assets/darthvader.jpg')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#181818'
    }}>
      <Grid container pt={4}>
        <Grid item xs={12} sx={{display: {xs: 'none', sm: 'block'}}}>
          <Typography color={'primary.dark'}>
            <p><strong>TM Lucasfilm</strong> Ltd. All Rights Reserved.</p>
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={6} sm>
            <Link size={14} p={1} color={'primary.dark'}><u>Terms of Use</u></Link>
            <Link size={14} p={1} color={'primary.dark'}><u>Legal Notices</u></Link>
            <Link size={14} p={1} color={'primary.dark'}><u>Privacy Policy</u></Link>
          </Grid>

          <Grid item xs={6} sm>
            <Link size={14} p={1} color={'primary.dark'}><u>Your California Privacy Rights</u></Link>
            <Link size={14} p={1} color={'primary.dark'}><u>Star Wars at Disney Store</u></Link>
            <Link size={14} p={1} color={'primary.dark'}><u>Privacy Policy</u></Link>
          </Grid>
          <Grid container item xs={12} sm>
            <Grid xs={6} sm={12}>
              <Typography p={1} color={'primary.dark'}>Follow Star Wars</Typography>
            </Grid>
            <Grid item xs>
              <img src="assets/icon_facebook.png" alt="facebook" style={{padding: 8}}/>
              <img src="assets/icon_twitter.png" alt="twitter" style={{padding: 8}}/>
              <img src="assets/icon_instagram.png" alt="instagram" style={{padding: 8}}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer;