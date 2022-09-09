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

function Quotcusmod() {

    //*** individual or business ****//
    const [shown, setShown] = useState(true);

    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //*** supplier customergroup hide ****//
    const [customHide, setCustomHide] = useState(true);

    //**** both supplier & customer *****/
    const [bothShow, setBothShow] = useState(true);

    // Add Modal
    const [quotMod, setQuotMod] = useState(false);
    const quotModOpen = () => { setQuotMod(true); };
    const quotModClose = () => { setQuotMod(false); };

    //  Add Text Field
    const [quotCusMod, setQuotCusMod] = useState({
        quotCusModContactType: "", quotCusModContactId: "", quotCusModBusinessName: "", quotCusModCusGroup: "", quotCusModPrefix: "", quotCusModFistN: "", quotCusModMiddleN: "", quotCusModLastN: "", quotCusModMobile: "",
        quotCusModAlternateMob: "", quotCusModLandline: "", quotCusModEmail: "", quotCusModDate: "", quotCusModTaxNo: "", quotCusModOpeningBal: "", quotCusModPayTerm: "", quotCusModPaySelect: "", quotCusModAddressL1: "",
        quotCusModAddressL2: "", quotCusModCountry: "", quotCusModState: "", quotCusModCity: "", quotCusModZipCode: "", quotCusModCustom1: "", quotCusModCustom2: "", quotCusModCustom3: "", quotCusModCreditLimit: "",
        quotCusModCustom4: "", quotCusModCustom5: "", quotCusModCustom6: "", quotCusModCustom7: "", quotCusModCustom8: "", quotCusModCustom9: "", quotCusModCustom10: "", quotCusModShipping: "",
    });

    //*** More Information ***// 
    const [hidden, setHidden] = useState(true);

    return (
        <Box>
            <AddCircleOutlineOutlinedIcon onClick={quotModOpen}/>
            <Dialog PaperProps={{ style: { borderRadius: "10px" } }}
                onClose={quotModClose}
                open={quotMod}
                keepMounted
                maxWidth='md'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={quotModClose}> Add contact </DialogTitle>
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
                                            value={quotCusMod.quotCusModContactId}
                                            onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModContactId: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCusGroup}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCusGroup: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModBusinessName}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModBusinessName: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModPrefix}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModPrefix: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModFistN}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModFistN: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModMiddleN}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModMiddleN: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModLastN}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModLastN: event.target.value }) }}
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
                                            value={quotCusMod.quotCusModMobile}
                                            onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModMobile: event.target.value }) }}
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
                                            value={quotCusMod.quotCusModAlternateMob}
                                            onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModAlternateMob: event.target.value }) }}
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
                                            value={quotCusMod.quotCusModLandline}
                                            onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModLandline: event.target.value }) }}
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
                                            value={quotCusMod.quotCusModEmail}
                                            onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModEmail: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModDate}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModDate: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModTaxNo}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModTaxNo: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModOpeningBal}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModOpeningBal: event.target.value }) }}
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
                                                                        value={quotCusMod.quotCusModPayTerm}
                                                                        onChange={(e) => { setQuotCusMod({ ...quotCusMod, quotCusModPayTerm: e.target.value }) }}
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
                                                    value={quotCusMod.quotCusModPaySelect}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModPaySelect: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCreditLimit}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCreditLimit: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModAddressL1}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModAddressL1: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModAddressL2}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModAddressL2: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCity}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCity: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModState}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModState: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCountry}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCountry: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModZipCode}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModZipCode: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom1}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom1: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom2}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom2: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom3}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom3: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom4}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom4: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom5}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom5: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom6}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom6: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom7}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom7: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom8}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom8: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom9}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom9: event.target.value }) }}
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
                                                    value={quotCusMod.quotCusModCustom10}
                                                    onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModCustom10: event.target.value }) }}
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
                                                value={quotCusMod.quotCusModShipping}
                                                onChange={(event) => { setQuotCusMod({ ...quotCusMod, quotCusModShipping: event.target.value }) }}
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
                    <Button variant="contained" color="error" autoFocus onClick={quotModClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Quotcusmod;