import React from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Table,TableBody,TableCell,TableRow,TableContainer,Tabs,TableHead,Paper,TableFooter } from '@mui/material';
    import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle'
import $ from 'jquery';

$(document).ready(function () {
    setTimeout(function(){
    $('#ByBrand').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

const Productsellbrand = ()=>{
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByBrand">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Brand</TableCell>
                                <TableCell align="left">Current stock</TableCell>
                                <TableCell align="left">Total unit sold</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">0</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                            <TableRow>
                                <TableCell sx={userStyle.footerStyle}> Total </TableCell>
                                <TableCell sx={userStyle.footerStyle}>  </TableCell>
                                <TableCell sx={userStyle.footerStyle}>  </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> ₹0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                </TableContainer>
        </>
    );
}

export default Productsellbrand;