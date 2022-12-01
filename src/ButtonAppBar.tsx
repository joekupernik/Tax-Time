import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >       
          <Button color="inherit" variant="contained" size="large" sx={{mr: 2, ml: 2}} ><Link to="/">Home</Link></Button>
          <Button color="inherit" variant="contained" size="large" sx={{mr: 2, ml: 2}}><Link to="/about">About</Link></Button>
          <Button color="inherit" variant="contained" size="large" sx={{mr: 2, ml: 2}}><Link to="/services">Services</Link></Button>
          <Button color="inherit" variant="contained" size="large" sx={{mr: 2, ml: 2}}><Link to="/contact">Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

