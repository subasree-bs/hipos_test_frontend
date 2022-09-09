import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Button,Accordion,AccordionSummary,AccordionDetails, Grid, Menu, Divider, Typography, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TableFooter, Paper } from '@mui/material';
import {  FaFileExcel, FaPrint, FaFilePdf, FaFilter, } from 'react-icons/fa';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Pospaid from './Pospayment';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import  Daterangepicker  from '../../../components/Daterangepicker';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

function Poslisttable() {
    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#postable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });;
    // Filter
    // Filter Textarea
    const [posForm, setPosForm] = useState({
        posFormBusinessLoc: "", posFormCustomer: "", posFormDate: "", posFormUser: "", posFormPayStatus: "",
        posFormShipStatus: "",
    });
    // / Accordion expand
    const [expanded, setExpanded] = useState("panel1");
    const filterPanel = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
 //*****Action button*****//
 const [anchorEl, setAnchorEl] = useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
     setAnchorEl(null);
 };
    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>POS</Typography>
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
                                            value={posForm.posFormBusinessLoc}
                                            onChange={(e) => { setPosForm({ ...posForm, posFormBusinessLoc: e.target.value }) }}
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
                                            value={posForm.posFormCustomer}
                                            onChange={(e) => { setPosForm({ ...posForm, posFormCustomer: e.target.value }) }}
                                            label="Customer"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Payment Status</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={posForm.posFormPayStatus}
                                            onChange={(e) => { setPosForm({ ...posForm, posFormPayStatus: e.target.value }) }}
                                            label="Payment Status"
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
                                            value={posForm.posFormUser}
                                            onChange={(e) => { setPosForm({ ...posForm, posFormUser: e.target.value }) }}
                                            label="User"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Shipping Status</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={posForm.posFormShipStatus}
                                            onChange={(e) => { setPosForm({ ...posForm, posFormShipStatus: e.target.value }) }}
                                            label="Shipping Status"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Subscriptions" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion><br />
            {/* Table */}
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>List POS</Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Link to="/sell/pos/create" style={{ textDecoration: 'none', color: 'white' }}><Button sx={userStyle.buttonadd}>ADD</Button></Link>
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
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="postable">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Action</StyledTableCell>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="left">Invoice No.</StyledTableCell>
                                    <StyledTableCell align="left">Customer Name</StyledTableCell>
                                    <StyledTableCell align="left">Contact Number</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Payment Status</StyledTableCell>
                                    <StyledTableCell align="left">Payment Method</StyledTableCell>
                                    <StyledTableCell align="left">Total Amount</StyledTableCell>
                                    <StyledTableCell align="left">Total Paid</StyledTableCell>
                                    <StyledTableCell align="left">Sell Due</StyledTableCell>
                                    <StyledTableCell align="left">Sell Return Due</StyledTableCell>
                                    <StyledTableCell align="left">Shipping Status</StyledTableCell>
                                    <StyledTableCell align="left">Total Items</StyledTableCell>
                                    <StyledTableCell align="left">Types of Service</StyledTableCell>
                                    <StyledTableCell align="left">Custom Field 1</StyledTableCell>
                                    <StyledTableCell align="left">Added By</StyledTableCell>
                                    <StyledTableCell align="left">Sell Note</StyledTableCell>
                                    <StyledTableCell align="left">Staff Note</StyledTableCell>
                                    <StyledTableCell align="left">Shipping Details</StyledTableCell>
                                    <StyledTableCell align="left">Table</StyledTableCell>
                                    <StyledTableCell align="left">Service Staff</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        <div>
                                            <Button
                                               id="demo-customized-button"
                                               aria-controls={open ? 'demo-customized-menu' : undefined}
                                               aria-haspopup="true"
                                               aria-expanded={open ? 'true' : undefined}
                                               variant="contained"
                                               disableElevation
                                               onClick={handleClick}
                                               endIcon={<KeyboardArrowDownIcon />}
                                               size="small"
                                               sx={{backgroundColor: '#6420c0', textTransform: 'Capitalize'}}
                                            >
                                                Actions
                                            </Button>
                                            <Menu
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={handleClose} disableRipple><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;View&ensp;</MenuItem>
                                                <Link to="/sell/pos/edit"><MenuItem onClick={handleClose} disableRipple><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Edit&ensp;</MenuItem></Link>
                                                <MenuItem onClick={handleClose} disableRipple><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;Delete&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><LocalShippingOutlinedIcon  style={{fontSize:'large'}}/>&ensp;Edit Shipping&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><LocalPrintshopOutlinedIcon style={{fontSize:'large'}}/>&ensp;Print Invoice&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><InsertDriveFileOutlinedIcon style={{fontSize:'large'}}/>&ensp;Packing Slip&ensp;</MenuItem>
                                                <Divider sx={{ my: 2 }} />
                                                <MenuItem onClick={handleClose} disableRipple><MoneyOutlinedIcon style={{fontSize:'large'}}/>&ensp;View Payments&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><FileCopyOutlinedIcon style={{fontSize:'large'}}/>&ensp;Duplicate Sell&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><ReplayOutlinedIcon style={{fontSize:'large'}}/>&ensp;Sell Return&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;Invoice URL&ensp;</MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple><MailOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;New Sale Notification&ensp;</MenuItem>
                                            </Menu>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left"><Pospaid /></StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                            <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                                <TableRow className="table2_total">
                                    <StyledTableCell colSpan={6} sx={{color: 'black', fontSize: '22px', justifyContent: 'center'}}>Total: 0.0</StyledTableCell>
                                    <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>Paid - 2</StyledTableCell>
                                    <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>Cash - 2</StyledTableCell>
                                    <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>₹ 0.00</StyledTableCell>
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
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}
const Poslist = () =>{
    return(
<>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Poslisttable /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
    );
}
export default Poslist;