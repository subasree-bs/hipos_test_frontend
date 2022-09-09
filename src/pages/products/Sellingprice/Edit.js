import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextareaAutosize } from '@mui/material';
import { userStyle } from '../../PageStyle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Sellingpriceedit() {

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [sellingpricemodedit, setSellingpricemodedit] = useState(false);

    const openEdit = () => {
        setSellingpricemodedit(true);
    };
    const closeEdit = () => {
        setSellingpricemodedit(false);
    };

    // Text filed
    const [sellingPriceEditForm, setSellingPriceEditForm] = useState({
        sellingPriceEditFormName: "", sellingPriceEditFormDescription: "",
    });


    return (
        <Box>
            <Box>
                <Button sx={userStyle.buttonedit} onClick={openEdit} ><EditOutlinedIcon style={{fontsize:'large'}} />&ensp;Edit</Button>
            </Box>
            <form action=''>
                <Dialog
                    onClose={closeEdit}
                    aria-labelledby="customized-dialog-title1"
                    open={sellingpricemodedit}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                >
                    <DialogTitle id="customized-dialog-title1" onClose={closeEdit}>
                        Edit Selling Price Group
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={sellingPriceEditForm.sellingPriceEditFormName}
                                        onChange={(e) => { setSellingPriceEditForm({ ...sellingPriceEditForm, sellingPriceEditFormName: e.target.value }) }}
                                        label="Category name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                {/* <InputLabel id="demo-select-small" sx={{ m: 1 }}>Description</InputLabel> */}
                                <FormControl size="small" fullWidth>
                                    <TextareaAutosize
                                        style={{ border: '1px solid #b97df0' }}
                                        aria-label="minimum height"
                                        minRows={3}
                                        placeholder="Description"
                                        value={sellingPriceEditForm.sellingPriceEditFormDescription}
                                        onChange={(e) => { setSellingPriceEditForm({ ...sellingPriceEditForm, sellingPriceEditFormDescription: e.target.value }) }}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={closeEdit} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}

export default Sellingpriceedit;