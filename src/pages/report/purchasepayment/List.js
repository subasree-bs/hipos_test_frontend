import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableFooter,TableContainer,TableHead,TableRow,Paper, Grid,  InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaMapMarker,FaUser,FaFileCsv, FaPrint, FaFilePdf,} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import Daterangepicker from '.././../../components/Daterangepicker';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#PurchasePayment').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Purchasepaymentlisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
    <>
    <Box>
    <Typography sx={userStyle.HeaderText}>Purchase Payment Report</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                        <br /> 
                    <Box sx={userStyle.formBorder}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><FaUser /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                            <InputLabel id="demo-select-small">Supplier</InputLabel>
                                                <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>
                                                    <MenuItem value="">
                                                        <em>Please Select</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>yyy</MenuItem>
                                                    <MenuItem value={2}>xxx</MenuItem>
                                                </Select>  
                                        </FormControl>
                                 </Grid>
                            </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><FaMapMarker /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                    <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
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
                </Box>
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
                            <Table aria-label="customized table" id="PurchasePayment">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Reference No</StyledTableCell>
                                        <StyledTableCell align="left">Paid on</StyledTableCell>
                                        <StyledTableCell align="left">Amount</StyledTableCell>
                                        <StyledTableCell align="left">Supplier</StyledTableCell>
                                        <StyledTableCell align="left">Payment Method</StyledTableCell>
                                        <StyledTableCell align="left">Purchase</StyledTableCell>
                                        <StyledTableCell align="left">Action</StyledTableCell>
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
                                        <StyledTableCell align="left"sx={userStyle.footerStyle} colspan={2}>Total</StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                        <StyledTableCell align="left"sx={userStyle.footerStyle} colspan={4}></StyledTableCell>
                                    </StyledTableRow>
                                </TableFooter>
                                </Table>
                            </TableContainer>                                   
            </Box>

    </>
    
    );
}


function Purchasepaymentlist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Purchasepaymentlisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}
export default Purchasepaymentlist;