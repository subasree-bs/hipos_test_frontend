import React from 'react';
import { Box, Button, Grid, Typography, FormControl, Tooltip, IconButton, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaPrint, FaFilePdf, FaFileCsv } from 'react-icons/fa';
import { FcInfo } from 'react-icons/fc';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import  Daterangepicker  from '../../../components/Daterangepicker';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { AiFillFileExcel } from 'react-icons/ai';
function Subscriptiontable() {
    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#subscriptiontable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });
    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Subscriptions
                <Tooltip title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules">
                    <IconButton> <FcInfo /> </IconButton>
                </Tooltip>
            </Typography>
            {/* Table */}
            <Box sx={userStyle.container}>
                <Grid container sx={userStyle.gridcontainer}>
                    <Grid container spacing={1}>
                        <Grid md={4} sm={6} xs={12}>
                            <FormControl fullWidth>
                                <Daterangepicker style={{ border: '1px solid #B97DF0',}} fullWidth />
                            </FormControl>
                        </Grid>
                    </Grid><br /><br /><br />
                    <Grid >
                        <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
                        <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
                        <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
                        <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
                    </Grid>
                </Grid>
                <Box>
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="subscriptiontable">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="left">Subscription No.</StyledTableCell>
                                    <StyledTableCell align="left">Customer name</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Subscription Interval</StyledTableCell>
                                    <StyledTableCell align="left">No. of Repetitions</StyledTableCell>
                                    <StyledTableCell align="left">General Invoices</StyledTableCell>
                                    <StyledTableCell align="left">Last generated</StyledTableCell>
                                    <StyledTableCell align="left">Upcoming Invoice</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell >30/08/2022</StyledTableCell>
                                    <StyledTableCell >SB0001</StyledTableCell>
                                    <StyledTableCell >Admin</StyledTableCell>
                                    <StyledTableCell >TEST</StyledTableCell>
                                    <StyledTableCell >few hours</StyledTableCell>
                                    <StyledTableCell >5</StyledTableCell>
                                    <StyledTableCell >6</StyledTableCell>
                                    <StyledTableCell >8</StyledTableCell>
                                    <StyledTableCell >9</StyledTableCell>
                                    <StyledTableCell >
                                        <Grid>
                                            <Button sx={userStyle.buttonedit}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT&ensp;</Link></Button>
                                            <Button sx={userStyle.buttonview}><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;VIEW&ensp;</Button>
                                            <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;DELETE&ensp;</Button>
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
const Subscriptionlist = () =>{
    return(
        <Box sx={{display:'flex', }} >
            <Sidebar />
            <Box sx={{width:'100%',overflowX:'hidden'}}>
                <Box component="main" sx={{ padding: '30px',}}><br /><br />
                  <Subscriptiontable /><br /><br />
                  <Footer />
                </Box>
            </Box>
       </Box>
    )
}
export default Subscriptionlist;