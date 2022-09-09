import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper,
    Typography, Button, Table, TableContainer, TableHead, TableBody,
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Datetimepicker from '../../../components/Datetimepicker';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';

const Purchasereturncreatelist = () => {
    // ******** Text field ******** //
    const [purchaseRetAdd, setPurchaseRetAdd] = useState({
        purchaseRetAddSuppler: "", purchaseRetAddBusinessLoc: "", purchaseRetAddRefNo: "", purchaseRetAddDate: "", purchaseRetAddPurTax: "",
        purchaseRetAddSearch: "",
    });


    return (
        <Box>
            <form action=''>
                <Typography sx={userStyle.HeaderText}>Add Purchase Return</Typography>
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={3} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><PersonOutlineOutlinedIcon style={{ fontSize: 'large' }} /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Supplier *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseRetAdd.purchaseRetAddSupplier}
                                        onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, purchaseRetAddSupplier: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Please Select</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Business Location *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseRetAdd.purchaseRetAddBusinessLoc}
                                    onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, purchaseRetAddBusinessLoc: e.target.value }) }}
                                    label="Business Location *"
                                >
                                    <MenuItem value="">Please Select </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyyy</MenuItem>
                                    <MenuItem value={2}>zzz</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Reference No</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    label="SKU *"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Datetimepicker />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    component="label"
                                    sx={userStyle.uploadBtn}
                                >
                                    Browse
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB <br />Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png</Typography>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={userStyle.container} style={{ minHeight: '300px', }}>
                    <Grid display="flex" >
                        <Typography variant="h6" >Search Products</Typography>
                    </Grid>
                    <Grid container style={{ justifyContent: "center", padding: '10px' }} sx={userStyle.textInput} spacing={3}>
                        <Grid item md={8} sx={12} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}>
                                    < SearchOutlinedIcon style={{ fontSize: 'large' }} />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseRetAdd.purchaseRetAddSearch}
                                        onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, purchaseRetAddSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}></Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TableContainer component={Paper} >
                                <Table aria-label="customized table" id="">
                                    <TableHead >
                                        <StyledTableRow >
                                            <StyledTableCell align="center">Product</StyledTableCell>
                                            <StyledTableCell align="center">Quantity</StyledTableCell>
                                            <StyledTableCell align="center">Unit Price</StyledTableCell>
                                            <StyledTableCell align="center">Subtotal</StyledTableCell>
                                            <StyledTableCell align="center"><DeleteOutlineOutlinedIcon style={{ fontSize: 'large' }} /></StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}></Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Purchase Tax</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseRetAdd.purchaseRetAddPurTax}
                                    onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, purchaseRetAddPurTax: e.target.value }) }}
                                    label="Purchase Tax"
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value={1}>GST</MenuItem>
                                    <MenuItem value={2}>CGST</MenuItem>
                                    <MenuItem value={2}>TAX</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}></Grid>
                        <Grid item lg={2} md={2} sm={2} xs={12}>
                            <Typography variant="subtitle1"><b>Total Amount:</b> 0.00</Typography>
                        </Grid>
                    </Grid>
                </Box><br />
                <Box style={{ marginRight: '20px' }}>
                    <Button sx={userStyle.buttonadd}>SAVE</Button><br />
                </Box>
            </form>
        </Box>
    );
}

function Purchasereturncreate() {
    return (
        <Box sx={{ display: 'flex', }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <Purchasereturncreatelist /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}

export default Purchasereturncreate;