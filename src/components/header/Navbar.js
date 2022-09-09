import React from 'react';
import { Grid, Button  } from '@mui/material';
import { navbarStyle } from './Style';
import { BiCalculator } from 'react-icons/bi';
import { CgMicrosoft } from 'react-icons/cg';
import { MoneyOutlined, Logout}  from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
     <Grid container  sx={{justifyContent: 'flex-end'}}>
        <Button sx={navbarStyle.navbarrightbtn}>+</Button>
        <Button sx={navbarStyle.navbarrightbtn}><BiCalculator /></Button>
        <Button sx={navbarStyle.navbarrightbtn}><CgMicrosoft />&ensp;POS</Button>
        <Button sx={navbarStyle.navbarrightbtn}><MoneyOutlined /></Button>
        <Link to="/"><Button sx={navbarStyle.navbarrightbtn}><Logout /></Button></Link>
        {/* <Button sx={navbarStyle.navbarright}>+</Button> */}
      </Grid>
   </>
  )
}

export default Navbar;