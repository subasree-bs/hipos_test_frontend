import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableContainer,TableHead,Paper,
     Grid,TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaMapMarker,FaUser,FaFileCsv, FaPrint, FaFilePdf,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import "rsuite/dist/rsuite.css";
import  Daterangepicker  from '../../../components/Daterangepicker';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#ItemReport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


function Itemslisttable() {

// accordian
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
<>
<Box>
<Typography sx={userStyle.HeaderText}>Product Purchase Report</Typography>
{/* FILTER CONTAINER START */}
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
            <AccordionDetails >
                        <br /> 
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><FaUser /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Supplier</InputLabel>
                                    <Select
                                            labelId="demo-select-small"
                                            sx={{borderRadius:'0px !important',
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid #B97DF0',
                                                borderRadius:'0px !important',
                                            },}}
                                            id="demo-select-small"
                                            label='Customer'
                                            // value={ProfitLoss.ProfitAddLocation}
                                            // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                            fullWidth
                                        >
                                        
                                            <MenuItem value={1}>None</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </Grid>
                         </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                         <FormControl size="small" fullWidth>
                            <Daterangepicker />
                         </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><FaUser /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Customer</InputLabel>
                                    <Select
                                            labelId="demo-select-small"
                                            sx={{borderRadius:'0px !important',
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: '1px solid #B97DF0',
                                                borderRadius:'0px !important',
                                            },}}
                                            id="demo-select-small"
                                            label='Customer'
                                            // value={ProfitLoss.ProfitAddLocation}
                                            // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                            fullWidth
                                        >
                                        
                                            <MenuItem value={1}>Please Select</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </Grid>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth>
                                <Daterangepicker />
                            </FormControl>
                        </Grid>
                  </Grid> 
                  <br />
                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><FaMapMarker /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Business Location</InputLabel>
                                    <Select labelId="demo-select-small" sx={{borderRadius:'0px !important', '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', borderRadius:'0px !important', },}}
                                            id="demo-select-small"
                                            label='Customer'
                                            // value={ProfitLoss.ProfitAddLocation}
                                            // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                            fullWidth >
                                            <MenuItem value={1}>Please Select</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </Grid>
                        </Grid>
                    </Grid> 
                </AccordionDetails> 
             </Accordion>
            {/* FILTER CONTAINER END */}
            </Box>
        <br />
             <Box sx={userStyle.container}>     
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                            <Grid container sx={userStyle.gridcontainer}>    
                                    <Grid>   
                                        <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                        <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                        <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                        <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                                    </Grid>    
                                </Grid>
                            <Table aria-label="customized table" id="ItemReport">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Product</StyledTableCell>
                                        <StyledTableCell align="left">SKU</StyledTableCell>
                                        <StyledTableCell align="left">Description</StyledTableCell>
                                        <StyledTableCell align="left">Purchase Date</StyledTableCell>
                                        <StyledTableCell align="left">Purchase</StyledTableCell>
                                        <StyledTableCell align="left">Supplier</StyledTableCell>
                                        <StyledTableCell align="left">Purchase Price</StyledTableCell>
                                        <StyledTableCell align="left">Sell Date</StyledTableCell>
                                        <StyledTableCell align="left">Sale</StyledTableCell>
                                        <StyledTableCell align="left">Customer</StyledTableCell>
                                        <StyledTableCell align="left">Location</StyledTableCell>
                                        <StyledTableCell align="left">Quantity</StyledTableCell>
                                        <StyledTableCell align="left">Selling Price</StyledTableCell>
                                        <StyledTableCell align="left">Subtotal</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">xyz</StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell> 
                                        <StyledTableCell align="left"></StyledTableCell> 
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left"></StyledTableCell> 
                                        <StyledTableCell align="left"></StyledTableCell>                          
                                    </StyledTableRow>
                                </TableBody>
                                <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                                    <StyledTableRow> 
                                        <StyledTableCell sx={userStyle.footerStyle} colspan={6}>Total</StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle} colspan={4}></StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                    </StyledTableRow>
                                </TableFooter>
                                </Table>
                            </TableContainer>                                                      
                        </Box>
                    </>
    
    );
}

function Itemslist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Itemslisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Itemslist;