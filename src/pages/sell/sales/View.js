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

const Saleviewlist = () =>{
  // ******** Text field ******** //
  const [saleView, setSaleView] = useState({
    saleViewLoc: "", saleViewSelect: "", saleViewPayTerm: "", saleViewPaySelect: "",
    saleViewStatus: "", saleViewInvoiceSh: "", saleViewInvoiceNo: "", saleViewTable: "",
    saleViewStaff: "", saleViewDisType: "", saleViewDisAmt: "", saleViewOrdTax: "",
    saleViewSell: "", saleViewShipDet: "", saleViewShipAdd: "", saleViewShipChrg: "", saleViewShipStatus: "",
    saleViewDeliveredTo: "", saleViewAmt: "", saleViewPayMethod: "", saleViewPayAcc: "", saleViewCrdNo: "", saleViewCrdName: "",
    saleViewCrdTransNo: "", saleViewCrdType: "", saleViewMonth: "", saleViewYear: "", saleViewSecCode: "", saleViewChequeNo: "",
    saleViewBankAccNo: "", saleViewTrans: "", saleViewPayNote: "",
});
//Payment Method
const [hiddenInputs,setHiddenInputs]=useState(false);

return (
    <Box>
        <form action=''>
            <Box >
                <Grid display="flex">
                    <Typography sx={userStyle.HeaderText}>Sale</Typography>&ensp;
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
                                        value={saleView.saleViewLoc}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewLoc: e.target.value }) }}
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
                                    value={saleView.saleViewSelect}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewSelect: e.target.value }) }}
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
                                    // value={saleView.saleViewb}
                                    // onChange={(e) => { setSaleView({ ...saleView, saleViewbrand: e.target.value }) }}
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
                                                        value={saleView.saleViewPayTerm}
                                                        onChange={(e) => { setSaleView({ ...saleView, saleViewPayTerm: e.target.value }) }}
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
                                    value={saleView.saleViewPaySelect}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewPaySelect: e.target.value }) }}
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
                                                    value={saleView.saleViewStatus}
                                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewStatus: e.target.value }) }}
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
                                                    value={saleView.saleViewInvoiceSh}
                                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewInvoiceSh: e.target.value }) }}
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
                                                            value={saleView.saleViewInvoiceNo}
                                                            onChange={(e) => { setSaleView({ ...saleView, SaleViewInvoiceNo: e.target.value }) }}
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
                                    value={saleView.saleViewTable}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewTable: e.target.value }) }}
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
                                    value={saleView.saleViewStaff}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewStaff: e.target.value }) }}
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
                                    value={saleView.saleViewbrand}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewbrand: e.target.value }) }}
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
                                    value={saleView.saleViewDisType}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewDisType: e.target.value }) }}
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
                                    value={saleView.saleViewDisAmt}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewDisAmt: e.target.value }) }}
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
                                    value={saleView.saleViewOrdTax}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewOrdTax: e.target.value }) }}
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
                                value={saleView.saleViewSell}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewSell: e.target.value }) }}
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
                                value={saleView.saleViewShipDet}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewShipDet: e.target.value }) }} />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Address</InputLabel>
                        <FormControl size="small" fullWidth >
                            <TextareaAutosize aria-label="minimum height" placeholder='Shipping Address' minRows={3} style={{ border: '1px solid #b97df0' }}
                                value={saleView.saleViewShipAdd}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewShipAdd: e.target.value }) }} />
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: '64px !important' }}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={saleView.saleViewShipChrg}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewShipChrg: e.target.value }) }}
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
                                value={saleView.saleViewShipStatus}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewShipStatus: e.target.value }) }}
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
                                value={saleView.saleViewDeliveredTo}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewDeliveredTo: e.target.value }) }}
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
                                    value={saleView.saleViewAmt}
                                    onChange={(e) => { setSaleView({ ...saleView, SaleViewAmt: e.target.value }) }}
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
                                    value={saleView.saleViewPayMethod}
                                    onChange={(e) => { setSaleView({ ...saleView, saleViewPayMethod: e.target.value }) }}
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
                    {(saleView.saleViewPayMethod ==='Cash' || saleView.saleViewPayMethod ==='Other' || saleView.saleViewPayMethod ==='Advance') &&
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
                                            value={saleView.saleViewPayAcc}
                                            onChange={(e) => { setSaleView({ ...saleView, SaleViewPayAcc: e.target.value }) }}
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
                    {saleView.saleViewPayMethod ==='Card' &&
                    (
                        <>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Card Number</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewCrdNo}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewCrdNo: e.target.value }) }}
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
                                        value={saleView.saleViewCrdName}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewCrdName: e.target.value }) }}
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
                                        value={saleView.saleViewCrdTransNo}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewCrdTransNo: e.target.value }) }}
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
                                        value={saleView.saleViewCrdType}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewCrdType: e.target.value }) }}
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
                                        value={saleView.saleViewMonth}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewMonth: e.target.value }) }}
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
                                        value={saleView.saleViewYear}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewYear: e.target.value }) }}
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
                                        value={saleView.saleViewSecCode}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewSecCode: e.target.value }) }}
                                        label="Security Code"
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {/* ****** Cheque Section ****** */}
                    {saleView.saleViewPayMethod ==='Cheque' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Cheque No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewChequeNo}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewChequeNo: e.target.value }) }}
                                        label="Cheque No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {/* ****** Bank Section ****** */}
                    {saleView.saleViewPayMethod ==='Bank Transfer' &&
                    (
                        <>
                    <Grid item md={12} sm={12} xs={12}>
                        <FormControl size="small" fullWidth >
                            <InputLabel htmlFor="component-outlined" >Bank Account No.</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={saleView.saleViewBankAccNo}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewBankAccNo: e.target.value }) }}
                                label="Bank Account No."
                                type='text'
                            />
                        </FormControl>
                    </Grid>
                    </>
                    )
}

                    {/* ****** Transaction Section ****** */}
                    {saleView.saleViewPayMethod ==='Custom Payment 1' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleView.saleViewPayMethod ==='Custom Payment 2' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                     {saleView.saleViewPayMethod ==='Custom Payment 3' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleView.saleViewPayMethod ==='Custom Payment 4' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleView.saleViewPayMethod ==='Custom Payment 5' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleView.saleViewPayMethod ==='Custom Payment 6' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
                                        label="Transaction No."
                                        type='text'
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                    }

                    {saleView.saleViewPayMethod ==='Custom Payment 7' &&
                    (
                        <>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={saleView.saleViewTrans}
                                        onChange={(e) => { setSaleView({ ...saleView, SaleViewTrans: e.target.value }) }}
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
                                value={saleView.saleViewPayNote}
                                onChange={(e) => { setSaleView({ ...saleView, SaleViewPayNote: e.target.value }) }} />
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

const Saleview = () => {
  return (
    <>
    <Box sx={{display:'flex', }} >
      <Sidebar />
      <Box sx={{width:'100%',overflowX:'hidden'}}>
          <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Saleviewlist /><br /><br />
              <Footer />
          </Box>
      </Box>
  </Box>
  </>
  )
}

export default Saleview;