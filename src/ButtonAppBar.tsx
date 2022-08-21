//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>       
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/about">About</Link></Button>
          <Button color="inherit"><Link to="/services">Services</Link></Button>
          <Button color="inherit"><Link to="/contact">Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

