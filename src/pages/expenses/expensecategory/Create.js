import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions,} from '@mui/material';
import { userStyle } from '../../PageStyle';

function Expcategoryadd() {
    // ****** Add Modal ****** //
    const [expcategorymodadd, setExpCategorymodadd] = useState(false);
    const openAdd = () => { setExpCategorymodadd(true); };
    const closeAdd = () => { setExpCategorymodadd(false); };
    // Input
    const [cateAddForm, setCateAddForm] = useState({
        cateAddFormName: "", cateAddFormCode: "",
    });

    return (
        <Box>
            <Box>
                <Button sx={userStyle.buttonadd} onClick={openAdd} >ADD</Button>
            </Box>
            <form action=''>
                <Dialog
                    onClose={closeAdd}
                    aria-labelledby="customized-dialog-title1"
                    open={expcategorymodadd}
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
                    <DialogTitle id="customized-dialog-title1" onClose={closeAdd}> Add Expense Category </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateAddForm.cateAddFormName}
                                        onChange={(e) => { setCateAddForm({ ...cateAddForm, cateAddFormName: e.target.value }) }}
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
                                        value={cateAddForm.cateAddFormCode}
                                        onChange={(e) => { setCateAddForm({ ...cateAddForm, cateAddFormCode: e.target.value }) }}
                                        label="Category Code"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success"> Save </Button>
                        <Button onClick={closeAdd} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}
export default Expcategoryadd;