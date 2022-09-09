import React from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Table,TableBody,TableContainer,Tabs,TableHead,Paper,TableCell,TableRow,TableFooter } from '@mui/material';
    import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle'
import $ from 'jquery';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#detailed').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

const ProductsellDetailed = ()=>{
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
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" id="detailed">
                        <TableHead>
                            <StyledTableRow>
                            <StyledTableCell align="left">Product</StyledTableCell>
                            <StyledTableCell align="left">SKU</StyledTableCell>
                            <StyledTableCell align="left">Customer name</StyledTableCell>
                            <StyledTableCell align="left">Contact ID</StyledTableCell>
                            <StyledTableCell align="left">Invoice No.</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Unit Price</StyledTableCell>
                            <StyledTableCell align="left">Discount</StyledTableCell>
                            <StyledTableCell align="left">Tax</StyledTableCell>
                            <StyledTableCell align="left">Price inc.tax</StyledTableCell>
                            <StyledTableCell align="left">Total</StyledTableCell>
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
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left">₹21.27</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left">Total</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                            <StyledTableRow> 
                            <StyledTableCell align="left"sx={userStyle.footerStyle} colspan={6}>Total</StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}>3.00 Pc(s)</StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}></StyledTableCell>
                            <StyledTableCell align="left"sx={userStyle.footerStyle}>₹0.00</StyledTableCell>
                            </StyledTableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
        </>
    );
}

export default ProductsellDetailed;