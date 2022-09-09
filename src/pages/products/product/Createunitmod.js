import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Createunitmod() {

    // Unit Modal
    const [unitmodal, setUnitmodal] = useState(false);

    const unitModOpen = () => {
        setUnitmodal(true);
    };
    const unitModClose = () => {
        setUnitmodal(false);
    };

    // ************* Modal ************* //
    // ****** Unit Modal ****** //

    const [productAddUnitMod, setProductAddUnitMod] = useState({
        productAddunitprodname: "", productAddunitshortname: "", productAddunitallow: ""
    });

    // ****** Brand Modal ****** //

    const [productAddBrandMod, setProductAddBrandMod] = useState({
        prodaddBrdModBrdName: "", prodaddBrdModShortDes: "",
    });

    return (
        <Box>
            <Grid sx={userStyle.spanPlusIcons} onClick={unitModOpen}  ><AddCircleOutlineOutlinedIcon /></Grid>
            <Dialog
                onClose={unitModClose}
                aria-labelledby="customized-dialog-title1"
                open={unitmodal}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid #b97df0',
                    },
                }}
            >
                <DialogTitle id="customized-dialog-title1" onClose={unitModClose}>
                    Add Unit
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={3}>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Product Name *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={productAddUnitMod.productAddunitprodname}
                                    onChange={(e) => { setProductAddUnitMod({ ...productAddUnitMod, productAddunitprodname: e.target.value }) }}
                                    label="Product Name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Short Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={productAddUnitMod.productAddunitshortname}
                                    onChange={(e) => { setProductAddUnitMod({ ...productAddUnitMod, productAddunitshortname: e.target.value }) }}
                                    label="Short Name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Allow decimal *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productAddUnitMod.productAddunitallow}
                                    onChange={(e) => { setProductAddUnitMod({ ...productAddUnitMod, productAddunitallow: e.target.value }) }}
                                    label="Allow decimal"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={2}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus variant='contained' color="success">
                        Save
                    </Button>
                    <Button onClick={unitModClose} variant='contained' color="error">Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Createunitmod;