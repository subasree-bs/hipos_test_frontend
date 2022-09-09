import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, InputAdornment,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaExternalLinkAlt, FaUserSecret, FaTable, FaMinusCircle, FaPauseCircle, FaWindowMaximize , FaCalculator ,FaBriefcase, FaRegWindowClose,FaBackward,FaPause,FaCheck,FaCreditCard,FaMoneyCheckAlt,FaMoneyBillAlt,FaClock} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import  Datetimepicker  from '../../../components/Datetimepicker';
import LocationOnIconOutlined from '@mui/icons-material/LocationOnOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Possearchplus from './Possearchproduct';
import Poscusmod from './Poscustomer';
import Poslinkmod from './Poslinkanother';

const Poscreate = ()=>{
   // ******** Text field ******** //
   const [posAdd, setPosAdd] = useState({
    posAddLoc: "", posAddSelect: "", posAddTable: "", posAddAllBrand: "",
    posAddStaff: "",
});



return (
    <Box sx={{ backgroundColor: '#8080805c', color: 'black', height: 'auto', position: 'relative', overflow: 'visible' }}>
        <form action=''>
            <Box sx={{ padding: '10px', }}>
                <Grid container spacing={1}>
                    <Grid item md={4} sm={6} xs={12} >
                        <Grid display="flex">
                            <Typography variant='subtitle1' sx={{ marginRight: '10px' }}>Location:</Typography>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">xxx</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={posAdd.posAddLoc}
                                    onChange={(e) => { setPosAdd({ ...posAdd, posAddLoc: e.target.value }) }}
                                    label="xxx"
                                    fullWidth
                                >
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>&ensp;
                            <Grid><Datetimepicker fullWidth /></Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={7} sm={12} xs={12} >
                        <Box sx={{ float: 'right' }}>
                            <Button sx={userStyle.btnExpress}><FaMinusCircle style={{ fontSize: '16px' }} />&ensp;Add Expense</Button>
                            <Button sx={userStyle.btnPause}><FaPauseCircle style={{ fontSize: '18px' }} /></Button>
                            <Button sx={userStyle.btnMax}><FaWindowMaximize style={{ fontSize: '18px' }} /></Button>
                            <Button sx={userStyle.btnCal}><FaCalculator style={{ fontSize: '18px' }} /></Button>
                            <Button sx={userStyle.btnCal}><FaBriefcase style={{ fontSize: '18px' }} /></Button>
                            <Button sx={userStyle.btnClose}><FaRegWindowClose style={{ fontSize: '18px' }} /></Button>
                            <Button sx={userStyle.btnBack}><FaBackward style={{ fontSize: '18px' }} /></Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ height: '900px', mt: '3', }}>
                <Grid container spacing={2} >
                    <Grid item md={7} sm={12} xs={12} sx={{ backgroundColor: 'white', margin: '20px', padding: '20px' }}>
                        <Grid container spacing={3}>
                            <Grid item md={4} sm={6} xs={12}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><PersonOutlineOutlinedIcon /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Walk-in Customer</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            // value={posAdd.posAddb}
                                            // onChange={(e) => { setPosAdd({ ...posAdd, posAddbrand: e.target.value }) }}
                                            label="Walk-in Customer"
                                            fullWidth
                                        >
                                            <MenuItem value={1}>Walk-in Customer</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid sx={userStyle.spanIcons}><Poscusmod />   </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8} sm={6} xs={12}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>
                                        < SearchOutlinedIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            // value={posAdd.posAddbrand}
                                            // onChange={(e) => { setPosAdd({ ...posAdd, PosAddbrand: e.target.value }) }}
                                            type="search"
                                            label="Enter Product name / SKU / Scan bar code"
                                        />
                                    </FormControl>
                                    <Possearchplus />
                                </Grid>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIconTax}><FaExternalLinkAlt /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Select types of service</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={posAdd.posAddSelect}
                                            onChange={(e) => { setPosAdd({ ...posAdd, posAddSelect: e.target.value }) }}
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
                            <Grid item md={8} sm={6} xs={12} fullWidth>
                                <Grid sx={{display:'flex'}} fullWidth>
                                    <FormGroup ><FormControlLabel control={<Checkbox />} label="Subscribe?" /></FormGroup>
                                    <Grid>
                                          <Poslinkmod />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules" arrow> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
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
                                            value={posAdd.posAddTable}
                                            onChange={(e) => { setPosAdd({ ...posAdd, posAddTable: e.target.value }) }}
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
                                            value={posAdd.posAddStaff}
                                            onChange={(e) => { setPosAdd({ ...posAdd, posAddStaff: e.target.value }) }}
                                            label="Select Service Staff"
                                            fullWidth
                                        >
                                            <MenuItem value={1}>Select Service Staff</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid md={4} sm={6} xs={12}></Grid><br /><br /><br /><br />
                            <Grid md={12} sm={12} xs={12}>
                                <TableContainer component={Paper} sx={userStyle.tablecontainer} style={{  marginLeft: '10px' }}>
                                    <Table aria-label="customized table" id="">
                                        <TableHead >
                                            <TableRow >
                                                <TableCell sx={userStyle.tableHead}> Product
                                                    {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }} */}
                                                        {/* title="Click product name to edit price, discount & tax. Click Comment Icon to enter serial number / IMEI
                                or addional note. Click Modifier Icon(if enabled) for modifiers."> */}
                                                        <IconButton>
                                                            <FcInfo />
                                                        </IconButton>
                                                    {/* </Tooltip> */}

                                                </TableCell >
                                                <TableCell sx={userStyle.tableHead}>Quantity</TableCell>
                                                <TableCell sx={userStyle.tableHead}>Subtotal</TableCell>
                                                <TableCell sx={userStyle.tableHead}><AiOutlineClose /></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            <TableRow></TableRow>
                                            <TableRow></TableRow>
                                            <TableRow></TableRow>
                                            <TableRow></TableRow><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                            <TableRow >
                                                <TableCell><Typography variant="body2"><b>Items:</b></Typography> 0.00</TableCell>
                                                <TableCell><Typography variant="body2"><b>Total:</b></Typography> 0.00</TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell><Typography variant="body2"><b> Discount
                                                    {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                        title="Set 'Default Sale Discount' for all sales in Business Setting. Click on the edit icon below to add/update discount."> */}
                                                        <IconButton>
                                                            <FcInfo />
                                                        </IconButton>
                                                    {/* </Tooltip> */}
                                                    : (-)</b></Typography><EditOutlinedIcon style={{fontSize:'large'}}/> 0.00</TableCell>
                                                <TableCell><Typography variant="body2"><b>Order Tax(+):</b></Typography>
                                                    {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                        title="Set 'Default Sale Tax' for all sales in Business Setting. Click on the edit icon below to add/update Order Tax."> */}
                                                        <IconButton>
                                                            <FcInfo />
                                                        </IconButton>
                                                    {/* </Tooltip> */}
                                                    <EditOutlinedIcon style={{fontSize:'large'}}/> 0.00</TableCell>
                                                <TableCell><Typography variant="body2"><b>Shipping(+):</b></Typography>
                                                    {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                        title="Set shipping details and shipping charges. Click on the edit icon below to add/update shipping details and charges."> */}
                                                        <IconButton>
                                                            <FcInfo />
                                                        </IconButton>
                                                    {/* </Tooltip> */}
                                                    <EditOutlinedIcon style={{fontSize:'large'}}/> 0.00</TableCell>
                                                <TableCell><Typography variant="body2"><b>Packing Charge(+):</b></Typography><EditOutlinedIcon style={{fontSize:'large'}}/> 0</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Grid container spacing={3} >
                            <Grid item md={5} sm={12} xs={12}>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">All Brands</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={posAdd.posAddAllBrand}
                                        onChange={(e) => { setPosAdd({ ...posAdd, posAddAllBrand: e.target.value }) }}
                                        label="All Brands"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>All Brands</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={7} sm={12} xs={12}></Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={3} sm={3} xs={3}>
                                        <Box sx={userStyle.imgBox}>
                                            <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                            <Typography >xxxx</Typography>
                                            <Typography >xxxx</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} sm={3} xs={3}>
                                        <Box sx={userStyle.imgBox}>
                                            <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                            <Typography >xxxx</Typography>
                                            <Typography >xxxx</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} sm={3} xs={3}>
                                        <Box sx={userStyle.imgBox}>
                                            <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                            <Typography >xxxx</Typography>
                                            <Typography >xxxx</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3} sm={3} xs={3}>
                                        <Box sx={userStyle.imgBox}>
                                            <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                            <Typography >xxxx</Typography>
                                            <Typography >xxxx</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <Box  >
                <Grid container sx={userStyle.btnGrid} >
                    <Grid item md={8} sm={12} xs={12} sx={{ display: 'flex', }}>
                        <Button sx={userStyle.btnBack}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Draft</Button>
                        <Button sx={userStyle.btnPause}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Quotation</Button>
                        <Button sx={userStyle.btnSus}><FaPause />&ensp;Suspend</Button>
                        <Button sx={userStyle.btnCred}><FaCheck />&ensp;Credit Sale</Button>
                        <Button sx={userStyle.btnCard}><FaCreditCard />&ensp;Card</Button>
                        <Button sx={userStyle.btnMulti}><FaMoneyCheckAlt />&ensp;Multiple Pay</Button>
                        <Button sx={userStyle.btnCash}><FaMoneyBillAlt />&ensp;Cash</Button>&ensp;
                        <Typography sx={{ marginTop: '5px' }}><b>Total Payable :</b>&ensp; 0.00 </Typography>
                        <Button sx={userStyle.btnCancel}><FaRegWindowClose />&ensp;Cancel</Button>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Box sx={{ float: 'right' }}>
                            <Button sx={userStyle.btnRec}><FaClock />&ensp;Recent Transactions</Button>
                        </Box>
                    </Grid>

                </Grid>
                <br /><br />
            </Box>
        </form >


    </Box>

);
}


export default Poscreate;