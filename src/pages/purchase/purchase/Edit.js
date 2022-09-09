import * as React from 'react';
import { useState } from 'react';
import { userStyle } from '../../PageStyle';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, InputAdornment, TextareaAutosize, Typography, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody, } from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo} from "react-icons/fa";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Purchasesupplieradd from './Purchasesupplieradd';
import PurchaseSearchMod from './Purchasesearchproductadd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Datetimepicker from '../../../components/Datetimepicker';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';

const Purchaseeditlist = () => {

    // ******** Text field ******** //
    const [purchaseEdit, setPurchaseEdit] = useState({
        purchaseEditSupplier: "", purchaseEditRefNo: "", purchaseEditDate: "", purchaseEditPurchaseStatus: "",
        purchaseEditBusinessLoc: "", purchaseEditPayTerm: "", purchaseEditPaySelect: "", purchaseEditSearch: "",
        purchaseEditDisType: "", purchaseEditDisAmt: "", purchaseEditPurTax: "",
        purchaseEditAddNote: "", purchaseEditShipDet: "", purchaseEditAddShipChrg: "",
        purchaseEditDeliveredTo: "", purchaseEditAmt: "", purchaseEditPayMethod: "", purchaseEditPayAcc: "", purchaseEditCrdNo: "", purchaseEditCrdName: "",
        purchaseEditCrdTransNo: "", purchaseEditCrdType: "", purchaseEditMonth: "", purchaseEditYear: "", purchaseEditSecCode: "", purchaseEditChequeNo: "",
        purchaseEditBankAccNo: "", purchaseEditTrans: "", purchaseEditPayNote: "",
    });

    //*** Add Additional Expense Button ***// 
    const [hidden, setHidden] = useState(true);




    return (
        <Box>
            <form action=''>
                <Typography sx={userStyle.HeaderText}>Edit Purchase</Typography>
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={3} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><PersonOutlineOutlinedIcon style={{fontSize:'large'}} /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Supplier *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseEdit.purchaseEditSupplier}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditSupplier: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Please Select</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={userStyle.spanIcons}>
                                    <Purchasesupplieradd />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Reference No</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title='Leave empty to autogenerate' >
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={purchaseEdit.purchaseEditRefNo}
                                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditRefNo: e.target.value }) }}
                                                    type="text"
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
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
                                <InputLabel id="demo-select-small">Purchase Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseEdit.purchaseEditPurchaseStatus}
                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditPurchaseStatus: e.target.value }) }}
                                    label="Business Location"
                                >
                                    <MenuItem value="">Please Select </MenuItem>
                                    <MenuItem value={1}>Received</MenuItem>
                                    <MenuItem value={2}>Pending</MenuItem>
                                    <MenuItem value={2}>Ordered</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <InputLabel id="demo-select-small">Address</InputLabel>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Purchase Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseEdit.purchaseEditBusinessLoc}
                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditBusinessLoc: e.target.value }) }}
                                    label="Business Location"
                                >
                                    <MenuItem value="">All </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={{ width: '210px' }}>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            endAdornment={
                                                <Tooltip title="Payment to be paid for purchases/sales within the given time period. All upcoming
                                                     or due payments will be displayed in dashboard - Payment Due section" >
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            value={purchaseEdit.purchaseEditPayTerm}
                                                            onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditPayTerm: e.target.value }) }}
                                                        >
                                                            <FcInfo />
                                                        </IconButton>
                                                    </InputAdornment>
                                                </Tooltip>
                                            }
                                            label="Pay Term"
                                        />
                                    </FormControl>
                                </Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Please Select</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="Please Select"
                                        value={purchaseEdit.purchaseEditPaySelect}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditPaySelect: e.target.value }) }}
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>month</MenuItem>
                                        <MenuItem value={2}>Days</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    component="label"
                                    sx={userStyle.uploadBtn}
                                >
                                    Upload Image
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
                    <Grid container style={{ justifyContent: "center", padding: '10px' }} sx={userStyle.textInput} >
                        <Grid md={8} sx={12} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}>
                                    < SearchOutlinedIcon style={{fontSize:'large'}} />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseEdit.purchaseEditSearch}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Grid md={2} sx={12} xs={12} style={{ marginLeft: '30px', marginTop: '5px' }}>
                            <PurchaseSearchMod />
                        </Grid>
                    </Grid>
                    <br />
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                        <Table aria-label="customized table">
                            <TableHead >
                                <StyledTableRow >
                                    <TableCell sx={userStyle.tableHead1}>#</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Product Name</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Purchase Quantity</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Unit Cost (Before Discount)</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Discount Percent</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Unit Cost (Before tax)</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Line Total</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Profit Margin %</TableCell>
                                    <TableCell sx={userStyle.tableHead1}>Unit Selling Price (Inc.tax)</TableCell>
                                    <TableCell sx={userStyle.tableHead1}><DeleteOutlineOutlinedIcon style={{ fontSilze: 'large'}} /></TableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer><br />
                    <Grid container>
                        <Grid item xs={6} sm={6} md={8} lg={8}></Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4}>
                            <Typography variant="subtitle1"><b>Total items:</b> 0.00 </Typography>
                            <Typography variant="subtitle1"><b>Net Total Amount:</b> 0.00 </Typography>
                        </Grid>
                    </Grid>
                </Box><br />
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseEdit.purchaseEditDisType}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, PurchaseEditDisType: e.target.value }) }}
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
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseEdit.purchaseEditDisAmt}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, PurchaseEditDisAmt: e.target.value }) }}
                                        label="Discount Amount *"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid display="block">
                                <Typography variant='subtitle1'><b>Discount:</b> (-) 0.00</Typography>
                                <br />
                                <Typography variant='subtitle1'><b>Order Tax:</b> (+) 0.00</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Purchase Tax *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseEdit.purchaseEditPurTax}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, PurchaseEditPurTax: e.target.value }) }}
                                        label="Order Tax *"
                                        fullWidth
                                    >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value={1}>GST</MenuItem>
                                        <MenuItem value={2}>CGST</MenuItem>
                                        <MenuItem value={3}>TAX</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Additional Notes</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={purchaseEdit.purchaseEditAddNote}
                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, PurchaseEditAddNote: e.target.value }) }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box><br />
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Shipping Detais</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={purchaseEdit.purchaseEditShipDet}
                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, PurchaseEditShipDet: e.target.value }) }}
                                    label="Shipping Detais"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >(+) Additional Shipping charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={purchaseEdit.purchaseEditDisAmt}
                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditDisAmt: e.target.value }) }}
                                    label="(+) Additional Shipping charges"
                                />
                            </FormControl>
                        </Grid>
                        <Grid container sx={userStyle.gridcontainer}>
                            <Grid >
                                <Button sx={userStyle.buttonadd} onClick={() => setHidden(s => !s)}><AddCircleOutlineOutlinedIcon style={{ fontSize: 'large' }} />&ensp;Add additional expenses&ensp;<ArrowDropDownIcon /></Button>
                            </Grid>
                        </Grid>

                        {hidden ? null :
                            (<Grid container >
                                <Grid item md={5} sm={12} xs={12}></Grid>
                                <Grid item md={7} sm={12} xs={12}>
                                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Additional expense name</TableCell>
                                                    <TableCell>Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseEdit.purchaseEditAmt}
                                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>)
                        }
                        <Grid container style={{ justifyContent: "right", }} sx={userStyle.textInput}>
                            <Typography variant='subtitle1'><b>Purchase Total:</b> ₹ 0.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={userStyle.container}>
                    <Typography variant="h6" >Add payment</Typography>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant="body2" ><b>Advance Balance:</b> ₹ 0</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon style={{fontSize:'large'}} /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseEdit.purchaseEditAmt}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditAmt: e.target.value }) }}
                                        label="Amount *"
                                        type='number'
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <FormControl size="small" fullWidth >
                                    <Datetimepicker />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon style={{fontSize:'large'}} /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Payment Method *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseEdit.purchaseEditPayMethod}
                                        onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditPayMethod: e.target.value }) }}
                                        label="Payment Method *"
                                        fullWidth
                                    >
                                        <MenuItem value="">Advance</MenuItem>
                                        <MenuItem value="Cash" >Cash</MenuItem>
                                        <MenuItem value="Card" >Card</MenuItem>
                                        <MenuItem value="Cheque" >Cheque</MenuItem>
                                        <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                                        <MenuItem value="Other" >Other</MenuItem>
                                        <MenuItem value="Custom Payment 1" >Custom Payment 1</MenuItem>
                                        <MenuItem value="Custom Payment 2" >Custom Payment 2</MenuItem>
                                        <MenuItem value="Custom Payment 3">Custom Payment 3</MenuItem>
                                        <MenuItem value="Custom Payment 4">Custom Payment 4</MenuItem>
                                        <MenuItem value="Custom Payment 5" >Custom Payment 5</MenuItem>
                                        <MenuItem value="Custom Payment 6" >Custom Payment 6</MenuItem>
                                        <MenuItem value="Custom Payment 7" >Custom Payment 7</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {purchaseEdit.purchaseEditPayMethod == "Cash" &&
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
                                                    value={purchaseEdit.purchaseEditPayAcc}
                                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditPayAcc: e.target.value }) }}
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
                        {purchaseEdit.purchaseEditPayMethod == "Card" &&
                            (
                                <>
                                    <Grid item md={4} sm={6} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Card Number</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditCrdNo}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditCrdNo: e.target.value }) }}
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
                                                value={purchaseEdit.purchaseEditCrdName}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditCrdName: e.target.value }) }}
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
                                                value={purchaseEdit.purchaseEditCrdTransNo}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditCrdTransNo: e.target.value }) }}
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
                                                value={purchaseEdit.purchaseEditCrdType}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditCrdType: e.target.value }) }}
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
                                                value={purchaseEdit.purchaseEditMonth}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditMonth: e.target.value }) }}
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
                                                value={purchaseEdit.purchaseEditYear}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditYear: e.target.value }) }}
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
                                                value={purchaseEdit.purchaseEditSecCode}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditSecCode: e.target.value }) }}
                                                label="Security Code"
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }

                        {/* ****** Cheque Section ****** */}
                        {purchaseEdit.purchaseEditPayMethod == "Cheque" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Cheque No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditChequeNo}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditChequeNo: e.target.value }) }}
                                                label="Cheque No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }

                        {/* ****** Bank Section ****** */}
                        {purchaseEdit.purchaseEditPayMethod == "Bank Transfer" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Bank Account No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditBankAccNo}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditBankAccNo: e.target.value }) }}
                                                label="Bank Account No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }

                        {/* ****** Transaction Section ****** */}
                        {purchaseEdit.purchaseEditPayMethod == "Custom Payment 1" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
                                                label="Transaction No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }
                        {purchaseEdit.purchaseEditPayMethod == "Custom Payment 2" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
                                                label="Transaction No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        } {purchaseEdit.purchaseEditPayMethod == "Custom Payment 3" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
                                                label="Transaction No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }
                        {purchaseEdit.purchaseEditPayMethod == "Custom Payment 4" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
                                                label="Transaction No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }
                        {purchaseEdit.purchaseEditPayMethod == "Custom Payment 5" &&
                            (

                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
                                                label="Transaction No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }

                        {purchaseEdit.purchaseEditPayMethod == "Custom Payment 6" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
                                                label="Transaction No."
                                                type='text'
                                            />
                                        </FormControl>
                                    </Grid>
                                </>
                            )
                        }
                        {purchaseEdit.purchaseEditPayMethod == "Custom Payment 7" &&
                            (
                                <>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={purchaseEdit.purchaseEditTrans}
                                                onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditTrans: e.target.value }) }}
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
                                    value={purchaseEdit.purchaseEditPayNote}
                                    onChange={(e) => { setPurchaseEdit({ ...purchaseEdit, purchaseEditPayNote: e.target.value }) }}
                                />
                            </FormControl><br /><br />
                            <hr />
                        </Grid>
                        <Grid container style={{ justifyContent: "right", }} sx={userStyle.textInput}>
                            <Grid>
                                <Typography variant='subtitle1'><b>Payment due:</b> ₹ 0.00</Typography>
                            </Grid>
                            <Grid>
                                <br /> <br /><Button sx={userStyle.buttonAdd}>Save</Button><br />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </form >
        </Box >
    );
}

const Purchaseedit = () => {
    return (
        <>
            <Box sx={{ display: 'flex', }} >
                <Sidebar />
                <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                    <Box component="main" sx={{ padding: '30px', }}><br /><br />
                        <Purchaseeditlist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Purchaseedit;