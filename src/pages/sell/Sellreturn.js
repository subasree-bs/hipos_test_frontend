import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button,Accordion,AccordionSummary,AccordionDetails, Grid, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaPrint, FaFilePdf, FaFilter,FaFileCsv } from 'react-icons/fa';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../PageStyle';
import Sidebar from '../../components/header/Sidebar';
import Footer from '../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../components/Table';
import  Daterangepicker  from '../../components/Daterangepicker';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { AiFillFileExcel } from 'react-icons/ai';

function Sellreturnlist() {
    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#selltable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });
    // Filter
    // Filter Textarea
    const [sellRetForm, setSellRetForm] = useState({
        sellRetFormBusinessLoc: "", sellRetFormCustomer: "", sellRetFormUser: "", sellRetFormPayStatus: "",
        sellRetFormShipStatus: "",
    });
    // / Accordion expand
    const [expanded, setExpanded] = useState("panel1");
    const filterPanel = (panel) => (event, newExpanded) => { setExpanded(newExpanded ? panel : false); };
    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Sell Return</Typography>
            {/* Filter */}
            <Accordion expanded={expanded === "panel1"} onChange={filterPanel("panel1")} sx={userStyle.container}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography sx={userStyle.importheadtext}><FaFilter sx={{ p: 0 }} /> Filters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={5} sx={userStyle.textInput}>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={sellRetForm.sellRetFormBusinessLoc}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, sellRetFormBusinessLoc: e.target.value }) }}
                                            label="Business Location"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Customer</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={sellRetForm.sellRetFormCustomer}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, sellRetFormCustomer: e.target.value }) }}
                                            label="Customer"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl fullWidth>
                                        <Daterangepicker style={{ border: '1px solid #B97DF0',}} fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">User</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={sellRetForm.sellRetFormUser}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, sellRetFormUser: e.target.value }) }}
                                            label="User"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion><br />
            {/* Table */}
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>Sell Return</Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="selltable">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="left">Invoice No.</StyledTableCell>
                                    <StyledTableCell align="left">Parent Sale</StyledTableCell>
                                    <StyledTableCell align="left">Customer name</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Payment Status</StyledTableCell>
                                    <StyledTableCell align="left">Total amount</StyledTableCell>
                                    <StyledTableCell align="left">Payment due</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell >
                                        <Button sx={userStyle.buttonedit}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT&ensp;</Link></Button>
                                        <Button sx={userStyle.buttonview}><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;VIEW&ensp;</Button>
                                        <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;DELETE&ensp;</Button>
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
const Sellreturn = ()=>{
    return(
<>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Sellreturnlist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
    );
}
export default Sellreturn;