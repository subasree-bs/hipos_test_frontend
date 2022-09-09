import React, { useState } from "react";
import { Box, Typography,Accordion,AccordionSummary,AccordionDetails, Grid, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import "rsuite/dist/rsuite.css";
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import  Daterangepicker  from '../../../components/Daterangepicker';
import Purchasereturntable from './Table';


const Purchasereturntablelist = () => {

    
    // ***Filter Text Field****//
    const [purchaseSelect, setpurchaseSelect] = useState({businessLocation: ""});
    
    // accordian
    const [expanded, setExpanded] = useState('panel1');
    
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };
    
  return (
    <>
        <Box>
          <Typography sx={userStyle.HeaderText}>Purchases Return</Typography>
            { /* Filter start */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'rgb(94, 53, 177) !important'}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails > 
                    { /* Filter form start */}
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-helper-label">Business Location</InputLabel>
                            <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Business Location"
                            value={purchaseSelect.ProfitAddLocation}
                            onChange={(event) => { setpurchaseSelect({ ...purchaseSelect, businessLocation: event.target.value }) }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3} sx={{ '& .rs-picker':{ border: '1px solid #B97DF0 !important',}}}>
                            <FormControl size="small" fullWidth>
                                <Daterangepicker />
                            </FormControl>
                        </Grid>
                    </Grid>
                    { /* Filter form end */}
                </AccordionDetails> 
            </Accordion>
            { /* Filter end */}
        </Box><br />
        { /* table start */}
        <Box sx={userStyle.container}>     
            <Purchasereturntable />
        </Box>
        { /* table start */}
  </>
  )
}

function Purchasereturnlist(){
  return(
        <Box sx={{display:'flex',}} >
            <Sidebar />
            <Box sx={{ width: '100%',overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Purchasereturntablelist /><br /><br />
                <Footer />
                </Box>
            </Box>
        </Box>
  );
}

export default Purchasereturnlist;