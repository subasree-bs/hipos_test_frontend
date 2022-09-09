import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, InputAdornment,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaExternalLinkAlt, FaUserSecret, FaTable } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import LocationOnIconOutlined from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import  Datetimepicker  from '../../../components/Datetimepicker';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Quotsearchplus from './Quotationsearchproduct';
import Quotcusmod from './Quotationcustomer';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';

const Quotationcreatelist = ()=>{
    // ******** Text field ******** //
    const [quotAdd, setQuotAdd] = useState({
        quotAddLoc: "", quotAddSelect: "", quotAddPayTerm: "", quotAddPaySelect: "",
        quotAddStatus: "", quotAddInvoiceSh: "", quotAddInvoiceNo: "", quotAddTable: "",
        quotAddStaff: "", quotAddDisType: "", quotAddDisAmt: "", quotAddOrdTax: "",
        quotAddSell: "", quotAddShipDet: "", quotAddShipAdd: "", quotAddShipChrg: "", quotAddShipStatus: "",
        quotAddDeliveredTo: "", quotAddAmt: "", quotAddPayMethod: "", quotAddPayAcc: "", quotAddCrdNo: "", quotAddCrdName: "",
        quotAddCrdTransNo: "", quotAddCrdType: "", quotAddMonth: "", quotAddYear: "", quotAddSecCode: "", quotAddChequeNo: "",
        quotAddBankAccNo: "", quotAddTrans: "", quotAddPayNote: "",
    });

 
    return (
        <Box>
        <form action=''>
            <Box >
                <Grid display="flex">
                    <Typography sx={userStyle.HeaderText}>Add Quotation</Typography>&ensp;
                </Grid>
            </Box>
            <Box sx={userStyle.container}>
                <Grid container spacing={4} sx={userStyle.textInput}>
                <Grid item md={4} sm={6} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><LocationOnIconOutlined /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">xxx</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotAdd.quotAddLoc}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddLoc: e.target.value }) }}
                                        label="xxx"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>xxx</MenuItem>
                                        <MenuItem value={2}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={userStyle.spanInfoIcons}>
                                    <Tooltip title="Business location from where your want to sell" >
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid><br /><br />
                        </Grid>
                        <Grid item md={8}></Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaExternalLinkAlt /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Select types of service</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddSelect}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddSelect: e.target.value }) }}
                                    label="Select types of service"
                                    fullWidth
                                >
                                    <MenuItem value={1}>Select types of service</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid sx={userStyle.spanInfoIcons}>
                                {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="Type of service means services like dine-in, parcel, home delivery, third party delivery etx." arrow> */}
                                    <IconButton>
                                        <FcInfo />
                                    </IconButton>
                                {/* </Tooltip> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}></Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <FormGroup>
                            <span><FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules" arrow> */}
                                    <IconButton>
                                        <FcInfo />
                                    </IconButton>
                                {/* </Tooltip> */}
                            </span>
                        </FormGroup>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><PersonOutlineOutlinedIcon /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Customer</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    // value={quotAdd.quotAddb}
                                    // onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddbrand: e.target.value }) }}
                                    label="Customer"
                                    fullWidth
                                >
                                    <MenuItem value={1}>Walk-in Customer</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid sx={userStyle.spanIcons}>
                              <Quotcusmod />
                                {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="Type of service means services like dine-in, parcel, home delivery, third party delivery etx." arrow>
                                    <IconButton>
                                        <FcInfo />
                                    </IconButton>
                                </Tooltip> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={{ width: '210px' }}>
                                <FormControl variant="outlined" size="small" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            // <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title='Payments to be paid for purchases/sales within the given time period. All upcoming or due payments will be displayed in dashboard - Payment Due section' arrow>
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end"
                                                        value={quotAdd.quotAddPayTerm}
                                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddPayTerm: e.target.value }) }}
                                                    >
                                                        <FcInfo />
                                                    </IconButton>
                                                </InputAdornment>
                                            // </Tooltip>
                                        }
                                        label="Pay Term"
                                    />
                                </FormControl>
                            </Grid>
                            <FormControl size="small" sx={{ display: 'flex', }} fullWidth>
                                <InputLabel htmlFor="component-outlined" >Please Select</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddPaySelect}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddPaySelect: e.target.value }) }}
                                    label="Please Select"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>Month</MenuItem>
                                    <MenuItem value={3}>Days</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }} >
                            <Grid sx={userStyle.spanIcons}><CalendarTodayOutlinedIcon /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <Datetimepicker fullWidth />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item md={4} sm={6} xs={12}>
                                <Grid display="block">
                                    <Typography variant='subtitle1'><b>Billing Address:</b> <br />Walk-in Customer</Typography>
                                    <br />
                                    <Typography variant='subtitle1'><b>Shipping Address:</b> <br /> Walk-in Customer,</Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={8} sm={6} xs={12}>

                                <Grid item md={12} sm={12} xs={12}>
                                    <Grid container spacing={3}>
                                        <Grid item md={6} sm={6} xs={12}>
                                            <FormControl size="small" sx={{ display: 'flex', }} fullWidth>
                                                <InputLabel htmlFor="component-outlined" >Invoice Scheme</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={quotAdd.quotAddInvoiceSh}
                                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddInvoiceSh: e.target.value }) }}
                                                    label="Invoice Scheme"
                                                    fullWidth
                                                >
                                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                                    <MenuItem value={2}>Defaul</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={12}>
                                            <FormControl size="small" fullWidth >
                                                        <InputLabel htmlFor="component-outlined" >Invoice No</InputLabel>
                                                        <OutlinedInput
                                                            id="component-outlined"
                                                            value={quotAdd.quotAddInvoiceNo}
                                                            onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddInvoiceNo: e.target.value }) }}
                                                            label="Invoice No"
                                                        />
                                                    </FormControl>
                                        </Grid>

                                        <Grid item md={12} sm={12} xs={12}>
                                            <Grid container spacing={3}>
                                                <Grid item md={6} sm={12} xs={12}>
                                                <FormControl size="small" fullWidth>
                                                        <Button component="label" sx={userStyle.uploadBtn}> Upload File
                                                            <input type="file" hidden />
                                                        </Button>
                                                        <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                                            Max File size: 5MB <br />
                                                            Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                                                        </Typography>
                                                    </FormControl>
                                                    <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Keep blank to auto generate</Typography>
                                                </Grid>
                                                <Grid item md={6} sm={12} xs={12}>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaTable /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Select Table</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddTable}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTable: e.target.value }) }}
                                    label="Select Table"
                                    fullWidth
                                >
                                    <MenuItem value={1}>Select Table</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaUserSecret /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Select Service Staff</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddStaff}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddStaff: e.target.value }) }}
                                    label="Select Service Staff"
                                    fullWidth
                                >
                                    <MenuItem value={1}>Select Service Staff</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                </Grid>
            </Box><br />
            <Box sx={userStyle.container} >
                <Grid container style={{ justifyContent: "center", }} sx={userStyle.textInput}>
                    <Grid md={8} sx={12} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}>
                                < SearchOutlinedIcon />
                            </Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={quotAdd.quotAddbrand}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddbrand: e.target.value }) }}
                                    type="search"
                                    label="Enter Product name / SKU / Scan bar code"
                                />
                            </FormControl>
                            <Quotsearchplus />
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                    <Table aria-label="customized table" id="">
                        <TableHead >
                            <TableRow >
                                <TableCell >Product</TableCell>
                                <TableCell >Quantity</TableCell>
                                <TableCell >Unit Price</TableCell>
                                <TableCell >Discount</TableCell>
                                <TableCell >Subtotal</TableCell>
                                <TableCell ><AiOutlineClose /></TableCell>
                            </TableRow>
                        </TableHead><br />
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align="right"><b>Items:</b> 0.00</TableCell>
                                <TableCell align="right"><b>Total:</b> 0.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer><br />
            </Box><br />
            <Box sx={userStyle.container}>
                <Grid container spacing={3} sx={userStyle.textInput}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddDisType}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddDisType: e.target.value }) }}
                                    label="Discount Type *"
                                    fullWidth
                                >
                                    <MenuItem value=""><em>Please Select</em></MenuItem>
                                    <MenuItem value={1}>Fixed</MenuItem>
                                    <MenuItem value={2}>Percentage</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Discount Amount *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={quotAdd.quotAddDisAmt}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddDisAmt: e.target.value }) }}
                                    label="Discount Amount *"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid display="block">
                            <Typography variant='subtitle1'><b>Discount Amount:</b> (-) 0.00</Typography>
                            <br />
                            <Typography variant='subtitle1'><b>Order Tax:</b> (+) 0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Order Tax *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddOrdTax}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddOrdTax: e.target.value }) }}
                                    label="Order Tax *"
                                    fullWidth
                                >
                                    <MenuItem value=""><em>Please Select</em></MenuItem>
                                    <MenuItem value={1}>Fixed</MenuItem>
                                    <MenuItem value={2}>Percentage</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <InputLabel id="demo-select-small" sx={{ m: 1 }}>Sell Note</InputLabel>
                        <FormControl size="small" fullWidth >
                            <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                value={quotAdd.quotAddSell}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddSell: e.target.value }) }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box><br />

            <Box sx={userStyle.container}>
                <Grid container spacing={3} sx={userStyle.textInput}>
                    <Grid item md={4} sm={6} xs={12}>
                        <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Details</InputLabel>
                        <FormControl size="small" fullWidth >
                            <TextareaAutosize aria-label="minimum height" placeholder='Shipping Details' minRows={3} style={{ border: '1px solid #b97df0' }}
                                value={quotAdd.quotAddShipDet}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddShipDet: e.target.value }) }} />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Address</InputLabel>
                        <FormControl size="small" fullWidth >
                            <TextareaAutosize aria-label="minimum height" placeholder='Shipping Address' minRows={3} style={{ border: '1px solid #b97df0' }}
                                value={quotAdd.quotAddShipAdd}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddShipAdd: e.target.value }) }} />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: '64px !important' }}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={quotAdd.quotAddShipChrg}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddShipChrg: e.target.value }) }}
                                    label="Shipping Charges"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Shipping Status</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={quotAdd.quotAddShipStatus}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddShipStatus: e.target.value }) }}
                                label="Shipping Status"
                                fullWidth
                            >
                                <MenuItem value=""><em>Please Select</em></MenuItem>
                                <MenuItem value={1}>Ordered</MenuItem>
                                <MenuItem value={2}>Packed</MenuItem>
                                <MenuItem value={3}>Shipped</MenuItem>
                                <MenuItem value={4}>Delivered</MenuItem>
                                <MenuItem value={5}>Cancelled</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <FormControl size="small" fullWidth >
                            <InputLabel htmlFor="component-outlined" >Delivered to</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={quotAdd.quotAddDeliveredTo}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddDeliveredTo: e.target.value }) }}
                                label="Delivered To"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <Button component="label" sx={userStyle.uploadBtn}> Upload File
                                <input type="file" hidden />
                            </Button>
                            <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                Max File size: 5MB <br />
                                Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                            </Typography>
                        </FormControl>
                    </Grid>
                    <Grid item md={8} sm={6} sx={12}></Grid>
                    <Grid item md={4} sm={6} sx={12}>
                        <Typography variant='subtitle1'><b>Total Payable:</b> 0.00</Typography>
                    </Grid>


                </Grid>
            </Box><br />
            <Box sx={userStyle.container}>
                <Typography variant="h6" >Add payment</Typography>
                <Grid container spacing={3} sx={userStyle.textInput}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Typography variant="body2" ><b>Advance Balance:</b> ₹ 0.00</Typography>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon /></Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Amount *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={quotAdd.quotAddAmt}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddAmt: e.target.value }) }}
                                    label="Amount *"
                                    type='number'
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} >
                        <Grid sx={{ display: 'flex' }} >
                            <Grid sx={userStyle.spanIcons}><CalendarTodayOutlinedIcon /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <Datetimepicker fullWidth />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Payment Method *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={quotAdd.quotAddPayMethod}
                                    onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddPayMethod: e.target.value }) }}
                                    label="Payment Method *"
                                    fullWidth
                                >
                                    <MenuItem value="Advance">Advance</MenuItem>
                                    <MenuItem value="Cash">Cash</MenuItem>
                                    <MenuItem value="Card">Card</MenuItem>
                                    <MenuItem value="Cheque">Cheque</MenuItem>
                                    <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                    <MenuItem value="Custom Payment 1">Custom Payment 1</MenuItem>
                                    <MenuItem value="Custom Payment 2">Custom Payment 2</MenuItem>
                                    <MenuItem value="Custom Payment 3">Custom Payment 3</MenuItem>
                                    <MenuItem value="Custom Payment 4">Custom Payment 4</MenuItem>
                                    <MenuItem value="Custom Payment 5">Custom Payment 5</MenuItem>
                                    <MenuItem value="Custom Payment 6">Custom Payment 6</MenuItem>
                                    <MenuItem value="Custom Payment 7">Custom Payment 7</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {(quotAdd.quotAddPayMethod ==='Cash' || quotAdd.quotAddPayMethod ==='Other' || quotAdd.quotAddPayMethod ==='Advance') &&
                    (
                        <>
                      
                            <Grid item md={4} sm={6} xs={12}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Payment Account</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotAdd.quotAddPayAcc}
                                            onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddPayAcc: e.target.value }) }}
                                            label="Payment Account"
                                            fullWidth
                                        >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}></Grid>
                        </>
                    )
                    } 

                    {/* ****** Dropdown options ****** */}
                    {/* ****** Card Section ****** */}
                    {quotAdd.quotAddPayMethod ==='Card' &&
                    (
                        <>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Card Number</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddCrdNo}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddCrdNo: e.target.value }) }}
                                        label="Card Number"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Card Holder Name</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddCrdName}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddCrdName: e.target.value }) }}
                                        label="Card Holder Name"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Card Transaction No</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddCrdTransNo}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddCrdTransNo: e.target.value }) }}
                                        label="Card Transaction No"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={3} sm={12} xs={12}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Card Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotAdd.quotAddCrdType}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddCrdType: e.target.value }) }}
                                        label="Card Type"
                                        fullWidth
                                    >
                                        <MenuItem value="">Credit Card</MenuItem>
                                        <MenuItem value={1}>Debit Card</MenuItem>
                                        <MenuItem value={2}>Visa</MenuItem>
                                        <MenuItem value={3}>MasterCard</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Month</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddMonth}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddMonth: e.target.value }) }}
                                        label="Month"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={3} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Year</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddYear}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddYear: e.target.value }) }}
                                        label="Year"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={3} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Security Code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddSecCode}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddSecCode: e.target.value }) }}
                                        label="Security Code"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {/* ****** Cheque Section ****** */}
                    {quotAdd.quotAddPayMethod ==='Cheque' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Cheque No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddChequeNo}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddChequeNo: e.target.value }) }}
                                        label="Cheque No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {/* ****** Bank Section ****** */}
                    {quotAdd.quotAddPayMethod ==='Bank Transfer' &&
                    (
                        <>
                    <Grid item md={12} sm={12} xs={12}>
                        <FormControl size="small" fullWidth >
                            <InputLabel htmlFor="component-outlined" >Bank Account No.</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={quotAdd.quotAddBankAccNo}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddBankAccNo: e.target.value }) }}
                                label="Bank Account No."
                                type='text'
                            />
                        </FormControl>
                    </Grid>
                    </>
                    )
}

                    {/* ****** Transaction Section ****** */}
                    {quotAdd.quotAddPayMethod ==='Custom Payment 1' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {quotAdd.quotAddPayMethod ==='Custom Payment 2' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                     {quotAdd.quotAddPayMethod ==='Custom Payment 3' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {quotAdd.quotAddPayMethod ==='Custom Payment 4' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {quotAdd.quotAddPayMethod ==='Custom Payment 5' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {quotAdd.quotAddPayMethod ==='Custom Payment 6' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {quotAdd.quotAddPayMethod ==='Custom Payment 7' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotAdd.quotAddTrans}
                                        onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }
                    {/* *************** End ************ */}

                    <Grid item md={12} sm={12} xs={12}>
                        <InputLabel id="demo-select-small" sx={{ m: 1 }}>Payment Note</InputLabel>
                        <FormControl size="small" fullWidth >
                            <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                value={quotAdd.quotAddPayNote}
                                onChange={(e) => { setQuotAdd({ ...quotAdd, quotAddPayNote: e.target.value }) }} />
                        </FormControl><br /><br />
                        <hr />
                    </Grid>
                    <Grid container style={{ justifyContent: "right", }} sx={userStyle.textInput}>
                        <Typography variant='subtitle1'><b>Balance:</b> ₹ 0.00</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container sx={userStyle.gridcontainer}>
                <Grid >
                    <Button sx={userStyle.buttonadd}>SAVE AND PRINT</Button>
                    <Button sx={userStyle.buttonadd}>SAVE</Button>
                </Grid>
            </Grid>
        </form >
    </Box >
    );
}

const Quotationcreate = () => {
  return (
    <>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Quotationcreatelist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
  );
}

export default Quotationcreate;