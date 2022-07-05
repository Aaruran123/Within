import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as WithinLogo } from './../images/within-logo.svg';

export const WithinAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#4B98B2' }}>
        <Toolbar >
         
          <WithinLogo width={50} height={50}/>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Within App
          </Typography> */}
          {/* <Button color="inherit">Log out</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}