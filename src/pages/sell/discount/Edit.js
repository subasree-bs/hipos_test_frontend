import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Checkbox,
    Select, MenuItem, InputAdornment, FormGroup, FormControlLabel
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { FcInfo } from 'react-icons/fc';

const Discoutedit = () => {

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [discountAddMod, setDiscountAddMod] = useState(false);

    const disAddOpen = () => {
        setDiscountAddMod(true);
    };
    const disAddClose = () => {
        setDiscountAddMod(false);
    };

    const [disAddForm, setDisAddForm] = useState({
        disAddName: "", disAddProducts: "", disAddBrand: "", disAddCategory: "", disAddLocation: "", disAddPriority: "", disAddDiscountType: "",
        disAddDiscountAmt: "", disAddStartsAt: "", disAddEndsAt: "", disAddSellingPriceGrp: ""
    });

    return (
        <Box>
            <Box>
                <Button sx={userStyle.buttonedit} onClick={disAddOpen} ><EditOutlinedIcon style={{ fontSize: 'large' }} />&ensp;Edit&ensp;</Button>
            </Box>

            <form action=''>
                <Dialog
                    onClose={disAddClose}
                    aria-labelledby="customized-dialog-title1"
                    open={discountAddMod}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                >
                    <DialogTitle id="customized-dialog-title1" onClose={disAddClose}>
                        Edit Discount
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.disAddName}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddName: e.target.value }) }}
                                        label="Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Products</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.disAddProducts}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddProducts: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Brand</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disAddForm.disAddBrand}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddBrand: e.target.value }) }}
                                        label="Applicable Tax"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Category</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disAddForm.disAddCategory}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddCategory: e.target.value }) }}
                                        label="Applicable Tax"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Location *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disAddForm.disAddLocation}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddLocation: e.target.value }) }}
                                        label="Location *"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl variant="outlined" size="small" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Priority</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            // <Tooltip classes={{ arrow: classes.arrow,tooltip: classes.tooltip }} arrow title='Discount with higher priority will have higher weightage, however priority will not be considered for exact mathces' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={disAddForm.disAddPriority}
                                                    onChange={(e) => { setDisAddForm({ ...disAddForm, disAddPriority: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                            // </Tooltip>
                                        }
                                        label="Priority"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disAddForm.disAddDiscountType}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddDiscountType: e.target.value }) }}
                                        label="Discount Type *"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.disAddDiscountAmt}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddDiscountAmt: e.target.value }) }}
                                        label="Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Start At</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.disAddStartsAt}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddStartsAt: e.target.value }) }}
                                        label="Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Ends At</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.disAddEndsAt}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddEndsAt: e.target.value }) }}
                                        label="Ends At"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Selling Price Group</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disAddForm.disAddSellingPriceGrp}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, disAddSellingPriceGrp: e.target.value }) }}
                                        label="Selling Price Group"
                                    >
                                        <MenuItem value="">
                                            <em>All</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Default Selling Price</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}></Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label=" Apply in customer groups" />
                                </FormGroup>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label=" Is active" />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">SAVE</Button>
                        <Button onClick={disAddClose} variant='contained' color="error">CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}


export default Discoutedit;