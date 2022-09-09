import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography, Tooltip, IconButton, } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf} from 'react-icons/fa';
import { FcInfo } from 'react-icons/fc';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import Unitscreate from './Create';
import Unitsedit from './Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#unittable').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
    });
     } ,1000);
});

function Unitslisttable(){

  return(
        <Box>
              {/* header text */}
      <Typography sx={userStyle.HeaderText}>Units<Typography sx={userStyle.SubHeaderText}>Manage your units</Typography></Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All your units</Typography>
          </Grid>
          <Grid item xs={4}>
            <Unitscreate/>
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
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="unittable">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Name:</StyledTableCell>
                      <StyledTableCell>Short name</StyledTableCell>
                      <StyledTableCell>Allow decimal
                      <Tooltip  title="Decimals allows you to sell the related products in fractions." arrow>
                                            <IconButton>
                                                <FcInfo />
                                            </IconButton>
                                        </Tooltip>
                      </StyledTableCell>
                      <StyledTableCell>Action</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody align="left">
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                      <StyledTableCell>Pc(s)</StyledTableCell>
                      <StyledTableCell>No</StyledTableCell>
                      <StyledTableCell>    
                        <Unitsedit />                    
                        <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontsize:'large'}}/>&ensp;Delete</Button>
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

function Unitslist(){
  return(
    <Box sx={{display:'flex'}} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Unitslisttable />
              <Footer/>
            </Box>
        </Box>
    </Box>
  );
}
export default Unitslist;

