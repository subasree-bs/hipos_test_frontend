import React from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Table,TableBody,TableContainer,Tabs,TableHead,Paper,TableCell,TableRow,TableFooter } from '@mui/material';
    import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle'
import $ from 'jquery';

$(document).ready(function () {
    setTimeout(function(){
    $('#grouped').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

const Productsellgrouped = ()=>{
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="grouped">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">SKU</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Current stock</TableCell>
                            <TableCell align="left">Total unit sold</TableCell>
                            <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">XYZ</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                            <TableRow>
                                <TableCell sx={userStyle.footerStyle} colspan={4}> Total </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> ₹0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
        </>
    );
}

export default Productsellgrouped;