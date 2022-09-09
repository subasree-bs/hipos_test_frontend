import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TextareaAutosize, TableRow,
    Typography, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableCell, TableBody, TableFooter
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Datetimepicker from '../../../components/Datetimepicker';

const StockTransferedit = () => {
    // ******** Text field ******** //
    const [stockTranEdit, setStockTranEdit] = useState({
        stockTranEditRefNo: "", stockTranEditStatus: "", stockTranEditLocFrm: "", stockTranEditLocTo: "",
        stockTranEditSearch: "", stockTranEditShipChrg: "", stockTranEditAddNote: "", stockTranEditDate:"",
    });


    return (
        <Box>
            <form action=''>
                <Box>
                    <Grid display="flex">
                        <Typography sx={userStyle.HeaderText}>Edit Stock Transfer</Typography>
                    </Grid>
                </Box>
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={{ padding: '40px 20px', }}>
                        <Grid item md={4} sm={12} xs={12} >
                            <FormControl size="small" fullWidth >
                               <Datetimepicker />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} >
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Reference No</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={stockTranEdit.stockTranEditRefNo}
                                    onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditRefNo: e.target.value }) }}
                                    label="Reference No"
                                    type='text'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Status *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={stockTranEdit.stockTranEditStatus}
                                        onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditStatus: e.target.value }) }}
                                        label="Status *"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Admin</MenuItem>
                                        <MenuItem value={2}>Cashier</MenuItem>
                                        <MenuItem value={3}>Admin - Franchiese</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid>
                                    <Tooltip title="Stock transfer will not be editable if status is completed " >
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Location (Form) *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={stockTranEdit.stockTranEditLocFrm}
                                    onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditLocFrm: e.target.value }) }}
                                    label="Location (Form) *"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                    <MenuItem value={3}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Location (To) *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={stockTranEdit.stockTranEditLocTo}
                                    onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditLocTo: e.target.value }) }}
                                    label="Location (Form) *"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                    <MenuItem value={3}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box><br />
                <Box sx={userStyle.container} style={{ minHeight: '300px', }}>
                    <Grid display="flex" >
                        <Typography variant="h6" >Search Products</Typography>
                    </Grid>
                    <Grid container style={{ justifyContent: "center", padding: '10px' }} sx={userStyle.textInput}>
                        <Grid md={8} sx={12} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}>
                                    < SearchOutlinedIcon style={{fontsize:'large'}} />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={stockTranEdit.stockTranEditSearch}
                                        onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid><br />
                    <Grid container style={{ justifyContent: 'center', paddingRight: '10px', paddingLeft: '10px' }}>
                        { /* table start */}
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead >
                                    <TableRow >
                                        <TableCell >Product</TableCell>
                                        <TableCell >Quantity</TableCell>
                                        <TableCell >Unit Price</TableCell>
                                        <TableCell >Subtotal</TableCell>
                                        <TableCell ><DeleteOutlineOutlinedIcon style={{fontsize:'large'}} /></TableCell>
                                    </TableRow>
                                </TableHead><br />
                                <TableBody align="left">
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell ></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}></TableCell>
                                        <TableCell><b>Total Amount:</b> 0.00</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer><br />
                        { /* table end */}
                    </Grid>
                </Box><br />
                <Box sx={userStyle.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl size="small" fullWidth sx={{ marginTop: '35px' }}>
                                <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={stockTranEdit.stockTranEditShipChrg}
                                    onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditShipChrg: e.target.value }) }}
                                    label="Shipping Charges"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Additional Notes </InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={stockTranEdit.stockTranEditAddNote}
                                    onChange={(e) => { setStockTranEdit({ ...stockTranEdit, stockTranEditAddNote: e.target.value }) }} />
                            </FormControl>

                        </Grid>
                    </Grid><br />
                    <Box sx={{ float: 'right' }}>
                        <Button sx={userStyle.buttonadd}>Save</Button>
                    </Box><br /><br />
                </Box>
            </form >
        </Box >
    );
}

const StockTransferEdit = () => {
    return (
        <Box sx={{ display: 'flex', }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <StockTransferedit /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}

export default StockTransferEdit;