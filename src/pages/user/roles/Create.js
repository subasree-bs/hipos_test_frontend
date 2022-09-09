import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput,Typography, FormGroup, FormControlLabel, Checkbox, Radio, Divider, Button, Tooltip, IconButton
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';

function Rolecreatelist() {

    // ****** Text Field ****** //

    const [roleaddform, setRoleaddform] = useState({
        rolename: "",
    });

    return (
        <Box>
            <form action=''>
                <Box>
                    <Grid display="flex">
                        <Typography sx={userStyle.HeaderText}>Add Role</Typography>
                    </Grid>
                </Box>
                <Box sx={userStyle.container}>
                    <Grid container spacing={2} sx={{
                        padding: '40px 20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}>
                        <Grid item md={5}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Role Name *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={roleaddform.rolename}
                                    onChange={(e) => { setRoleaddform({ ...roleaddform, rolename: e.target.value }) }}
                                    label="Role Name *"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={7}></Grid>
                        <Grid item md={4}>
                            <Typography variant="body1" >User type</Typography>
                        </Grid>
                        <Grid item md={8}>
                            <FormGroup>
                                <span> <FormControlLabel control={<Checkbox />} label="Service staff" />
                                    <Tooltip title="Person who provides the designated service to customers Example: Waiting Staff in restaurants, Hairdressers in salon">
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </span>
                            </FormGroup>
                        </Grid>
                        <Grid item md={12}>
                            <InputLabel sx={{ fontWeight: '600' }}>Permissions</InputLabel>
                        </Grid>

                        <Grid item md={2}>
                            <Typography variant="body1" >User</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View user" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add user" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit user" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete user" />
                                    </FormGroup>

                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Roles</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View role" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add role" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit role" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete role" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Supplier</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View all supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="view own supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete Supplier" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Customer<Tooltip title="To view all customers with no sell from a specific time <b>View all customer permission is required otherwise it will filter with only cusromers created by the logged in user">
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip></Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View all customer" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="view own customer" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View customers with no sell from one month only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View customers with no sell from three months only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View customers with no sell from six months only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View customers with no sell from one year only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add customer" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit customer" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete customer" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Product</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="view Product" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add Product" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit Product" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete Product" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add Opening Stock" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox />} label="View Purchase price" />
                                            <Tooltip title="Permission to view purchase price in product details">
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            </Tooltip>
                                        </span>
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Purchase & Stock Adjustment</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View all Purchase & Stock Adjustment" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View own Purchase & Stock Adjustment" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add purchase & Stock Adjustment" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit purchase & Stock Adjustment" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete purchase & Stock Adjustment" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox />} label="Add/Edit/Delete Payments" />
                                            <Tooltip title="Permission to Add/Edit/Delete Payments in List Purchases.">
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            </Tooltip>
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Update Status" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >POS</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View POS sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add POS sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit POS sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete POS sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label=" Edit product price from POS screen" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit product discount from POS screen" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Print Invoice" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Sell <Tooltip title="To view sells on the basis of payment status <b> View all sell permission is required otherwise it will filter with only sells created by the logged in user">
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip></Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="View all sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="view own sell only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View paid sells only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View due sells only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View partially paid sells only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View overdue sells only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add Sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Update Sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete Sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Commission agent can view their own sell" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox />} label=" Add/Edit/Delete Payments " /><Tooltip title="Permission to Add/Edit/Delete Payments in List Sells / List POS screen.">
                                            <IconButton>
                                                <FcInfo />
                                            </IconButton>
                                        </Tooltip></span>
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit product price from sales screen" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit product discount from Sale screen" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add/Edit/Delete Discount" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access types of service" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access all sell retrun" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access own sell retrun" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add edit invoice number" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Draft</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="View all drafts" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="view own drafts" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit draft" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete draft" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Quotation</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="View all quotations" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="view own supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit supplier" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete Supplier" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Shipments</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="Access all shipments" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="female" control={<Radio />} label="Access own shipments" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access pending shipments only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Commission agent can access their own shipments" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Cash Register</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View cash register" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Close cash register" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Brand</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View brand" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add brand" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit brand" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete brand" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Tax rate</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View tax rate" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add tax rate" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit tax rate" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete tax rate" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Unit</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View unit" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add unit" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit unit" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete unit" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Category</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View category" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add category" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit category" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete category" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Report</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View purchase & sell report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View Tax report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View Supplier & Customer report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View expense report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View profit/loss report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label=" View stock report, stock adjustment report & stock expiry report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View trending product report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View register report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View sales representative report" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="View product stock value" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Settings</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access business settings" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access barcode settings" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access invoice settings" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Access printers" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Expense</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="Access all expenses" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="View own expense only" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Add Expense" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Edit Expense" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Delete Expense" />
                                    </FormGroup>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={4}>
                            <Typography variant="body1" >Home <Tooltip title="If unchecked only Welcome message will be displayed in Home.">
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip></Typography>
                        </Grid>
                        <Grid item md={8}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="View Home data" />
                            </FormGroup><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={4}>
                            <Typography variant="body1" >Account</Typography>
                        </Grid>
                        <Grid item md={8}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Access Accounts" />
                            </FormGroup><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={2}>
                            <Typography variant="body1" >Bookings</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Select all" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={8}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="Add/Edit/View all bookings" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel value="" control={<Radio />} label="Add/Edit/View own bookings" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                </Grid>
                            </Grid><br /><hr /><br />
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item md={4}>
                            <Typography variant="body1" >Access selling price groups</Typography>
                        </Grid>
                        <Grid item md={8}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Default Selling Price" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="body1" >Restaurant</Typography>
                        </Grid>
                        <Grid item md={8}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Access tables" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} >
                            <Button sx={userStyle.buttonadd}>SAVE</Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box >
    );
}

function Rolecreate(){
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Rolecreatelist /><br /><br />
              <Footer />
            </Box>
        </Box>
    </Box>
    );
}

export default Rolecreate;