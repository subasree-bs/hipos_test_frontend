import React, { useState } from 'react';
import {
    Button, Grid, InputLabel, FormControl, Box, OutlinedInput, Radio, FormControlLabel, RadioGroup, Tooltip, InputAdornment,
    MenuItem, Select, Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import BusinessCenterIconOutlined from '@mui/icons-material/BusinessCenterOutlined';
import EmailIconOutlined from '@mui/icons-material/EmailOutlined';
import MobileScreenShareIconOutlined from '@mui/icons-material/MobileScreenShareOutlined';
import MobileFriendlyIconOutlined from '@mui/icons-material/MobileFriendlyOutlined';
import PhoneIconOutlined from '@mui/icons-material/PhoneOutlined';
import ArrowDropDownIconOutlined from '@mui/icons-material/ArrowDropDownOutlined';
import LocationOnIconOutlined from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { FcInfo } from "react-icons/fc";
import { FaInfo } from 'react-icons/fa';
import { userStyle } from '../../PageStyle';

function Salecusmod() {

    //*** individual or business ****//
    const [shown, setShown] = useState(true);

    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //*** supplier customergroup hide ****//
    const [customHide, setCustomHide] = useState(true);

    //**** both supplier & customer *****/
    const [bothShow, setBothShow] = useState(true);

    // Add Modal
    const [customerMod, setCustomerMod] = useState(false);
    const customerModOpen = () => { setCustomerMod(true); };
    const customerModClose = () => { setCustomerMod(false); };

    //  Add Text Field
    const [saleCusMod, setSaleCusMod] = useState({
        saleCusModContactType: "", saleCusModContactId: "", saleCusModBusinessName: "", saleCusModCusGroup: "", saleCusModPrefix: "", saleCusModFistN: "", saleCusModMiddleN: "", saleCusModLastN: "", saleCusModMobile: "",
        saleCusModAlternateMob: "", saleCusModLandline: "", saleCusModEmail: "", saleCusModDate: "", saleCusModTaxNo: "", saleCusModOpeningBal: "", saleCusModPayTerm: "", saleCusModPaySelect: "", saleCusModAddressL1: "",
        saleCusModAddressL2: "", saleCusModCountry: "", saleCusModState: "", saleCusModCity: "", saleCusModZipCode: "", saleCusModCustom1: "", saleCusModCustom2: "", saleCusModCustom3: "", saleCusModCreditLimit: "",
        saleCusModCustom4: "", saleCusModCustom5: "", saleCusModCustom6: "", saleCusModCustom7: "", saleCusModCustom8: "", saleCusModCustom9: "", saleCusModCustom10: "", saleCusModShipping: "",
    });

    //*** More Information ***// 
    const [hidden, setHidden] = useState(true);

    return (
        <Box>
            <AddCircleOutlineOutlinedIcon onClick={customerModOpen}/>
            <Dialog PaperProps={{ style: { borderRadius: "10px" } }}
                onClose={customerModClose}
                open={customerMod}
                keepMounted
                maxWidth='md'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={customerModClose}> Add contact </DialogTitle>
                <DialogContent dividers>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' },
                            '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        sx={{ paddingLeft: '30px' }} >
                                        <FormControlLabel value="individual"
                                            onClick={() => { setShown(true); setShownDate(true) }} control={<Radio />}
                                            label="Individual"
                                        />
                                        <FormControlLabel value="business"
                                            onClick={() => { setShown(false); setShownDate(false) }} control={<Radio />}
                                            label="Business"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><ContactPageOutlinedIcon /></Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Contact Id"
                                            value={saleCusMod.saleCusModContactId}
                                            onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModContactId: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                       
                            {customHide ?
                                <>
                                    <Grid item xs={12} sm={6} md={4} lg={4} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Customer Groups</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Customer Groups"
                                                    value={saleCusMod.saleCusModCusGroup}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCusGroup: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </>
                                : null}
                       
                            {!shown ?
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={4} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={saleCusMod.saleCusModBusinessName}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModBusinessName: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>
                                </>
                                :
                                <>
                                    {/* ****** 3rd Grid Start-Individual ****** */}
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Prefix"
                                                    value={saleCusMod.saleCusModPrefix}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModPrefix: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="First Name"
                                                    value={saleCusMod.saleCusModFistN}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModFistN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Middle Name"
                                                    value={saleCusMod.saleCusModMiddleN}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModMiddleN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Last Name"
                                                    value={saleCusMod.saleCusModLastN}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModLastN: event.target.value }) }}
                                                    type="text" />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </>
                            }
                           
                            {/* ****** 4th Grid Start ****** */}
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <MobileScreenShareIconOutlined /></Grid>     
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Mobile *"
                                            value={saleCusMod.saleCusModMobile}
                                            onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModMobile: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}>  <MobileFriendlyIconOutlined /> </Grid>                                
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Alternate Mobile"
                                            value={saleCusMod.saleCusModAlternateMob}
                                            onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModAlternateMob: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <PhoneIconOutlined /></Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Landline No"
                                            value={saleCusMod.saleCusModLandline}
                                            onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><EmailIconOutlined /></Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Email"
                                            value={saleCusMod.saleCusModEmail}
                                            onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModEmail: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {shownDate ?
                                <>
                                    {/* ****** 5th Grid Start ****** */}
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}>  <BusinessCenterIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Date"
                                                    type="date"
                                                    value={saleCusMod.saleCusModDate}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModDate: event.target.value }) }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>
                                </>
                                : null}
                        </Grid>
                        {/* ****** More Information Button ****** */}
                        <Grid container sx={userStyle.buttonmore}>
                            <Grid >
                                <Button sx={userStyle.buttonadd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIconOutlined /></Button>
                            </Grid>
                        </Grid>
                        {/* ****** More Information Grid Start ****** */}
                        {!hidden ?
                            <Grid>
                                <hr />
                                <Grid container spacing={3} sx={{ paddingTop: "10px !important", paddingBottom: '10px' }}>
                                    <Grid item xs={12} sm={12} md={4} lg={4} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Tax Number</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Tax Number"
                                                    value={saleCusMod.saleCusModTaxNo}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModTaxNo: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} lg={4} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon /> </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Opening Balance"
                                                    value={saleCusMod.saleCusModOpeningBal}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModOpeningBal: event.target.value }) }}
                                                    type="text" />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} lg={4} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={{ width: '210px' }}>
                                                <FormControl variant="outlined" size="small" fullWidth>
                                                    <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        endAdornment={
                                                            <Tooltip title="pay term" placement="top">
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        edge="end"
                                                                        label="Pay Term"
                                                                        value={saleCusMod.saleCusModPayTerm}
                                                                        onChange={(e) => { setSaleCusMod({ ...saleCusMod, saleCusModPayTerm: e.target.value }) }}
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
                                                    value={saleCusMod.saleCusModPaySelect}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModPaySelect: event.target.value }) }}
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
                                    <Grid item xs={12} sm={12} md={4} lg={4} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><MoneyOutlinedIcon /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Credit Limit</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Credit Limit"
                                                    value={saleCusMod.saleCusModCreditLimit}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCreditLimit: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={8} > </Grid>
                                </Grid>
                                <hr />
                                <Grid container spacing={3} sx={{ paddingTop: "10px !important", paddingBottom: '10px' }}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Address Line 1"
                                                    value={saleCusMod.saleCusModAddressL1}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModAddressL1: event.target.value }) }}
                                                    type="text" />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Address Line 2 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Address Line 2"
                                                    value={saleCusMod.saleCusModAddressL2}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModAddressL2: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><LocationOnIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">City</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="City"
                                                    value={saleCusMod.saleCusModCity}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCity: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}>
                                            <Grid sx={userStyle.spanIcons}><LocationOnIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">State</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="State"
                                                    value={saleCusMod.saleCusModState}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModState: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}>
                                            <Grid sx={userStyle.spanIcons}><LanguageOutlinedIcon /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Country</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Country"
                                                    value={saleCusMod.saleCusModCountry}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCountry: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><LocationOnIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Zip Code</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Zip Code"
                                                    value={saleCusMod.saleCusModZipCode}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModZipCode: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <hr />
                                <Grid container spacing={3} sx={{ paddingTop: "10px !important", paddingBottom: '10px' }}>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 1 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 1 "
                                                    value={saleCusMod.saleCusModCustom1}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom1: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 2 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 2 "
                                                    value={saleCusMod.saleCusModCustom2}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom2: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 3</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 3"
                                                    value={saleCusMod.saleCusModCustom3}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom3: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 4 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 4"
                                                    value={saleCusMod.saleCusModCustom4}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom4: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 5</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 5"
                                                    value={saleCusMod.saleCusModCustom5}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom5: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 6 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 6"
                                                    value={saleCusMod.saleCusModCustom6}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom6: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 7 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 7"
                                                    value={saleCusMod.saleCusModCustom7}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom7: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 8 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 8"
                                                    value={saleCusMod.saleCusModCustom8}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom8: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 9 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 9 "
                                                    value={saleCusMod.saleCusModCustom9}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom9: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Custom 10 </InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Custom 10"
                                                    value={saleCusMod.saleCusModCustom10}
                                                    onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModCustom10: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}  ></Grid>
                                </Grid>
                                <hr />
                                <Grid container spacing={2} sx={{ paddingTop: "10px !important", paddingBottom: '10px' }}>
                                    <Grid item md={2}  ></Grid>
                                    <Grid item md={8}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Shipping Address "
                                                value={saleCusMod.saleCusModShipping}
                                                onChange={(event) => { setSaleCusMod({ ...saleCusMod, saleCusModShipping: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={2}></Grid>
                                </Grid>
                            </Grid>
                            : null}
                        {/* ****** More Information Grid End ****** */}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="success" autoFocus>SAVE</Button>
                    <Button variant="contained" color="error" autoFocus onClick={customerModClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Salecusmod;