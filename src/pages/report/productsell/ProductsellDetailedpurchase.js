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
    $('#detailedWtPurchase').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 
const ProductsellDetailedpurchase = ()=>{
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="detailedWtPurchase">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">SKU</TableCell>
                            <TableCell align="left">Customer name</TableCell>
                            <TableCell align="left">Invoice No.</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Pruchase ref no.</TableCell>
                            <TableCell align="left">Supplier Name</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">xyz</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"> </TableCell>
                            <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
        </>
    );
}

export default ProductsellDetailedpurchase;