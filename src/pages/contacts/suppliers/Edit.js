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

function Supplieredit() {

    //*** individual or business ****//
    const [shown, setShown] = useState(true);

    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //*** supplier customergroup hide ****//
    const [customHide, setCustomHide] = useState(true);

    //**** both supplier & customer *****/
    const [bothShow, setBothShow] = useState(true);

    // Add Modal
    const [supplierMod, setSupplierMod] = useState(false);
    const supplierModOpen = () => { setSupplierMod(true); };
    const supplierModClose = () => { setSupplierMod(false); };

    //  Add Text Field
    const [editSupModForm, setEditSupModForm] = useState({
        editSupContactType: "", editSupContactId: "", editSupBusinessName: "", editSupCusGroup: "", editSupPrefix: "", editSupFistN: "", editSupMiddleN: "", editSupLastN: "", editSupMobile: "",
        editSupAlternateMob: "", editSupLandline: "", editSupEmail: "", editSupDate: "", editSupTaxNo: "", editSupOpeningBal: "", editSupPayTerm: "", editSupPaySelect: "", editSupAddressL1: "",
        editSupAddressL2: "", editSupCountry: "", editSupState: "", editSupCity: "", editSupZipCode: "", editSupCustom1: "", editSupCustom2: "", editSupCustom3: "", editSupCreditLimit: "",
        editSupCustom4: "", editSupCustom5: "", editSupCustom6: "", editSupCustom7: "", editSupCustom8: "", editSupCustom9: "", editSupCustom10: "", editSupShipping: "",
    });

    //*** More Information ***// 
    const [hidden, setHidden] = useState(true);

    return (
        <Box>
            <MenuItem onClick={supplierModOpen} disableRipple><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Edit&ensp;</MenuItem>
            <Dialog PaperProps={{ style: { borderRadius: "10px" } }}
                onClose={supplierModClose}
                open={supplierMod}
                keepMounted
                maxWidth='md'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="customized-dialog-title" onClose={supplierModClose}> Edit contact </DialogTitle>
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
                                            value={editSupModForm.editSupContactType}
                                            onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupContactType: event.target.value }) }}
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
                                            value={editSupModForm.editSupContactId}
                                            onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupContactId: event.target.value }) }}
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
                                                    value={editSupModForm.editSupBusinessName}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupBusinessName: event.target.value }) }}
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
                                                    value={editSupModForm.editSupPrefix}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupPrefix: event.target.value }) }}
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
                                                    value={editSupModForm.editSupFistN}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupFistN: event.target.value }) }}
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
                                                    value={editSupModForm.editSupMiddleN}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupMiddleN: event.target.value }) }}
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
                                                    value={editSupModForm.editSupLastN}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupLastN: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCusGroup}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCusGroup: event.target.value }) }}
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
                                            value={editSupModForm.editSupMobile}
                                            onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupMobile: event.target.value }) }}
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
                                            value={editSupModForm.editSupAlternateMob}
                                            onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupAlternateMob: event.target.value }) }}
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
                                            value={editSupModForm.editSupLandline}
                                            onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupLandline: event.target.value }) }}
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
                                            value={editSupModForm.editSupEmail}
                                            onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupEmail: event.target.value }) }}
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
                                                    value={editSupModForm.editSupDate}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupDate: event.target.value }) }}
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
                                                    value={editSupModForm.editSupTaxNo}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupTaxNo: event.target.value }) }}
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
                                                    value={editSupModForm.editSupOpeningBal}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupOpeningBal: event.target.value }) }}
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
                                                                        value={editSupModForm.editSupPayTerm}
                                                                        onChange={(e) => { setEditSupModForm({ ...editSupModForm, editSupPayTerm: e.target.value }) }}
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
                                                    value={editSupModForm.editSupPaySelect}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupPaySelect: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCreditLimit}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCreditLimit: event.target.value }) }}
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
                                                    value={editSupModForm.editSupAddressL1}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupAddressL1: event.target.value }) }}
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
                                                    value={editSupModForm.editSupAddressL2}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupAddressL2: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCity}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCity: event.target.value }) }}
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
                                                    value={editSupModForm.editSupState}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupState: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCountry}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCountry: event.target.value }) }}
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
                                                    value={editSupModForm.editSupZipCode}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupZipCode: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom1}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom1: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom2}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom2: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom3}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom3: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom4}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom4: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom5}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom5: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom6}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom6: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom7}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom7: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom8}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom8: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom9}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom9: event.target.value }) }}
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
                                                    value={editSupModForm.editSupCustom10}
                                                    onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupCustom10: event.target.value }) }}
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
                                                value={editSupModForm.editSupShipping}
                                                onChange={(event) => { setEditSupModForm({ ...editSupModForm, editSupShipping: event.target.value }) }}
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
                    <Button variant="contained" color="error" autoFocus onClick={supplierModClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Supplieredit;