import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf,  } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Variationadd from './Create';
import Variationedit from './Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { StyledTableRow, StyledTableCell } from '../../../components/Table';
//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#variationtable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
    });
  }, 1000);
});

function Variationslisttable() {

  return (
    <Box >
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Variations<Typography sx={userStyle.SubHeaderText}>Manage product variations</Typography></Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All variations</Typography>
          </Grid>
          <Grid item xs={4}>
            <Variationadd />
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
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="variationtable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Variations</StyledTableCell>
                  <StyledTableCell>Values</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                  <StyledTableCell>Pc(s)</StyledTableCell>
                  <StyledTableCell colSpan={2}>
                    <Variationedit></Variationedit>  &ensp;
                    <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}} />&ensp;Delete</Button>
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

function Variationslist() {
  return (
    <Box sx={{ display: 'flex' }} >
      <Sidebar />
      <Box fullwidth sx={{ width: '100%', overflowX: 'hidden' }} >
        <Box component="main" sx={{ flexGrow: 1, padding: '30px' }}><br /><br />
          <Variationslisttable /><br /><br />
          <Footer />
        </Box>
      </Box>
    </Box>

  );
}

export default Variationslist;

