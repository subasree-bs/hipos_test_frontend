import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button,FormControl, Accordion,InputLabel, AccordionSummary,AccordionDetails, Grid, Typography, Select, MenuItem, OutlinedInput, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter } from 'react-icons/fa';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import  Daterangepicker  from '../../../components/Daterangepicker';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
const Draftlisttable = ()=>{
    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#draftstable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });
    // Filter
    // Filter Textarea
    const [draftForm, setDraftForm] = useState({
        draftFormBusinessLoc: "", draftFormCustomer: "", draftFormDate: "", draftFormUser: "", draftFormPayStatus: "",
        draftFormShipStatus: "",
    });
    // / Accordion expand
    const [expanded, setExpanded] = useState("panel1");
    const filterPanel = (panel) => (event, newExpanded) => { setExpanded(newExpanded ? panel : false); };
    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Drafts</Typography>
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
                                            value={draftForm.draftFormBusinessLoc}
                                            onChange={(e) => { setDraftForm({ ...draftForm, draftFormBusinessLoc: e.target.value }) }}
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
                                            value={draftForm.draftFormCustomer}
                                            onChange={(e) => { setDraftForm({ ...draftForm, draftFormCustomer: e.target.value }) }}
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
                                            value={draftForm.draftFormUser}
                                            onChange={(e) => { setDraftForm({ ...draftForm, draftFormUser: e.target.value }) }}
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
                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}>
                    <Link to="/sell/draft/create" style={{ textDecoration: 'none', color: 'white' }}><Button sx={userStyle.buttonadd} >ADD DRAFT</Button></Link>
                    </Grid>
                </Grid>
                <Grid container sx={userStyle.gridcontainer}>
                    <Grid >
                        <Button sx={userStyle.buttongrp}><FaFileExcel />&ensp;Export to CSV&ensp;</Button>
                        <Button sx={userStyle.buttongrp}><FaFileExcel />&ensp;Export to Excel&ensp;</Button>
                        <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
                        <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
                    </Grid>
                </Grid>
                <Box>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="draftstable">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="left">Reference No.</StyledTableCell>
                                    <StyledTableCell align="left">Customer name</StyledTableCell>
                                    <StyledTableCell align="left">Contact Number</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Total Items</StyledTableCell>
                                    <StyledTableCell align="left">Added By</StyledTableCell>
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
                                    <StyledTableCell >
                                        <Link to="/sell/draft/edit" style={{ textDecoration: 'none', color: '#fff' }}><Button sx={userStyle.buttonedit}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT&ensp;</Button></Link>
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
const Draftlist = () => {
  return (
    <>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Draftlisttable /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
  );
}
export default Draftlist;




