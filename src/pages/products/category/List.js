import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import Categorycreate from './Create';
import Categoryedit from './Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#categorytable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
    });
  }, 1000);
});


function Categorieslisttable() {

  return (
    <Box>
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Categories<Typography sx={userStyle.SubHeaderText}>Manage your categories</Typography></Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Categorycreate />
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
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="categorytable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Category</StyledTableCell>
                  <StyledTableCell >Category code</StyledTableCell>
                  <StyledTableCell >Description</StyledTableCell>
                  <StyledTableCell >Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                  <StyledTableCell>HJGH567</StyledTableCell>
                  <StyledTableCell>TEST</StyledTableCell>
                  <StyledTableCell>
                    <Categoryedit></Categoryedit>
                    <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{ fontsize: 'large' }} />&ensp;Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      { /* content end */}
    </Box>
  );
}

function Categorieslist() {
  return (
    <Box sx={{ display: 'flex', }} >
      <Sidebar />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <Categorieslisttable />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
export default Categorieslist;

