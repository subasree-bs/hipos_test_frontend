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
import Salescusmod from './Salescustomer';
import Salesearchproduct from './Salesproductsearch';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';

const Salescreatelist = () =>{
  // ******** Text field ******** //
  const [saleAdd, setSaleAdd] = useState({
    saleAddLoc: "", saleAddSelect: "", saleAddPayTerm: "", saleAddPaySelect: "",
    saleAddStatus: "", saleAddInvoiceSh: "", saleAddInvoiceNo: "", saleAddTable: "",
    saleAddStaff: "", saleAddDisType: "", saleAddDisAmt: "", saleAddOrdTax: "",
    saleAddSell: "", saleAddShipDet: "", saleAddShipAdd: "", saleAddShipChrg: "", saleAddShipStatus: "",
    saleAddDeliveredTo: "", saleAddAmt: "", saleAddPayMethod: "", saleAddPayAcc: "", saleAddCrdNo: "", saleAddCrdName: "",
    saleAddCrdTransNo: "", saleAddCrdType: "", saleAddMonth: "", saleAddYear: "", saleAddSecCode: "", saleAddChequeNo: "",
    saleAddBankAccNo: "", saleAddTrans: "", saleAddPayNote: "",
});
//Payment Method
const [hiddenInputs,setHiddenInputs]=useState(false);

return (
    <Box>
        <form action=''>
            <Box >
                <Grid display="flex">
                    <Typography sx={userStyle.HeaderText}>Add Sale</Typography>&ensp;
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
                                        value={saleAdd.saleAddLoc}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddLoc: e.target.value }) }}
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
                                    value={saleAdd.saleAddSelect}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddSelect: e.target.value }) }}
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
                                    // value={saleAdd.saleAddb}
                                    // onChange={(e) => { setSaleAdd({ ...saleAdd, saleAddbrand: e.target.value }) }}
                                    label="Customer"
                                    fullWidth
                                >
                                    <MenuItem value={1}>Walk-in Customer</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid sx={userStyle.spanIcons}>
                              <Salescusmod />
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
                                                        value={saleAdd.saleAddPayTerm}
                                                        onChange={(e) => { setSaleAdd({ ...saleAdd, saleAddPayTerm: e.target.value }) }}
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
                                    value={saleAdd.saleAddPaySelect}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddPaySelect: e.target.value }) }}
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
                                        <Grid item md={8} sm={6} xs={12}>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined" >Status</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={saleAdd.saleAddStatus}
                                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddStatus: e.target.value }) }}
                                                    label="Status"
                                                    fullWidth
                                                >
                                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                                    <MenuItem value={2}>Final</MenuItem>
                                                    <MenuItem value={3}>Draft</MenuItem>
                                                    <MenuItem value={4}>Quotation</MenuItem>
                                                    <MenuItem value={5}>Proforma</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <FormControl size="small" sx={{ display: 'flex', }} fullWidth>
                                                <InputLabel htmlFor="component-outlined" >Invoice Scheme</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={saleAdd.saleAddInvoiceSh}
                                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddInvoiceSh: e.target.value }) }}
                                                    label="Invoice Scheme"
                                                    fullWidth
                                                >
                                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                                    <MenuItem value={2}>Defaul</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item md={12} sm={12} xs={12}>
                                            <Grid container spacing={3}>
                                                <Grid item md={7} sm={12} xs={12}>
                                                    <FormControl size="small" fullWidth >
                                                        <InputLabel htmlFor="component-outlined" >Invoice No</InputLabel>
                                                        <OutlinedInput
                                                            id="component-outlined"
                                                            value={saleAdd.saleAddInvoiceNo}
                                                            onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddInvoiceNo: e.target.value }) }}
                                                            label="Invoice No"
                                                        />
                                                    </FormControl>
                                                    <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Keep blank to auto generate</Typography>
                                                </Grid>
                                                <Grid item md={5} sm={12} xs={12}>
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
                                    value={saleAdd.saleAddTable}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTable: e.target.value }) }}
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
                                    value={saleAdd.saleAddStaff}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddStaff: e.target.value }) }}
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
                                    value={saleAdd.saleAddbrand}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddbrand: e.target.value }) }}
                                    type="search"
                                    label="Enter Product name / SKU / Scan bar code"
                                />
                            </FormControl>
                            <Salesearchproduct />
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
                                    value={saleAdd.saleAddDisType}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddDisType: e.target.value }) }}
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
                                    value={saleAdd.saleAddDisAmt}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddDisAmt: e.target.value }) }}
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
                                    value={saleAdd.saleAddOrdTax}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddOrdTax: e.target.value }) }}
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
                                value={saleAdd.saleAddSell}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddSell: e.target.value }) }}
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
                                value={saleAdd.saleAddShipDet}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddShipDet: e.target.value }) }} />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Address</InputLabel>
                        <FormControl size="small" fullWidth >
                            <TextareaAutosize aria-label="minimum height" placeholder='Shipping Address' minRows={3} style={{ border: '1px solid #b97df0' }}
                                value={saleAdd.saleAddShipAdd}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddShipAdd: e.target.value }) }} />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: '64px !important' }}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={saleAdd.saleAddShipChrg}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddShipChrg: e.target.value }) }}
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
                                value={saleAdd.saleAddShipStatus}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddShipStatus: e.target.value }) }}
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
                                value={saleAdd.saleAddDeliveredTo}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddDeliveredTo: e.target.value }) }}
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
                                    value={saleAdd.saleAddAmt}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddAmt: e.target.value }) }}
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
                                    value={saleAdd.saleAddPayMethod}
                                    onChange={(e) => { setSaleAdd({ ...saleAdd, saleAddPayMethod: e.target.value }) }}
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
                    {(saleAdd.saleAddPayMethod ==='Cash' || saleAdd.saleAddPayMethod ==='Other' || saleAdd.saleAddPayMethod ==='Advance') &&
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
                                            value={saleAdd.saleAddPayAcc}
                                            onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddPayAcc: e.target.value }) }}
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
                    {saleAdd.saleAddPayMethod ==='Card' &&
                    (
                        <>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Card Number</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddCrdNo}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddCrdNo: e.target.value }) }}
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
                                        value={saleAdd.saleAddCrdName}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddCrdName: e.target.value }) }}
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
                                        value={saleAdd.saleAddCrdTransNo}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddCrdTransNo: e.target.value }) }}
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
                                        value={saleAdd.saleAddCrdType}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddCrdType: e.target.value }) }}
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
                                        value={saleAdd.saleAddMonth}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddMonth: e.target.value }) }}
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
                                        value={saleAdd.saleAddYear}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddYear: e.target.value }) }}
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
                                        value={saleAdd.saleAddSecCode}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddSecCode: e.target.value }) }}
                                        label="Security Code"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {/* ****** Cheque Section ****** */}
                    {saleAdd.saleAddPayMethod ==='Cheque' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Cheque No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddChequeNo}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddChequeNo: e.target.value }) }}
                                        label="Cheque No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {/* ****** Bank Section ****** */}
                    {saleAdd.saleAddPayMethod ==='Bank Transfer' &&
                    (
                        <>
                    <Grid item md={12} sm={12} xs={12}>
                        <FormControl size="small" fullWidth >
                            <InputLabel htmlFor="component-outlined" >Bank Account No.</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={saleAdd.saleAddBankAccNo}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddBankAccNo: e.target.value }) }}
                                label="Bank Account No."
                                type='text'
                            />
                        </FormControl>
                    </Grid>
                    </>
                    )
}

                    {/* ****** Transaction Section ****** */}
                    {saleAdd.saleAddPayMethod ==='Custom Payment 1' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleAdd.saleAddPayMethod ==='Custom Payment 2' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                     {saleAdd.saleAddPayMethod ==='Custom Payment 3' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleAdd.saleAddPayMethod ==='Custom Payment 4' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleAdd.saleAddPayMethod ==='Custom Payment 5' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleAdd.saleAddPayMethod ==='Custom Payment 6' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleAdd.saleAddPayMethod ==='Custom Payment 7' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleAdd.saleAddTrans}
                                        onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddTrans: e.target.value }) }}
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
                                value={saleAdd.saleAddPayNote}
                                onChange={(e) => { setSaleAdd({ ...saleAdd, SaleAddPayNote: e.target.value }) }} />
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

const Salecreate = () => {
  return (
    <>
    <Box sx={{display:'flex', }} >
      <Sidebar />
      <Box sx={{width:'100%',overflowX:'hidden'}}>
          <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Salescreatelist /><br /><br />
              <Footer />
          </Box>
      </Box>
  </Box>
  </>
  )
}

export default Salecreate;