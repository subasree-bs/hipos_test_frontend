import React from 'react';
import { Button, Grid, Box, Typography, Table, TableHead, TableContainer, TableBody, Paper } from '@mui/material';
import { FaFileExcel, FaPrint, FaFilePdf } from 'react-icons/fa';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import BusinessLocCreate from './Create';
import BusinessLocEdit from './Edit';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';

//  JQUERY 
$(document).ready(function () {
    setTimeout(function () {
        $('#businessLocation').DataTable({
            language: { search: '', searchPlaceholder: "Search..." },
            lengthMenu: [25, 50, 100, 200, 500, 1000],
            // overflow-X: true
        });
    }, 1000);
});


const Locationtable = () => {

    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Business Locations <Typography sx={userStyle.SubHeaderText}>Manage your business locations</Typography></Typography>
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>All your business locations</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <BusinessLocCreate></BusinessLocCreate>
                    </Grid>
                </Grid>
                {/* EXPORT BUTTONS START */}
                <Grid container sx={userStyle.gridcontainer}>
                    <Grid>
                        <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel />&ensp;Export to csv&ensp;</Button>
                        <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileExcel />&ensp;Export to Excel&ensp;</Button>
                        <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint />&ensp;Print&ensp;</Button>
                        <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf />&ensp;Export to PDF&ensp;</Button>
                    </Grid>
                </Grid>
                {/* EXPORT BUTTONS END */}

                {/* TABLE START */}
                <Box>
                    <TableContainer component={Paper} >
                        <Table aria-label="customized table" id="businessLocation" sx={{ margin: '20px' }}>
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Name:</StyledTableCell>
                                    <StyledTableCell align="left">Location ID</StyledTableCell>
                                    <StyledTableCell align="left">Landmark</StyledTableCell>
                                    <StyledTableCell align="left">City</StyledTableCell>
                                    <StyledTableCell align="left">Zip code</StyledTableCell>
                                    <StyledTableCell align="left">State</StyledTableCell>
                                    <StyledTableCell align="left">Country</StyledTableCell>
                                    <StyledTableCell align="left">Price Group</StyledTableCell>
                                    <StyledTableCell align="left">Invoice scheme</StyledTableCell>
                                    <StyledTableCell align="left">Incoice layout for POS</StyledTableCell>
                                    <StyledTableCell align="left">Incoice layout for Sale</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row"> XYZ </StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">CHENNAI</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">123</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <BusinessLocEdit />
                                        <Button variant="contained" color="success" size="small" sx={{ padding: '2PX' }}><BuildOutlinedIcon style={{ fontSize: "large" }} />&ensp;Settings&ensp;</Button>
                                        <Button variant="contained" color="error" size="small" sx={{ padding: '2px' }}><PowerSettingsNewOutlinedIcon style={{ fontSize: "large" }} />&ensp;Deactivate Location&ensp;</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                {/* TABLE END */}
            </Box>
        </Box>
    );
}

function Locationlist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Locationtable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Locationlist;