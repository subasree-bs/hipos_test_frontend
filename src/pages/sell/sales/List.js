import React, { useState } from 'react';
import { Box, AccordionSummary, Accordion, AccordionDetails, Button, Grid, Menu, Divider, Typography, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableFooter } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf } from 'react-icons/fa';
import  Daterangepicker  from '../../../components/Daterangepicker';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import Salespayment from './Salespayment';

function Salelisttable() {

    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#saletable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });

    // Filter
    // Filter Textarea
    const [salesForm, setSalesForm] = useState({
        salesFormBusinessLoc: "", salesFormCustomer: "", salesFormDate: "", salesFormUser: "", salesFormPayStatus: "",
        salesFormShipStatus: "",
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
            <Typography sx={userStyle.HeaderText}>Sales</Typography>
            {/* Filter */}
            <Accordion expanded={expanded === 'panel1'} onChange={filterPanel('panel1')} sx={userStyle.container}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{ color: 'rgb(94, 53, 177) !important', }}><FilterAltIcon /> Filter</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography><br />

                        { /* filter content start */}
                        <Grid container spacing={5} sx={userStyle.textInput}>
                            <Grid item md={3} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Business Location</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesForm.salesFormBusinessLoc}
                                        onChange={(e) => { setSalesForm({ ...salesForm, salesFormBusinessLoc: e.target.value }) }}
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
                                        value={salesForm.salesFormCustomer}
                                        onChange={(e) => { setSalesForm({ ...salesForm, salesFormCustomer: e.target.value }) }}
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
                                        value={salesForm.salesFormPayStatus}
                                        onChange={(e) => { setSalesForm({ ...salesForm, salesFormPayStatus: e.target.value }) }}
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
                                        value={salesForm.salesFormUser}
                                        onChange={(e) => { setSalesForm({ ...salesForm, salesFormUser: e.target.value }) }}
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
                                        value={salesForm.salesFormShipStatus}
                                        onChange={(e) => { setSalesForm({ ...salesForm, salesFormShipStatus: e.target.value }) }}
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

                        { /* filter content end */}

                    </Typography>
                </AccordionDetails>
            </Accordion><br />
            <br />

            {/* Table */}
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>All sales</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="/sell/sales/create" style={{ textDecoration: 'none', color: 'white' }}><Button sx={userStyle.buttonadd} >ADD</Button></Link>
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
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saletable">
                            <TableHead>
                                <TableRow align="left">
                                    <StyledTableCell>Action</StyledTableCell>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell>Invoice No.</StyledTableCell>
                                    <StyledTableCell>Customer Name</StyledTableCell>
                                    <StyledTableCell>Contact Number</StyledTableCell>
                                    <StyledTableCell>Location</StyledTableCell>
                                    <StyledTableCell>Payment Status</StyledTableCell>
                                    <StyledTableCell>Payment Method</StyledTableCell>
                                    <StyledTableCell>Total Amount</StyledTableCell>
                                    <StyledTableCell>Total Paid</StyledTableCell>
                                    <StyledTableCell>Sell Due</StyledTableCell>
                                    <StyledTableCell>Sell Return Due</StyledTableCell>
                                    <StyledTableCell>Shipping Status</StyledTableCell>
                                    <StyledTableCell>Total Items</StyledTableCell>
                                    <StyledTableCell>Types of Service</StyledTableCell>
                                    <StyledTableCell>Custom Field 1</StyledTableCell>
                                    <StyledTableCell>Added By</StyledTableCell>
                                    <StyledTableCell>Sell Note</StyledTableCell>
                                    <StyledTableCell>Staff Note</StyledTableCell>
                                    <StyledTableCell>Shipping Details</StyledTableCell>
                                    <StyledTableCell>Table</StyledTableCell>
                                    <StyledTableCell>Service Staff</StyledTableCell>
                                </TableRow>
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
                                                sx={{ backgroundColor: '#6420c0', textTransform: 'Capitalize' }}
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
                                                <Link to="/sell/sales/edit" style={{textDecoration: 'none', color: 'white'}}><MenuItem onClick={handleClose} disableRipple><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Edit&ensp;</MenuItem></Link>
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
                                    <StyledTableCell align="left"><Salespayment /></StyledTableCell>
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
                            <TableFooter sx={{ backgroundColor: '#9591914f', height: '75px' }}>
                                <TableRow className="table2_total" >
                                    <StyledTableCell
                                        colSpan={6}
                                        align="right"
                                        padding="250px"
                                        sx={{ fontWeight: 700, fontSize: 18, color: "black", alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                    >
                                        Total:{" "}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>Paid - 0</StyledTableCell>
                                    <StyledTableCell align="center" colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>Cash - 0</StyledTableCell>
                                    <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell colSpan={1} sx={{ fontSize: '14px', fontWeight: '700' }}>₹ 0.00</StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                    <StyledTableCell colSpan={1}></StyledTableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );

}




const Salelist = () => {
    return (
        <>
            <Box sx={{ display: 'flex', }} >
                <Sidebar />
                <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                    <Box component="main" sx={{ padding: '30px', }}><br /><br />
                        <Salelisttable /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Salelist;