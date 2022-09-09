
import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {userStyle} from '../../PageStyle';
import { FaFileCsv, FaPrint, FaCog,FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

const Saleswithcommisionlist = ()=>{
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saleCommission">
                            <TableHead>
                                <StyledTableRow>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Invoice No.</TableCell>
                                    <TableCell align="left">Customer name</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="left">Payment status</TableCell>
                                    <TableCell align="left">Total amount</TableCell>
                                    <TableCell align="left">Total paid</TableCell>
                                    <TableCell align="left">Total remaining</TableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">₹ 0.00</TableCell>
                                </StyledTableRow>
                            </TableBody>
                            <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                                <StyledTableRow> 
                                    <TableCell align="left"sx={userStyle.footerStyle} colspan={4}>Total</TableCell>
                                    <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                    <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                    <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                    <TableCell align="left"sx={userStyle.footerSmlTxtStyle}>Sell Due - ₹ 0.00 <br /> Sell Return Due - ₹ 0.00</TableCell>
                                </StyledTableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
            </>
    );
}

export default Saleswithcommisionlist;