import React, { useState } from 'react';
import {
    Button, Grid, InputLabel, FormControl, Box, OutlinedInput, Radio, FormControlLabel, RadioGroup, Tooltip, InputAdornment,
    MenuItem, Select, Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessCenterIconOutlined from '@mui/icons-material/BusinessCenterOutlined';
import EmailIconOutlined from '@mui/icons-material/EmailOutlined';
import MobileScreenShareIconOutlined from '@mui/icons-material/MobileScreenShareOutlined';
import MobileFriendlyIconOutlined from '@mui/icons-material/MobileFriendlyOutlined';
import PhoneIconOutlined from '@mui/icons-material/PhoneOutlined';
import ArrowDropDownIconOutlined from '@mui/icons-material/ArrowDropDownOutlined';
import LocationOnIconOutlined from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { FcInfo } from "react-icons/fc";
import { FaInfo } from 'react-icons/fa';
import { userStyle } from '../../PageStyle';

function Customeredit() {

    //*** individual or business ****//
    const [shown, setShown] = useState(true);

    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //*** supplier customergroup hide ****//
    const [customHide, setCustomHide] = useState(true);

    //**** both supplier & customer *****/
    const [bothShow, setBothShow] = useState(true);

    // Edit Modal
    const [customerMod, setCustomerMod] = useState(false);
    const customerModOpen = () => { setCustomerMod(true); };
    const customerModClose = () => { setCustomerMod(false); };

    //  Add Text Field
    const [editCusModForm, seteditCusModForm] = useState({
        editCusContactType: "", editCusContactId: "", editCusBusinessName: "", editCusCusGroup: "", editCusPrefix: "", editCusFistN: "", editCusMiddleN: "", editCusLastN: "", editCusMobile: "",
        editCusAlternateMob: "", editCusLandline: "", editCusEmail: "", editCusDate: "", editCusTaxNo: "", editCusOpeningBal: "", editCusPayTerm: "", editCusPaySelect: "", editCusAddressL1: "",
        editCusAddressL2: "", editCusCountry: "", editCusState: "", editCusCity: "", editCusZipCode: "", editCusCustom1: "", editCusCustom2: "", editCusCustom3: "", editCusCreditLimit: "",
        editCusCustom4: "", editCusCustom5: "", editCusCustom6: "", editCusCustom7: "", editCusCustom8: "", editCusCustom9: "", editCusCustom10: "", editCusShipping: "",
    });

    //*** More Information ***// 
    const [hidden, setHidden] = useState(true);

    return (
        <Box>
            <MenuItem onClick={customerModOpen} disableRipple><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Edit&ensp;</MenuItem>
            <Dialog PaperProps={{ style: { borderRadius: "10px" } }}
                onClose={customerModClose}
                open={customerMod}
                keepMounted
                maxWidth='md'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={customerModClose}> Edit contact </DialogTitle>
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
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons} >
                                        <PersonOutlineOutlinedIcon />
                                    </Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Contact type*</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="contact type*"
                                            value={editCusModForm.editCusContactType}
                                            onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusContactType: event.target.value }) }}
                                            fullWidth >
                                            <MenuItem value={1} onClick={() => setCustomHide(false)}>supplier</MenuItem>
                                            <MenuItem value={2} onClick={() => setCustomHide(true)}>customer</MenuItem>
                                            <MenuItem value={3} onClick={() => setBothShow(true)}>both supplier&customer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
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
                                            value={editCusModForm.editCusContactId}
                                            onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusContactId: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {!shown ?
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={editCusModForm.editCusBusinessName}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusBusinessName: event.target.value }) }}
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
                                                    value={editCusModForm.editCusPrefix}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusPrefix: event.target.value }) }}
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
                                                    value={editCusModForm.editCusFistN}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusFistN: event.target.value }) }}
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
                                                    value={editCusModForm.editCusMiddleN}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusMiddleN: event.target.value }) }}
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
                                                    value={editCusModForm.editCusLastN}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusLastN: event.target.value }) }}
                                                    type="text" />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </>
                            }
                            {customHide ?
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}><BusinessCenterIconOutlined /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Customer Groups</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Customer Groups"
                                                    value={editCusModForm.editCusCusGroup}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCusGroup: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8} ></Grid>
                                </>
                                : null}
                            {/* ****** 4th Grid Start ****** */}
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}> <MobileScreenShareIconOutlined /></Grid>     
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Mobile *"
                                            value={editCusModForm.editCusMobile}
                                            onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusMobile: event.target.value }) }}
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
                                            value={editCusModForm.editCusAlternateMob}
                                            onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusAlternateMob: event.target.value }) }}
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
                                            value={editCusModForm.editCusLandline}
                                            onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusLandline: event.target.value }) }}
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
                                            value={editCusModForm.editCusEmail}
                                            onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusEmail: event.target.value }) }}
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
                                                    value={editCusModForm.editCusDate}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusDate: event.target.value }) }}
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
                                                    value={editCusModForm.editCusTaxNo}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusTaxNo: event.target.value }) }}
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
                                                    value={editCusModForm.editCusOpeningBal}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusOpeningBal: event.target.value }) }}
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
                                                                        value={editCusModForm.editCusPayTerm}
                                                                        onChange={(e) => { seteditCusModForm({ ...editCusModForm, editCusPayTerm: e.target.value }) }}
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
                                                    value={editCusModForm.editCusPaySelect}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusPaySelect: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCreditLimit}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCreditLimit: event.target.value }) }}
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
                                                    value={editCusModForm.editCusAddressL1}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusAddressL1: event.target.value }) }}
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
                                                    value={editCusModForm.editCusAddressL2}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusAddressL2: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCity}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCity: event.target.value }) }}
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
                                                    value={editCusModForm.editCusState}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusState: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCountry}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCountry: event.target.value }) }}
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
                                                    value={editCusModForm.editCusZipCode}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusZipCode: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom1}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom1: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom2}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom2: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom3}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom3: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom4}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom4: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom5}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom5: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom6}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom6: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom7}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom7: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom8}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom8: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom9}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom9: event.target.value }) }}
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
                                                    value={editCusModForm.editCusCustom10}
                                                    onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusCustom10: event.target.value }) }}
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
                                                value={editCusModForm.editCusShipping}
                                                onChange={(event) => { seteditCusModForm({ ...editCusModForm, editCusShipping: event.target.value }) }}
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

export default Customeredit;