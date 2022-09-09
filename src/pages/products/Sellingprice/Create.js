import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextareaAutosize } from '@mui/material';
import { userStyle } from '../../PageStyle';

function Sellingpriceadd() {

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [sellingpricemodadd, setSellingpricemodadd] = useState(false);

    const openAdd = () => {
        setSellingpricemodadd(true);
    };
    const closeAdd = () => {
        setSellingpricemodadd(false);
    };

    // Text field
    const [sellingPriceAddForm, setSellingPriceAddForm] = useState({
        sellingPriceAddFormName: "", sellingPriceAddFormDescription: "",
    });


    return (
        <Box>
            <Box>
                <Button sx={userStyle.buttonadd} onClick={openAdd} >Add</Button>
            </Box>
            <form action=''>
                <Dialog
                    onClose={closeAdd}
                    aria-labelledby="customized-dialog-title1"
                    open={sellingpricemodadd}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                    maxWidth="md"
                >
                    <DialogTitle id="customized-dialog-title1" onClose={closeAdd} maxWidth="md">
                        Add Selling Price Group
                    </DialogTitle>
                    <DialogContent dividers >
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={sellingPriceAddForm.sellingPriceAddFormName}
                                        onChange={(e) => { setSellingPriceAddForm({ ...sellingPriceAddForm, sellingPriceAddFormName: e.target.value }) }}
                                        label="Category name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                {/* <InputLabel id="demo-select-small" sx={{ m: 1 }}>Description</InputLabel> */}
                                <FormControl size="small" fullWidth>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        placeholder="Address"
                                        style={{ border: '1px solid #b97df0' }}
                                        value={sellingPriceAddForm.sellingPriceAddFormDescription}
                                        onChange={(e) => { setSellingPriceAddForm({ ...sellingPriceAddForm, sellingPriceAddFormDescription: e.target.value }) }}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={closeAdd} variant='contained' color="error">CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}

export default Sellingpriceadd;