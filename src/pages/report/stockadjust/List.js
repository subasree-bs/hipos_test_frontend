import React from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { FaFileCsv, FaPrint,FaMapMarker,FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { userStyle } from '../../PageStyle';
import $ from 'jquery';
import Daterangepicker from '../../../components/Daterangepicker';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

//  JQUERY 
$(document).ready(function () {
    setTimeout(function(){
    $('#stockadjust').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Stockadjustlisttable(){
    
 return(
    
    <Box sx={userStyle.formBorder}>
        <Grid container spacing={2}>
                <Grid item xs={5} md={4}>
                    <Typography sx={userStyle.HeaderText}>Stock Adjustment Report </Typography>
                </Grid>
                <Grid item xs={4} md={4}>                        
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={{ fontSize: '20px', border: '1px solid #B97DF0', width: '33px', height: '40px', backgroundColor: '#B97DF0',paddingTop:'6px', color: '#fff',textAlign:'center', justfyContent:'center' }} ><FaMapMarker/></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">All locations</InputLabel>
                                    <Select labelId="demo-select-small" sx={{borderRadius:'0 !important'}} id="demo-select-small" label='All locations' fullWidth>
                                        <MenuItem value={1}>yyy</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                            </FormControl>
                        </Grid>
                    </Grid>
                <Grid item xs={3} md={4}>
                <FormControl size="small" fullWidth>
                            <Daterangepicker />
                         </FormControl>
                </Grid>
            </Grid>   
        {/* Table */}
        <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                    <Box sx={userStyle.container}>
                        <TableContainer component={Paper} sx={{ padding:1, width:'100%',minHeight:'180px', margin:'auto', overflow:'auto',  boxShadow:'none',  "&::-webkit-scrollbar":{ width:20  }, }} >
                            <Table aria-label="customized table">
                            <TableBody>    
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Normal:	</Typography></StyledTableCell>
                                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Abnormal:</Typography></StyledTableCell>
                                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Stock Adjustment:</Typography></StyledTableCell>
                                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Grid>
                <Grid item xs={6} md={6}>
                    <Box sx={userStyle.container}>
                        <TableContainer component={Paper} sx={{ padding:1, width:'100%',minHeight:'180px',  margin:'auto', overflow:'auto',  boxShadow:'none',  "&::-webkit-scrollbar":{ width:20  }, }} >
                                <Table aria-label="customized table">
                                <TableBody>        
                                    <StyledTableRow>
                                        <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Amount Recovered:	</Typography></StyledTableCell>
                                        <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                                    </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        <br />
        {/* profit containers      */}

            <Box sx= {userStyle.container}>
                    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={userStyle.gridcontainer}>    
                                <Grid>   
                                    <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="stockadjust">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="left">Reference No</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Adjustment Type</StyledTableCell>
                                    <StyledTableCell align="left">Total Amount</StyledTableCell>
                                    <StyledTableCell align="left">Total amount recovered</StyledTableCell>
                                    <StyledTableCell align="left">Reason</StyledTableCell>
                                    <StyledTableCell align="left">Added By</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
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
                            </Table>
                        </TableContainer>
                    </Box>
                    <br />
                    <br />
                    <br />
        </Box>
 
    );              
}

function Stockadjustlist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Stockadjustlisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}
export default Stockadjustlist;

