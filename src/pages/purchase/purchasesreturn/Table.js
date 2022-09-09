import React from 'react';
import { Button, Grid ,Typography,Box,Table,TableFooter,TableBody,TableContainer,TableHead,TableRow,Paper } 
        from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

//  JQUERY 
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
const Purchasereturntable = () => {
  return (
    <>
      <Box>
      { /* Table header  */ }
        <Grid container>
            <Grid item xs={8}>
                <Typography  sx={userStyle.importheadtext}>All Purchases Returns</Typography>
            </Grid>
            <Grid item xs={4} sx={{textAlign:'right !important'}}>
                <Link to="/purchase/purchasereturn/create"><Button sx={userStyle.buttonadd}>ADD</Button></Link>
            </Grid>
        </Grid>
        { /* Table export btn */ }
        <Grid container sx={userStyle.gridcontainer}>
            <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
            <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
            <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
            <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
        </Grid><br />
        { /* Table start */ }
        <Box>
            <TableContainer component={Paper} >
                <Table aria-label="customized table" id="example">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Reference No</StyledTableCell>
                            <StyledTableCell>Parent Purchase</StyledTableCell>
                            <StyledTableCell>Location</StyledTableCell>
                            <StyledTableCell> Supplier </StyledTableCell>
                            <StyledTableCell> Payment status</StyledTableCell>
                            <StyledTableCell> Grand Total</StyledTableCell>
                            <StyledTableCell> Payment Due</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell>29/08/2022</StyledTableCell>
                            <StyledTableCell>REF0001</StyledTableCell>
                            <StyledTableCell>TEST</StyledTableCell>
                            <StyledTableCell>XYZ</StyledTableCell>
                            <StyledTableCell>TEST</StyledTableCell>
                            <StyledTableCell>Active</StyledTableCell>
                            <StyledTableCell>Received</StyledTableCell>
                            <StyledTableCell>pending</StyledTableCell>
                            <StyledTableCell>
                                <Grid>
                                    <Button sx={userStyle.buttonedit}><Link to="/purchase/purchasereturn/edit" style={{textDecoration:'none', color:'white','&:hover':{color:'red', backgroundColor:'yellow'}}}><EditOutlinedIcon style={{fontSize:'large'}} />&ensp;Edit</Link></Button>
                                    <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}} />&ensp;Delete</Button>
                                </Grid>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                    { /* table footer start  */ }
                    <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                        <TableRow className="table2_total" >
                            <StyledTableCell colSpan={5} sx={{color: 'black', fontSize: '20px', textAlign: 'center'}}>Total: 0.0</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left" sx={{color: 'black', fontSize: '20px'}}>0.00</StyledTableCell>
                            <StyledTableCell align="left" sx={{color: 'black', fontSize: '20px'}}>0.00</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                    </TableFooter>
                    { /* table footer end */ }
                </Table>
            </TableContainer>
        </Box>
        { /* Table end */ }
      </Box>
    </>
  )
}

export default Purchasereturntable;