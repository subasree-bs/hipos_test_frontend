import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
     Grid,TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#CustomerGroup').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Suppcustomerlisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
      <>
        <Box>
          <Typography sx={userStyle.HeaderText}>Customers & Suppliers Reports</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                    <AccordionDetails >
                        <br /> 
                        <Box sx={userStyle.formBorder}>
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12} md={6} lg={3}>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                            <InputLabel id="demo-select-small">Customer Group Name</InputLabel>
                                                <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name'fullWidth >
                                                    <MenuItem value={1}>All</MenuItem>
                                                    <MenuItem value={2}>xxx</MenuItem>
                                                </Select>   
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={12} xs={12} md={6} lg={3}>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                            <InputLabel id="demo-select-small">Type</InputLabel>
                                                <Select labelId="demo-select-small" id="demo-select-small"label='Type' fullWidth>
                                                    <MenuItem value={1}>All</MenuItem>
                                                    <MenuItem value={2}>xxx</MenuItem>
                                                </Select>   
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                             </Box>
                        <br />
                </AccordionDetails> 
            </Accordion>
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
                            <Table aria-label="customized table" id="CustomerGroup">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Contact</StyledTableCell>
                                        <StyledTableCell align="left">Total Purchase</StyledTableCell>
                                        <StyledTableCell align="left">Total Purchase Return</StyledTableCell>
                                        <StyledTableCell align="left">Total Sale</StyledTableCell>
                                        <StyledTableCell align="left">Total sell Return</StyledTableCell>
                                        <StyledTableCell align="left">Opening Balance Due</StyledTableCell>
                                        <StyledTableCell align="left">Due &ensp; <FcInfo/></StyledTableCell>
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
                                    </StyledTableRow>
                                </TableBody>
                                <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                                    <StyledTableRow>
                                        <StyledTableCell sx={userStyle.footerStyle}> Total </StyledTableCell>
                                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹781.25</StyledTableCell>
                                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    </StyledTableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>                      
            </Box> 
     </>
    
    );
}

function Suppcustomerlist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Suppcustomerlisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Suppcustomerlist;