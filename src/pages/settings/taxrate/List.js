import React from 'react';
import { Button, Grid, Box, Typography, Table, TableHead, TableContainer, TableBody, Paper } from '@mui/material';
import { FcInfo } from 'react-icons/fc';
import { FaFileCsv, FaPrint, FaFilePdf } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import TaxCreate from './taxrate/Create';
import TaxEdit from './taxrate/Edit';
import TaxGrpCreate from './taxgroup/Create';
import TaxGrpEdit from './taxgroup/Edit';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';

//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#taxrate').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
  }, 1000);
});

//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#taxrategroup').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
  }, 1000);
});

const Taxratelisttable = () => {
  return (
    <>
      <Typography sx={userStyle.HeaderText}>Tax Rates  <Typography sx={userStyle.SubHeaderText}>Manage your tax rates</Typography></Typography>
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All your tax rates</Typography>
          </Grid>
          <Grid item xs={4}>
            <TaxCreate></TaxCreate>
          </Grid>
        </Grid>

        {/* EXPORT BUTTONS START */}
        <Grid container sx={userStyle.gridcontainer}>
          <Grid>
            <Button variant="outlined" sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to csv&ensp;</Button>
            <Button variant="outlined" sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
            <Button variant="outlined" sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
            <Button variant="outlined" sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
          </Grid>
        </Grid>
        {/* EXPORT BUTTONS END */}

        <br />

        {/* TAX RATE TABLE START */}
        <Box>
          <TableContainer component={Paper} sx={userStyle.container}>
            <Table sx={{ margin: '20px' }} aria-label="customized table" id="taxrate">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name:</StyledTableCell>
                  <StyledTableCell align="left">Tax Rate %</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                  <StyledTableCell align="left">No</StyledTableCell>
                  <StyledTableCell align="left">
                    <TaxEdit></TaxEdit>
                    <Button variant="contained" color="error" size="small"><DeleteOutlineOutlinedIcon style={{ fontSize: 'large' }} />&ensp;Delete&ensp;</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* TAX RATE TABLE START */}

      </Box>
      <br />
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>Tax groups ( Combination of multiple taxes ) &ensp; <FcInfo /></Typography>
          </Grid>
          <Grid item xs={4}>
            <TaxGrpCreate></TaxGrpCreate>
          </Grid>
        </Grid>

        {/* EXPORT BUTTONS START */}
        <Grid container sx={userStyle.gridcontainer}>
          <Grid>
            <Button variant="outlined" sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to csv&ensp;</Button>
            <Button variant="outlined" sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
            <Button variant="outlined" sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
            <Button variant="outlined" sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
          </Grid>
        </Grid>
        {/* EXPORT BUTTONS END */}

        <br />

        {/* TAX GROUP TABLE START */}
        <Box>
          <TableContainer component={Paper} sx={userStyle.container}>
            <Table sx={{ margin: "20px" }} aria-label="customized table" id="taxrategroup">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name:</StyledTableCell>
                  <StyledTableCell align="left">Tax rate %</StyledTableCell>
                  <StyledTableCell align="left">Sub taxes</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                  <StyledTableCell align="left">Pc(s)</StyledTableCell>
                  <StyledTableCell align="left">No</StyledTableCell>
                  <StyledTableCell align="left">
                    <TaxGrpEdit></TaxGrpEdit>
                    <Button variant="contained" color="error" size="small"><DeleteOutlineOutlinedIcon style={{ fontSize: 'large' }} />&ensp;DELETE&ensp;</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* TAX GROUP TABLE END */}

      </Box>
    </>
  );
}

function Taxratelist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Taxratelisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Taxratelist;