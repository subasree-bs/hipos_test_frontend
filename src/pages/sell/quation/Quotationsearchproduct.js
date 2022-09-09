import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userStyle } from '../../PageStyle';
import { styled } from '@mui/material/styles';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, Autocomplete, TextField, FormGroup, FormControlLabel, Checkbox,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton, InputAdornment, Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { FcInfo } from "react-icons/fc";



function Quotsearchmod() {

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [quotsearchmod, setQuotSearchmod] = useState(false);

    const quotPlusOpen = () => {
        setQuotSearchmod(true);
    };
    const quotPlusClose = () => {
        setQuotSearchmod(false);
    };


    // Text Editor
    const [editorState, setEditorState] = useState(
        MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
        setEditorState(newState)
    }

    //Text field
    const [quotSearch, setQuotSearch] = useState({
        quotSearchname: "", quotSearchsku: "", quotSearchbarcode: "", quotSearchunit: "",
        quotSearchbrand: "", quotSearchcategory: "", quotSearchsubcat: "", quotSearchbusinessloc: "",
        quotSearchalert: "", quotSearchapplicable: "", quotSearchsellingtax: "", quotSearchproducttype: "",
        quotSearchexc: "", quotSearchinc: "", quotSearchmarg: "", quotSearchexctax: "", quotSearchinctax: "",

    });

    // ****** Multi Select ****** //
    const top100Films = [
        { title: 'xxxx' },
        { title: 'yyyy' },
        { title: 'zzzz' },
        { title: 'aaaa' },
        { title: 'ssss' },
        { title: 'xxxx' },
        { title: 'dddd' },
    ];

  

    return (
        <Box>
            <Box>
                <Grid sx={userStyle.spanIcons} ><AddCircleOutlineOutlinedIcon onClick={quotPlusOpen} /></Grid>
            </Box>

            <form action=''>
                <Dialog
                    onClose={quotPlusClose}
                    aria-labelledby="customized-dialog-title1"
                    open={quotsearchmod}
                    maxWidth="lg"
                >
                    <DialogTitle id="customized-dialog-title1" onClose={quotPlusClose}>
                        Add new product
                    </DialogTitle>
                    <DialogContent dividers>
                        <Box sx={userStyle.container}>
                            <Grid container spacing={2} >
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Product Name *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Product Name *"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">SKU *</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            endAdornment={
                                                // <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title='"Unique product id or Stock Keeping Unit Keep it blank to automatically generate sku.You can modify sku prefix in Business settings.' placement="top">
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            value={quotSearch.quotSearchsku}
                                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchsku: e.target.value }) }}
                                                        >
                                                            <FcInfo />
                                                        </IconButton>
                                                    </InputAdornment>
                                                // </Tooltip>
                                            }
                                            label="SKU *"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Barcode type</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchbarcode}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchbarcode: e.target.value }) }}
                                            label="Barcode type"
                                        >
                                            <MenuItem value="">
                                                Code 128 (C128)
                                            </MenuItem>
                                            <MenuItem value={1}>Code 39 (C39)</MenuItem>
                                            <MenuItem value={2}>EAN-13</MenuItem>
                                            <MenuItem value={3}>EAN-8</MenuItem>
                                            <MenuItem value={4}>UPC-A</MenuItem>
                                            <MenuItem value={5}>UPC-E</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Unit *</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchunit}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchunit: e.target.value }) }} label="Unit *"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Brand</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchbrand}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchbrand: e.target.value }) }} label="Brand"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}></Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchcategory}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchcategory: e.target.value }) }} label="Category"
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Sub Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchsubcat}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchsubcat: e.target.value }) }}
                                            label="Sub Category"
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="Manage Stock" />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="Enable or disable stock management for a product. Stock Management should be disable mostly for services. Example: Hair-Cutting, Repairing, etc." placement="top"> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Alert quantity</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Alert quantity"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <Autocomplete
                                            multiple
                                            id="tags-outlined"
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            filterSelectedOptions
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Business Location"
                                                    placeholder="Favorites"
                                                />
                                            )}
                                            size="small" fullWidth
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Weight</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Weight"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={8} sm={12} xs={12}>
                                    <MUIEditor editorState={editorState} onChange={onChange} />
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}></Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Applicable Tax</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchapplicable}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchapplicable: e.target.value }) }}
                                            label="Applicable Tax"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Selling Price Tax Type *</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotSearch.quotSearchsellingtax}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchsellingtax: e.target.value }) }}
                                            label="Selling Price Tax Type"
                                        >
                                            <MenuItem value="">
                                                Exclusive
                                            </MenuItem>
                                            <MenuItem value={1}>Inclusive</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="Enable Product description,  IMEI or Serial Number" />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="Enable or disable adding product description, IMEI or Serial number while selling products in POS screen"> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="Not for selling" />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="If Checked, product will not be displayed in sales screen for selling purposes"> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid item md={8} sm={6} xs={12}></Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 1</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Custom Field 1"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 2</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Custom Field 2"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 3</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Custom Field 3"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 4</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={quotSearch.quotSearchname}
                                            onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchname: e.target.value }) }}
                                            label="Custom Field 4"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12} >
                                    <TableContainer component={Paper} fullWidth>
                                        <Table aria-label="simple table " sx={{ borderBlock: '1px solid #b97fd0' }} fullWidth>
                                            <TableHead fullWidth>
                                                <TableRow fullWidth>
                                                    <TableCell sx={userStyle.tableHd} align="center" colSpan={2} fullWidth>Default Purchase Price</TableCell>
                                                    <TableCell sx={userStyle.tableHd} align="center" fullWidth>x Margin (%)
                                                        {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }} title="Single product: Product with no variations.
                                                    Variable product: Product with variations such as size, color etc.
                                                    Combo product: A combination of multiple products, also called bundle product" placement="top"> */}
                                                            <IconButton>
                                                                <FcInfo />
                                                            </IconButton>
                                                        {/* </Tooltip> */}
                                                    </TableCell>
                                                    <TableCell sx={userStyle.tableHd} align="center" fullWidth>Default Selling Price</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody fullWidth>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} fullWidth>
                                                    <TableCell component="th" scope="row" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={quotSearch.quotSearchexc}
                                                                onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchexc: e.target.value }) }}
                                                                label="Exc. tax *"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={quotSearch.quotSearchinc}
                                                                onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchinc: e.target.value }) }}
                                                                label="Inc. tax *"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined"></InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={quotSearch.quotSearchmarg}
                                                                onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchmarg: e.target.value }) }}
                                                                label="Marg"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={quotSearch.quotSearchexctax}
                                                                onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchexctax: e.target.value }) }}
                                                                label="Exc. tax *"
                                                            />
                                                        </FormControl>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={quotSearch.quotSearchinctax}
                                                                onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchinctax: e.target.value }) }}
                                                                label="Inc. tax *"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>   <br />
                                <Grid item md={12} sm={12} xs={12} >
                                    <Typography variant='h6' sx={{ color: '#7009ab', }}>Add Opening Stock</Typography><br />
                                    <TableContainer component={Paper} fullWidth>
                                        <Table aria-label="simple table " sx={{ borderBlock: '1px solid #b97fd0' }} fullWidth>
                                            <TableHead fullWidth >
                                                <TableRow fullWidth>
                                                    <TableCell sx={userStyle.tableHd} align="center" fullWidth>Location</TableCell>
                                                    <TableCell sx={userStyle.tableHd} align="center" fullWidth>Quantity</TableCell>
                                                    <TableCell sx={userStyle.tableHd} align="center" fullWidth>Unit Cost (Before Tax)</TableCell>
                                                    <TableCell sx={userStyle.tableHd} align="center" fullWidth>Subtotal (Before Tax)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody fullWidth>
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} fullWidth>
                                                    <TableCell component="th" scope="row" fullWidth>xxxx</TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={quotSearch.quotSearchmarg}
                                                                // onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={quotSearch.quotSearchmarg}
                                                                // onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center">0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" fullWidth>yyyy</TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={quotSearch.quotSearchmarg}
                                                                // onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={quotSearch.quotSearchmarg}
                                                                // onChange={(e) => { setQuotSearch({ ...quotSearch, QuotSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center">0</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">Save </Button>
                        <Button onClick={quotPlusClose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}

export default Quotsearchmod;