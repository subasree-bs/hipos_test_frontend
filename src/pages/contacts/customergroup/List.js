import React from 'react';
import { Button, Grid, Typography, Box, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import { FaFileExcel, FaPrint, FaFilePdf } from 'react-icons/fa'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { userStyle } from '../../PageStyle';
import Customorgroupcreate from './Create';
import Customorgroupedit from './Edit';

//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#cutomergrouptable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
    });
  }, 1000);
});

function CoustomerGroupsListtable() {
  return (
    <Box >
      <Typography sx={userStyle.HeaderText}>Customer Groups <Typography sx={userStyle.SubHeaderText}></Typography></Typography>
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All Customer Groups </Typography>
          </Grid>
          <Grid item xs={4}><Customorgroupcreate /></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography className=""></Typography>
          </Grid>
          <Grid item xs={7} >
            <Box>
              <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel />&ensp;Export to csv&ensp;</Button>
              <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel />&ensp;Export to Excel&ensp;</Button>
              <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint />&ensp;Print&ensp;</Button>
              <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf />&ensp;Export to PDF&ensp;</Button>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <br />
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="cutomergrouptable">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Customer Group Name</StyledTableCell>
                  <StyledTableCell align="left">Calculation Percentagge(%)</StyledTableCell>
                  <StyledTableCell align="left">Selling Price Group</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                  <StyledTableCell align="left">TEST</StyledTableCell>
                  <StyledTableCell align="left">No</StyledTableCell>
                  <StyledTableCell align="left">
                    <Customorgroupedit />
                    <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize' }}><DeleteOutlineOutlinedIcon style={{ fontSize: 'large' }} />&ensp;DELETE</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

function CoustomerGroupsList() {
  return (
    <Box sx={{ display: 'flex', width: '100%', alignContent: 'space-between', justifyContent: 'space-evenly', overflowX: 'hidden', }} >
      <Sidebar />
      <Box sx={{ width: '100%' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <CoustomerGroupsListtable /><br /><br />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
export default CoustomerGroupsList;


