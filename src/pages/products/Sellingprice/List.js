import React from 'react';
import { Box, Button, Grid, Typography, Table, TableBody, TableContainer, TableHead, Paper } from '@mui/material';
import { FaDownload, FaFileCsv, FaPrint, FaFilePdf,  } from 'react-icons/fa';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import { AiFillFileExcel } from 'react-icons/ai';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Sellingpriceadd from './Create';
import Sellingpriceedit from './Edit';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Sellingrouplisttable() {
  return (
    <Box>
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Selling Price Group</Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Typography sx={userStyle.importheadtext}>Import/Export Selling Price Group Prices</Typography>
        <br /><br />
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize', color: 'white' }}><FaDownload />&ensp;Export Selling Price Group Prices</Button>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item md={6}> </Grid>
          <Grid item md={6}>
            <Typography variant='h6'>File To Import:</Typography>
            <Button variant='contained' color="primary" sx={{ marginTop: '2px' }}> Choose File <input type="file" hidden /></Button> <br /><br />
            <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize', backgroundColor: '#7009AB !important', color: 'white', }}>Submit</Button>
          </Grid>
        </Grid>
      </Box><br />
      <Box sx={userStyle.container}>
        <Typography sx={userStyle.importheadtext}>Instructions</Typography>
        <br />
        <Typography sx={userStyle.importsubheadtex}>• Export Selling price group prices.</Typography>
        <Typography sx={userStyle.importsubheadtext}>• Update the exported file and import the same file.</Typography>
        <Typography sx={userStyle.importsubheadtext}>• Only selling price group prices of the product will be updated. Any blank price will be skipped.</Typography>
      </Box><br />
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All Selling Price Group</Typography>
          </Grid>
          <Grid item xs={4}>
            <Sellingpriceadd />
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
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 700, }} aria-label="customized table" id="usertable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell >Description</StyledTableCell>
                  <StyledTableCell >Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                  <StyledTableCell >TEST</StyledTableCell>
                  <StyledTableCell >
                    <Grid>
                      <Sellingpriceedit />
                      <Button sx={userStyle.buttonview}><RemoveRedEyeOutlinedIcon style={{fontsize:'large'}}/>&ensp;View</Button>
                      <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontsize:'large'}} />&ensp;Delete</Button>
                    </Grid>
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

function Sellingrouplist() {
  return (
    <Box sx={{ display: 'flex' }} >
      <Sidebar />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <Sellingrouplisttable /><br /><br />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
export default Sellingrouplist;