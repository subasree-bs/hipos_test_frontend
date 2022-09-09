import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import { Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize } from '@mui/material';

function Salescreate() {

// ****** Sales Modal Textfield ****** //
// ****** Add Modal ****** //
const [salesModalAdd, setSalesModalAdd] = useState(false);

const addOpen = () => {
    setSalesModalAdd(true);
};
const addClose = () => {
    setSalesModalAdd(false);
};

const [salesComnAddForm, setSalesComnAddForm] = useState({
    prefixadd: "", firstnamead: "", lastnameadd: "", emailadd: "", contactadd: "", addressadd: "", salescomnperadd: ""
});



    return (
        <>
            <>
                <Button sx={userStyle.buttonadd} onClick={addOpen} >ADD</Button>
            </>

            <form action=''>
                <Dialog
                    onClose={addClose}
                    aria-labelledby="customized-dialog-title1"
                    open={salesModalAdd}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                >
                    <DialogTitle id="customized-dialog-title1" onClose={addClose}>
                        Add sales commission agent
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={2} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={salesComnAddForm.prefixadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, prefixadd: e.target.value }) }}
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
                                        value={salesComnAddForm.firstnamead}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, firstnamead: e.target.value }) }}
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
                                        value={salesComnAddForm.lastnameadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, lastnameadd: e.target.value }) }}
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
                                        value={salesComnAddForm.emailadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, emailadd: e.target.value }) }}
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
                                        value={salesComnAddForm.contactadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, contactadd: e.target.value }) }}
                                        label="Contact Number"
                                        type="text"
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
                                        value={salesComnAddForm.addressadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, addressadd: e.target.value }) }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnAddForm.salescomnperadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, salescomnperadd: e.target.value }) }}
                                        label="Sales Commission Percentage (%)"
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
                        <Button onClick={addClose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </>
    );
}

export default Salescreate;