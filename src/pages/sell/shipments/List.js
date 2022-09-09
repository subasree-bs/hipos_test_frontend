import React, { useState } from 'react';
import { Box, Button, Grid,Accordion, AccordionSummary, AccordionDetails,Typography, Select, MenuItem, Table, TableBody, TableContainer, TableHead, Paper, FormControl, InputLabel} from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter,FaFileCsv } from 'react-icons/fa';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { userStyle } from '../../PageStyle';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import  Daterangepicker  from '../../../components/Daterangepicker';
import { AiFillFileExcel } from 'react-icons/ai';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
function Shipmentslisttable() {
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
  const [shipmentForm, setShipmentForm] = useState({
    shipmentFormBusinessLoc: "", shipmentFormCustomer: "", shipmentFormUser: "", shipmentFormPayStatus: "",
    shipmentFormShipStatus: "",
  });
  // / Accordion expand
  const [expanded, setExpanded] = useState("panel1");
  const filterPanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box>
      <Typography sx={userStyle.HeaderText}>Shipments</Typography>
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
                      value={shipmentForm.shipmentFormBusinessLoc}
                      onChange={(e) => { setShipmentForm({ ...shipmentForm, shipmentFormBusinessLoc: e.target.value }) }}
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
                      value={shipmentForm.shipmentFormCustomer}
                      onChange={(e) => { setShipmentForm({ ...shipmentForm, shipmentFormCustomer: e.target.value }) }}
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
                      value={shipmentForm.shipmentFormUser}
                      onChange={(e) => { setShipmentForm({ ...shipmentForm, shipmentFormUser: e.target.value }) }}
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
                    <InputLabel id="demo-select-small">Payment Status</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={shipmentForm.shipmentFormPayStatus}
                      onChange={(e) => { setShipmentForm({ ...shipmentForm, shipmentFormPayStatus: e.target.value }) }}
                      label="Payment Status"
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
                      value={shipmentForm.shipmentFormShipStatus}
                      onChange={(e) => { setShipmentForm({ ...shipmentForm, shipmentFormShipStatus: e.target.value }) }}
                      label="Shipping Status"
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
                  <StyledTableCell align="left">Action</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Invoice No.</StyledTableCell>
                  <StyledTableCell align="left">Customer name</StyledTableCell>
                  <StyledTableCell align="left">Contact Number</StyledTableCell>
                  <StyledTableCell align="left">Location</StyledTableCell>
                  <StyledTableCell align="left">Shipping Status</StyledTableCell>
                  <StyledTableCell align="left">Payment Status</StyledTableCell>
                  <StyledTableCell align="left">Service Staff</StyledTableCell>                 
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell >
                    <Button sx={userStyle.buttonedit}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT&ensp;</Link></Button>
                    <Button sx={userStyle.buttonview}><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;VIEW&ensp;</Button>
                    <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;DELETE&ensp;</Button>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row"></StyledTableCell>
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
        </Box>
      </Box>
    </Box>
  );
}
const Shipmentslist = () =>{
    return(
        <>
          <Box sx={{display:'flex', }} >
             <Sidebar />
             <Box sx={{width:'100%',overflowX:'hidden'}}>
                 <Box component="main" sx={{ padding: '30px',}}><br /><br />
                     <Shipmentslisttable /><br /><br />
                     <Footer />
                 </Box>
             </Box>
         </Box>
      </>
    );
}
export default Shipmentslist;