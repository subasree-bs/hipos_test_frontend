import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Button,
    Dialog, DialogTitle, DialogContent, DialogActions,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Createbrandmod() {

    // Brand Modal
    const [brandmodal, setBrandmodal] = useState(false);

    const brandModOpen = () => {
        setBrandmodal(true);
    };
    const brandModClose = () => {
        setBrandmodal(false);
    };

    // ****** Brand Modal ****** //
    const [productAddBrandMod, setProductAddBrandMod] = useState({
        prodaddBrdModBrdName: "", prodaddBrdModShortDes: "",
    });


    return (
        <Box>
            <Grid sx={userStyle.spanPlusIcons} onClick={brandModOpen} ><AddCircleOutlineOutlinedIcon /></Grid>
            <Box >
                <Dialog
                    onClose={brandModClose}
                    aria-labelledby="customized-dialog-title"
                    open={brandmodal}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                >
                    <DialogTitle id="customized-dialog-title" onClose={brandModClose}>
                        Add Brand
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Brand Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={productAddBrandMod.prodaddBrdModBrdName}
                                        onChange={(e) => { setProductAddBrandMod({ ...productAddBrandMod, prodaddBrdModBrdName: e.target.value }) }}
                                        label="Brand Name *"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Short Description</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={productAddBrandMod.prodaddBrdModShortDes}
                                        onChange={(e) => { setProductAddBrandMod({ ...productAddBrandMod, prodaddBrdModShortDes: e.target.value }) }}
                                        label="Short Description"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">SAVE</Button>
                        <Button onClick={brandModClose} variant='contained' color="error">CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}

export default Createbrandmod;