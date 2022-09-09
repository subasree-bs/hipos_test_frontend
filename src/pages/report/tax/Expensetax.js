import React from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableContainer,Tabs,TableHead,Paper, Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import { userStyle } from '../../PageStyle';
import { FaFileCsv, FaPrint,FaFilePdf,FaArrowCircleDown,FaArrowCircleUp,FaMinusCircle} from "react-icons/fa";
import $ from 'jquery';
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

$(document).ready(function () {
    setTimeout(function(){
    $('#expensetax').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

const Expensetax = ()=>{
    return(
     <>
        <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="exptensetax">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="left">Reference No</StyledTableCell>
                                    <StyledTableCell align="left">Tax number</StyledTableCell>
                                    <StyledTableCell align="left">Total amount</StyledTableCell>
                                    <StyledTableCell align="left">Pyament method</StyledTableCell>
                                    <StyledTableCell align="left">Discount</StyledTableCell>
                                    <StyledTableCell align="left">GST</StyledTableCell>
                                    <StyledTableCell align="left">CGST</StyledTableCell>
                                    <StyledTableCell align="left">TAX</StyledTableCell>
                                </StyledTableRow>
                        </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="left">XYZ</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left">₹21.27</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                            <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                                <StyledTableRow> 
                                    <StyledTableCell align="left"sx={userStyle.footerStyle} colspan={4}>Total</StyledTableCell>
                                    <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                                    <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                </StyledTableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
    </>
    );
}

export default Expensetax;