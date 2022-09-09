import React from 'react';
import { Button, Grid ,Typography, Box,Table,TableBody,TableContainer,TableHead,Paper } from '@mui/material';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { FaPrint,FaFilePdf,FaFileCsv} from "react-icons/fa";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Salescreate from './Create';
import Salesedit from './Edit';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';

//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#salesagenttable').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 
function Saleslisttable(){
return(
        <Box>
          <Typography  sx={userStyle.HeaderText}>Sales Commission Agents</Typography>
            <Box sx={userStyle.container}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography  ></Typography>
              </Grid>
              <Grid item xs={4}>
                <Salescreate />
              </Grid>
            </Grid>
            <Grid container sx={userStyle.gridcontainer}>
              <Grid >
                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
              </Grid>
            </Grid>
            <Box>
              <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="salesagenttable">
                  <TableHead>
                    <StyledTableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell >Email</StyledTableCell>
                          <StyledTableCell >Contact Number</StyledTableCell>
                          <StyledTableCell >Address</StyledTableCell>
                          <StyledTableCell >Sales Commission Percentage&ensp;(%)</StyledTableCell>
                          <StyledTableCell >Action</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                    <TableBody align="left">
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                        <StyledTableCell>admin@gmail.com</StyledTableCell>
                        <StyledTableCell>987654321</StyledTableCell>
                        <StyledTableCell>TEST</StyledTableCell>
                        <StyledTableCell>10%</StyledTableCell>
                        <StyledTableCell >
                          <Grid>
                            <Salesedit />
                            <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;Delete&ensp;</Button>
                          </Grid>
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

function Saleslist(){
    return(
        <Box sx={{display:'flex', }} >
            <Sidebar />
            <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Saleslisttable /><br /><br />
                <Footer />
              </Box>
            </Box>
        </Box>
    );
}

export default Saleslist;