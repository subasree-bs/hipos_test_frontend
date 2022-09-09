import React, { useState } from 'react';
import { userStyle } from '../../PageStyle'; import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TextareaAutosize, InputAdornment, TableCell,
    Typography, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody, NativeSelect, TableFooter,
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaSearch, FaTrash } from "react-icons/fa";
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Datetimepicker from '../../../components/Datetimepicker';

const StockAdjustedit = () => {
    // ******** Text field ******** //
    const [stockAdjEdit, setStockAdjEdit] = useState({
        stockAdjEditRefNo: "", stockAdjEditAdjType: "", stockAdjEditDate: "",
        stockAdjEditSearch: "", stockAdjEdittotalAmount: "", stockAdjEditReason: "", stockAdjEditBusiLoc: "",
    });

    return (
        <Box>
            <form action=''>
                <Box>
                    <Grid display="flex">
                        <Typography sx={userStyle.HeaderText}>Edit Stock Adjustment</Typography>&ensp;
                    </Grid>
                </Box>
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={{ padding: '40px 20px', }}>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Business Location *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={stockAdjEdit.stockAdjEditBusiLoc}
                                    onChange={(e) => { setStockAdjEdit({ ...stockAdjEdit, stockAdjEditBusiLoc: e.target.value }) }}
                                    label="Select Service Staff"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                    <MenuItem value={3}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} >
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Reference No</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={stockAdjEdit.stockAdjEditRefNo}
                                    onChange={(e) => { setStockAdjEdit({ ...stockAdjEdit, stockAdjEditRefNo: e.target.value }) }}
                                    label="Reference No"
                                    type='text'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} >
                            <FormControl size="small" fullWidth >
                               <Datetimepicker />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Adjustment type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="Adjustment type *"
                                        value={stockAdjEdit.stockAdjEditStatus}
                                        onChange={(e) => { setStockAdjEdit({ ...stockAdjEdit, stockAdjEditStatus: e.target.value }) }}
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Admin</MenuItem>
                                        <MenuItem value={2}>Cashier</MenuItem>
                                        <MenuItem value={3}>Admin - Franchiese</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid>
                                    <Tooltip title="Norma: Adjustment for normal reasons like Leakage, Damage etc. 
              Abnormal: Adjustment for reasons like Fire, Accident etc." >
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>

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
                                    < FaSearch />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={stockAdjEdit.stockAdjEditSearch}
                                        onChange={(e) => { setStockAdjEdit({ ...stockAdjEdit, stockAdjEditSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid><br />
                    <Grid container style={{ justifyContent: 'center', paddingRight: '10px', paddingLeft: '10px' }}>
                        { /* table start */}
                        <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead >
                                    <TableRow >
                                        <TableCell >Product</TableCell>
                                        <TableCell >Quantity</TableCell>
                                        <TableCell >Unit Price</TableCell>
                                        <TableCell >Subtotal</TableCell>
                                        <TableCell ><FaTrash /></TableCell>
                                    </TableRow>
                                </TableHead><br />
                                <TableBody>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
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
                            <FormControl variant="outlined" size="small" fullWidth sx={{ marginTop: '35px' }}>
                                <InputLabel htmlFor="outlined-adornment-password">Total amount recovered</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title="Amountt recovered from insurance or selling of scraps or others.">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    value={stockAdjEdit.stockAdjEdittotalAmount}
                                                    onChange={(e) => { setStockAdjEdit({ ...stockAdjEdit, stockAdjEdittotalAmount: e.target.value }) }}

                                                    edge="end"
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Total amount recovered"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Reason:</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={stockAdjEdit.stockAdjEditReason}
                                    onChange={(e) => { setStockAdjEdit({ ...stockAdjEdit, stockAdjEditReason: e.target.value }) }} />
                            </FormControl>

                        </Grid>
                    </Grid><br />
                    <Box sx={{ float: 'right' }}>
                        <Button sx={userStyle.buttonadd}>SAVE  </Button>
                    </Box><br /><br />
                </Box>
            </form >
        </Box >
    );
}

const StockAdjustEdit = () => {
    return (
        <Box sx={{ display: 'flex', }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <StockAdjustedit /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}

export default StockAdjustEdit;