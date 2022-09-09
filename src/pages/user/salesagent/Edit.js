import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import { Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function Salesedit() {

    // ****** Edit Modal ****** //
    const [salesModalEdit, setSalesModalEdit] = useState(false);

    const editOpen = () => {
        setSalesModalEdit(true);
    };
    const editClose = () => {
        setSalesModalEdit(false);
    };


    // ****** Text Field ****** //

    const [salesComnEditForm, setSalesComnEditForm] = useState({
        prefixedit: "", firstnameedit: "", lastnameedit: "", emailedit: "", contactedit: "", addressedit: "", salescomnperedit: ""
    });

    return (
        <>
            <>
            <Button sx={userStyle.buttonedit} onClick={editOpen}><EditOutlinedIcon style={{fontSize:'large'}} />&ensp;Edit</Button>
            </>
            <form action=''>
                <Dialog
                    onClose={editClose}
                    aria-labelledby="customized-dialog-title1"
                    open={salesModalEdit}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                >
                    <DialogTitle id="customized-dialog-title1" onClose={editClose}>
                        Edit sales commission agent
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={2} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={salesComnEditForm.prefixedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, prefixedit: e.target.value }) }}
                                        label="Prefix"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={5} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">First Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={salesComnEditForm.firstnameedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, firstnameedit: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={5} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Last Name </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnEditForm.lastnameedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, lastnameedit: e.target.value }) }}
                                        label="Last Name"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Email </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnEditForm.emailedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, emailedit: e.target.value }) }}
                                        label="Email"
                                        type="email"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Contact Number </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnEditForm.contactedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, contactedit: e.target.value }) }}
                                        label="Contact Number"
                                        type="number"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <InputLabel id="demo-select-small">Address </InputLabel>
                                <FormControl size="small" fullWidth sx={{ border: '1px solid #b97fd0 !important', marginTop: '5px !important',}}>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        placeholder="Address"
                                        style={{border:'none'}}
                                        value={salesComnEditForm.addressedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, addressedit: e.target.value }) }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnEditForm.salescomnperedit}
                                        onChange={(e) => { setSalesComnEditForm({ ...salesComnEditForm, salescomnperedit: e.target.value }) }} label="Sales Commission Percentage (%)"
                                        type="number"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={editClose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </>
    );
}

export default Salesedit;