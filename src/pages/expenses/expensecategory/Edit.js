import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions,  } from '@mui/material';
import { userStyle } from '../../PageStyle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Expcategoryedit() {
    // ****** Add Modal ****** //
    const [categorymodedit, setCategorymodedit] = useState(false);
    const openEdit = () => { setCategorymodedit(true); };
    const closeEdit = () => { setCategorymodedit(false); };
    // Input
    const [cateEditForm, setCateEditForm] = useState({ cateEditFormName: "", cateEditFormCode: "", });

    return (
        <Box>
            <Box>
                <Button sx={userStyle.buttonedit} onClick={openEdit} ><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT&ensp;</Button>
            </Box>
            <form action=''>
                <Dialog
                    onClose={closeEdit}
                    aria-labelledby="customized-dialog-title1"
                    open={categorymodedit}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                        '& .MuiDialog-paper': {
                            marginTop: '-400px',
                            transformOrigin: '0 0 0'
                        }
                    }}
                >
                    <DialogTitle id="customized-dialog-title1" onClose={closeEdit}> Edit Expense Category </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateEditForm.cateEditFormName}
                                        onChange={(e) => { setCateEditForm({ ...cateEditForm, cateEditFormName: e.target.value }) }}
                                        label="Category name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category Code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateEditForm.cateEditFormCode}
                                        onChange={(e) => { setCateEditForm({ ...cateEditForm, cateEditFormCode: e.target.value }) }}
                                        label="Category Code"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success"> Save </Button>
                        <Button onClick={closeEdit} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}
export default Expcategoryedit;