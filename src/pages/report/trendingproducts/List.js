import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Grid,IconButton, InputLabel,InputAdornment, Tooltip,OutlinedInput,Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import {FcInfo} from 'react-icons/fc';
import $ from 'jquery';
import "rsuite/dist/rsuite.css";
import TrendingBarChart from '../Barchart';
import  Daterangepicker  from '../../../components/Daterangepicker';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

//  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#tablereport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Trendingproductslisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
      <>
    <Box>
        <Typography sx={userStyle.HeaderText}>Trending Products</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                    <AccordionDetails >
                    <br /> 
                    <Box sx={userStyle.formBorder}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select labelId="demo-select-small" fullWidth id="demo-select-small" label='Customer Group Name'
                                                // value={ProfitLoss.ProfitAddLocation}
                                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        >
                                                
                                        <MenuItem value={1}>yyy</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                                </FormControl>
                         </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Category</InputLabel>
                                        <Select labelId="demo-select-small" fullWidth id="demo-select-small" label='Category'
                                                // value={ProfitLoss.ProfitAddLocation}
                                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }} 
                                            >
                                                <MenuItem value="">
                                                    <em>Please Select</em>
                                                </MenuItem>
                                                <MenuItem value={1}>yyy</MenuItem>
                                                <MenuItem value={2}>xxx</MenuItem>
                                            </Select>   
                                        </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Sub Category</InputLabel>
                                        <Select labelId="demo-select-small" fullWidth id="demo-select-small" label='Sub Category'
                                                // value={ProfitLoss.ProfitAddLocation}
                                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                            >
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Brand</InputLabel>
                                        <Select labelId="demo-select-small" fullWidth id="demo-select-small" label='Sub Category'
                                                // value={ProfitLoss.ProfitAddLocation}
                                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}      
                                            >
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Unit</InputLabel>
                                        <Select labelId="demo-select-small" fullWidth id="demo-select-small"label='Customer Group Name'
                                                // value={ProfitLoss.ProfitAddLocation}
                                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}    
                                            >
                                                <MenuItem value={1}>All</MenuItem>
                                                <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth>
                                <Daterangepicker />
                            </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Number of products:</InputLabel>
                                            <OutlinedInput  label="Number of products" id="outlined-adornment-password"
                                                endAdornment={
                                                    <Tooltip title="Payment to be paid for purchases/sales within the given time period. All upcoming
                                                    or due payments will be displayed in dashboard - Payment Due section" >
                                                        <InputAdornment position="end">
                                                            <IconButton aria-label="toggle password visibility"edge="end">
                                                                <FcInfo />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    </Tooltip>
                                                        }
                                                />
                                    </FormControl>
                                </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Sub Category</InputLabel>
                                        <Select labelId="demo-select-small" id="demo-select-small"label='Sub Category' fullWidth  >
                                                <MenuItem value={1}>yyy</MenuItem>
                                                <MenuItem value={2}>xxx</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </Grid>
                            </Grid>
                            <Box sx={{float:'right',margin:'10px',}}>
                                <Button size='small' variant='contained' color='primary' sx={{textTransform:'capitalize'}}>Apply Filters</Button>
                            </Box>
                        </Box>
                    </AccordionDetails> 
                 </Accordion>
            </Box>
        <br />
  
    <Box sx={userStyle.container}>     
         <TrendingBarChart></TrendingBarChart>                           
    </Box>

  </>
    
    );
}

const Trendingproductslist = ()=>{
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Trendingproductslisttable /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box> 
    );
}


export default Trendingproductslist;