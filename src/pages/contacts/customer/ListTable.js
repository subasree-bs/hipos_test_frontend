import React, { useState } from "react";
import { Box, Grid, Table, TableBody, TableHead, TableContainer, Button, Menu, MenuItem, TableFooter, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import $ from 'jquery';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { FaFileCsv, FaPrint, FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import Customeredit from "./Edit";
import Customercreate from "./Create";
import { userStyle } from "../../PageStyle";

function Customertable() {

    // ***** jquery plugin ****//
    $(document).ready(function () {
        setTimeout(function () {
            $('#customertable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });

    //***** Action button *****//
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    return (
        <>
            <Box sx={userStyle.container} >
                { /* Header Content */}
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>All your Customers</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Customercreate />
                    </Grid>
                </Grid><br />
                { /* Header Buttons */}
                <Grid container sx={{ justifyContent: "center", }} >
                    <Grid>
                        <Button sx={userStyle.buttongrp} variant="outlined">
                            <FaFileCsv />&ensp;Export to CSV&ensp;
                        </Button>
                        <Button sx={userStyle.buttongrp} variant="outlined">
                            <AiFillFileExcel />&ensp;Export to Excel&ensp;
                        </Button>
                        <Button sx={userStyle.buttongrp} variant="outlined">
                            <FaPrint />&ensp;Print&ensp;
                        </Button>
                        <Button sx={userStyle.buttongrp} variant="outlined">
                            <FaFilePdf />&ensp;Export to PDF&ensp;
                        </Button>
                    </Grid>
                    {/* Table Grid Container */}
                    <Grid container>
                        <Grid md={4} sm={2} xs={1}></Grid>
                        <Grid md={8} sm={10} xs={10} sx={{ align: "center" }}></Grid>
                    </Grid>
                </Grid><br />
                { /* Table Start */}
                <TableContainer component={Paper} >
                    <Table sx={{}} aria-label="simple table" id="customertable">
                        <TableHead sx={{ fontWeight: "600", fontSize: "14px" }} >
                            <StyledTableRow >
                                <StyledTableCell>Actions</StyledTableCell>
                                <StyledTableCell>Contact ID</StyledTableCell>
                                <StyledTableCell>Business Name</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Tax Number</StyledTableCell>
                                <StyledTableCell>Credit Limit</StyledTableCell>
                                <StyledTableCell>Pay Term</StyledTableCell>
                                <StyledTableCell>Opening Balance</StyledTableCell>
                                <StyledTableCell>Advance Balance</StyledTableCell>
                                <StyledTableCell>Added On</StyledTableCell>
                                <StyledTableCell>Customer Group</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
                                <StyledTableCell>Mobile</StyledTableCell>
                                <StyledTableCell>Total Sale Due</StyledTableCell>
                                <StyledTableCell>Total Sell Return Due</StyledTableCell>
                                <StyledTableCell>Custom Field 1</StyledTableCell>
                                <StyledTableCell>Custom Field 2</StyledTableCell>
                                <StyledTableCell>Custom Field 3</StyledTableCell>
                                <StyledTableCell>Custom Field 4</StyledTableCell>
                                <StyledTableCell>Custom Field 5</StyledTableCell>
                                <StyledTableCell>Custom Field 6</StyledTableCell>
                                <StyledTableCell>Custom Field 7</StyledTableCell>
                                <StyledTableCell>Custom Field 8</StyledTableCell>
                                <StyledTableCell>Custom Field 9</StyledTableCell>
                                <StyledTableCell>Custom Field 10</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row" colSpan={1}>
                                    <>
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
                                            <Customeredit />
                                            <MenuItem onClick={handleClose} disableRipple><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;Delete&ensp;</MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple><PictureAsPdfOutlinedIcon style={{fontSize:'large'}}/>&ensp;PDF&ensp;</MenuItem>
                                        </Menu>
                                    </>
                                </StyledTableCell>
                                <StyledTableCell align="left">CI0001</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">Admin</StyledTableCell >
                                <StyledTableCell align="left">admin@gmail.com</StyledTableCell>
                                <StyledTableCell align="left">CAI001</StyledTableCell>
                                <StyledTableCell align="left">0.00</StyledTableCell>
                                <StyledTableCell align="left">CASH</StyledTableCell>
                                <StyledTableCell align="left">0.00</StyledTableCell>
                                <StyledTableCell align="left">0.00</StyledTableCell>
                                <StyledTableCell align="left">24/08/2022</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                                <StyledTableCell align="left">TEST</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        { /* Table Footer Start  */}
                        <TableFooter sx={{ backgroundColor: '#9591914f', height: '75px' }}>
                            <StyledTableRow className="table2_total" >
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell colSpan={8} sx={userStyle.footerStyle}>Total: 0.0</StyledTableCell>
                                <StyledTableCell align="left" sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
                                <StyledTableCell align="left" sx={userStyle.footerStyle}>₹ 0.00</StyledTableCell>
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
                        </TableFooter>
                        { /* Table Footer End */}
                    </Table>
                </TableContainer>
                { /* Table End */}
            </Box>
        </>
    );
}

export default Customertable;