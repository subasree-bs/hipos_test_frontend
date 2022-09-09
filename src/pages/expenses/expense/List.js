import React, { useState } from 'react';
import { Box, Button, Grid,Accordion,AccordionSummary,AccordionDetails, Typography, Select, MenuItem, Table, TableBody, TableContainer, TableHead, Paper, FormControl, InputLabel } from '@mui/material';
import { FaPrint, FaFilePdf,FaFilter ,FaFileCsv} from 'react-icons/fa';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import  Daterangepicker  from '../../../components/Daterangepicker'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { AiFillFileExcel } from 'react-icons/ai';

function Expensestablelist() {
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
    const [draftForm, setExpenseFIlter] = useState({ expenseBusinessLoc: "", expenseFor: "", expenseCategory: "", 
        expenseContact: "", expensePayStatus: "",draftFormShipStatus: "",
    });
    //  Accordion expand
    const [expanded, setExpanded] = useState("panel1");
    const filterPanel = (panel) => (event, newExpanded) => { setExpanded(newExpanded ? panel : false); };

    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Expenses</Typography>
            {/* ****** Filter Start ****** */}
            <Accordion expanded={expanded === "panel1"} onChange={filterPanel("panel1")} sx={userStyle.container}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography sx={{color: 'rgb(94, 53, 177) !important',}}><FaFilter sx={{ p: 0 }} /> Filters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={5} sx={userStyle.textInput}>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.expenseBusinessLoc}
                                            onChange={(e) => { setExpenseFIlter({ ...draftForm, expenseBusinessLoc: e.target.value }) }}
                                            label="Business Location"
                                        >
                                            <MenuItem value="">All locations </MenuItem>
                                            <MenuItem value={1}>XYZ (123456)</MenuItem>
                                            <MenuItem value={2}>Juiceria (1234567)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense for</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.expenseFor}
                                            onChange={(e) => { setExpenseFIlter({ ...draftForm, expenseFor: e.target.value }) }}
                                            label="Expense for"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>MR Admin Admin</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Contact</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.expenseContact}
                                            onChange={(e) => { setExpenseFIlter({ ...draftForm, expenseContact: e.target.value }) }}
                                            label="Contact"
                                        >
                                            <MenuItem value="all">All </MenuItem>
                                            <MenuItem value={1}>Walk-In Customer - (CO0001)</MenuItem>
                                            <MenuItem value={2}>test - 11211(frf)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.expenseCategory}
                                            onChange={(e) => { setExpenseFIlter({ ...draftForm, expenseCategory: e.target.value }) }}
                                            label="Expense Category"
                                        >
                                            <MenuItem value="all">All </MenuItem>
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
                                        <InputLabel id="demo-select-small">Payment Status</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.expensePayStatus}
                                            onChange={(e) => { setExpenseFIlter({ ...draftForm, expensePayStatus: e.target.value }) }}
                                            label="Payment Status"
                                        >
                                            <MenuItem value="all">All </MenuItem>
                                            <MenuItem value={1}>Paid</MenuItem>
                                            <MenuItem value={2}>Due</MenuItem>
                                            <MenuItem value={3}>Partial</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                
                            </Grid>
                        </AccordionDetails>
            </Accordion>
            {/* ****** Filter End ****** */}
            <br />            
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                         <Typography sx={userStyle.boxheadertxt}>All Expenses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                     <Link to="/expense/expense/create" style={{ textDecoration: 'none', color: 'white' }}><Button sx={userStyle.buttonadd} >ADD</Button></Link>
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
                    {/* ****** Table Start ****** */}
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="draftstable">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell >Action</StyledTableCell>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="left">Reference No.</StyledTableCell>
                                    <StyledTableCell align="left">Recurring details</StyledTableCell>
                                    <StyledTableCell align="left">Expense Category</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Payment status</StyledTableCell>
                                    <StyledTableCell align="left">Tax</StyledTableCell>
                                    <StyledTableCell align="left">Total Amount</StyledTableCell>
                                    <StyledTableCell align="left">Expense For</StyledTableCell>
                                    <StyledTableCell align="left">Contact</StyledTableCell>
                                    <StyledTableCell align="left">Expense Note</StyledTableCell>
                                    <StyledTableCell align="left">Added By</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        <Link to="/expense/espense/edit" style={{ textDecoration: 'none', color: '#fff' }}><Button sx={userStyle.buttonedit}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT&ensp;</Button></Link>
                                        <Button sx={userStyle.buttonview}><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;VIEW&ensp;</Button>
                                        <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;DELETE&ensp;</Button>
                                    </StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* ****** Table End ****** */}
                </Box>
            </Box>
        </Box>
    );
}
function Expenselist(){
    return(
        <>
            <Box sx={{display:'flex',}} >
                <Sidebar />
                <Box sx={{ width: '100%', overflowX:'hidden' }}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Expensestablelist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
    );
}

export default Expenselist;
