import React from 'react';
import { Box, Button, Grid, Typography, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import Paper from '@mui/material/Paper';
import { FaFileCsv, FaPrint, FaFilePdf } from 'react-icons/fa';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { AiFillFileExcel } from 'react-icons/ai';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';

//jquery
import $ from 'jquery';

//Style
import { userStyle } from '../../PageStyle';
import { Link } from 'react-router-dom';

//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#transfertable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
  }, 1000);
});

function StockTransferListtable() {

  return (
    <Box>
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Stock Transfers</Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All Stock Transfers</Typography>
          </Grid>
          <Grid item xs={4}>
            <Link to="/stock/transfer/create" style={{ textDecoration: 'none', color: 'white' }}><Button sx={userStyle.buttonadd} > ADD</Button></Link>
          </Grid>
        </Grid>
        <Grid container sx={userStyle.gridcontainer}>
          <Grid >
            <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
            <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
            <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
            <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
          </Grid>
        </Grid><br />
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="transfertable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>Reference No</StyledTableCell>
                  <StyledTableCell>Location (From)</StyledTableCell>
                  <StyledTableCell>Location (To)</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Shipping Charges</StyledTableCell>
                  <StyledTableCell>Total Amount</StyledTableCell>
                  <StyledTableCell>Additional Notes</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">24/08/2022</StyledTableCell>
                  <StyledTableCell >JHGTFR4546</StyledTableCell>
                  <StyledTableCell >Trichy</StyledTableCell>
                  <StyledTableCell >Chennai</StyledTableCell>
                  <StyledTableCell >Active</StyledTableCell>
                  <StyledTableCell >10000</StyledTableCell>
                  <StyledTableCell >10000</StyledTableCell>
                  <StyledTableCell >TEST</StyledTableCell>
                  <StyledTableCell >
                    {/* <Warrentyedit></Warrentyedit>                   */}
                    <Link to="/stock/transfer/edit" style={{ textDecoration: 'none', color: 'white', '&:hover': { color: 'red', backgroundColor: 'yellow' } }}><Button sx={userStyle.buttonedit}><EditOutlinedIcon style={{ fontSize: 'large' }} />&ensp;EDIT</Button></Link>
                    <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{ fontSize: 'large' }} />&ensp;DELETE</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      {/* content end */}
    </Box>
  );
}

function StockTransferList() {
  return (
    <Box sx={{ display: 'flex', }} >
      <Sidebar />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <StockTransferListtable /><br /><br />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default StockTransferList;

