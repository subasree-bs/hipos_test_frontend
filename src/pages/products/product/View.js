import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, Autocomplete, TextField, FormGroup, FormControlLabel, Checkbox,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
     IconButton, InputAdornment, Tooltip
} from '@mui/material';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { FcInfo } from "react-icons/fc";
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Createunitmod from './Createunitmod';
import Createbrandmod from './Createbrandmod';

function Productviewlist() {

    // Text Editor
    const [editorState, setEditorState] = useState(
        MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
        setEditorState(newState)
    }

    //Text field
    const [productView, setProductView] = useState({
        productViewname: "", productViewsku: "", productViewbarcode: "", productViewunit: "",
        productViewbrand: "", productViewcategory: "", productViewsubcat: "", productViewbusinessloc: "",
        productViewalert: "", productViewapplicable: "", productViewsellingtax: "", productViewproducttype: "",
        productViewexc: "", productViewinc: "", productViewmarg: "", productViewexctax: "", productViewinctax: ""

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
            <form action=''>
                {/* header text */}
                <Typography sx={userStyle.HeaderText}>Products <Typography sx={userStyle.SubHeaderText}>Manage your products</Typography></Typography>
                {/* content start */}
                <Box sx={userStyle.container}>
                    <Grid container spacing={2} sx={{ padding: '40px 20px', }}>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Product Name *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={productView.productViewname}
                                    onChange={(e) => { setProductView({ ...productView, productViewname: e.target.value }) }}
                                    label="Product Name *"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">SKU *</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title='"Unique product id or Stock Keeping Unit Keep it blank to automatically generate sku.You can modify sku prefix in Business settings.' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={productView.productViewsku}
                                                    onChange={(e) => { setProductView({ ...productView, productViewsku: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="SKU *"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth

                            >
                                <InputLabel id="demo-select-small">Barcode type</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productView.productViewbarcode}
                                    onChange={(e) => { setProductView({ ...productView, productViewbarcode: e.target.value }) }}
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
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Unit *</InputLabel>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={productView.productViewunit}
                                        onChange={(e) => { setProductView({ ...productView, productViewunit: e.target.value }) }} label="Unit *"
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>
                                    <Createunitmod />
                                </Grid>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Brand</InputLabel>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={productView.productViewbrand}
                                        onChange={(e) => { setProductView({ ...productView, productViewbrand: e.target.value }) }} label="Brand"
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>
                                    <Createbrandmod />
                                </Grid>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Category</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productView.productViewcategory}
                                    onChange={(e) => { setProductView({ ...productView, productViewcategory: e.target.value }) }} label="Category"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Sub Category</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productView.productViewsubcat}
                                    onChange={(e) => { setProductView({ ...productView, productViewsubcat: e.target.value }) }}
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
                        <Grid item md={3} sm={6} xs={12}>
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
                        <Grid item md={3} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox defaultChecked />} label="Manage Stock" />
                                    <Tooltip title="Enable or disable stock management for a product. Stock Management should be disable mostly for services. Example: Hair-Cutting, Repairing, etc." placement="top">
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </span>
                            </FormGroup>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Alert Quantity</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title="Get alert when product stock reaches or goes below the specified quantity. Products with low stock will be displayed in dashboard - Product Stock Alert section." placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={productView.productViewalert}
                                                    onChange={(e) => { setProductView({ ...productView, productViewalert: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Alert quantity "
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    component="label"
                                    sx={userStyle.uploadBtn}
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB</Typography>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}></Grid>
                        <Grid item md={9} sm={12} xs={12}>
                            <MUIEditor editorState={editorState} onChange={onChange} />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    sx={userStyle.uploadBtn}
                                >
                                    Upload File
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                    Max File size: 5MB <br />
                                    Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                                </Typography>
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Applicable Tax</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productView.productViewapplicable}
                                    onChange={(e) => { setProductView({ ...productView, productViewapplicable: e.target.value }) }}
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
                                    value={productView.productViewsellingtax}
                                    onChange={(e) => { setProductView({ ...productView, productViewsellingtax: e.target.value }) }}
                                    label="Selling Price Tax Type"
                                >
                                    <MenuItem value={1}>
                                        Exclusive
                                    </MenuItem>
                                    <MenuItem value={2}>Inclusive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Product Type *</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title="Single product: Product with no variations.
                                                        Variable product: Product with variations such as size, color etc.
                                                        Combo product: A combination of multiple products, also called bundle product" placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={productView.productViewproducttype}
                                                    onChange={(e) => { setProductView({ ...productView, productViewproducttype: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Product Type *"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <TableContainer component={Paper} fullWidth>
                                <Table aria-label="simple table " sx={{ borderBlock: '1px solid #b97fd0' }} fullWidth>
                                    <TableHead fullWidth>
                                        <TableRow fullWidth>
                                            <TableCell sx={userStyle.prod_tablehd} align="center" colSpan={2} fullWidth>Default Purchase Price</TableCell>
                                            <TableCell sx={userStyle.prod_tablehd} align="center" fullWidth>x Margin (%)
                                                <Tooltip sx={{ zIndex: '1' }} title="Single product: Product with no variations.
                Variable product: Product with variations such as size, color etc.
                Combo product: A combination of multiple products, also called bundle product" placement="top">
                                                    <IconButton>
                                                        <FcInfo />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell sx={userStyle.prod_tablehd} align="center" fullWidth>Default Selling Price</TableCell>
                                            <TableCell sx={userStyle.prod_tablehd} align="center" fullWidth>Product image</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody fullWidth>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} fullWidth>
                                            <TableCell component="th" scope="row" fullWidth>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        value={productView.productViewexc}
                                                        onChange={(e) => { setProductView({ ...productView, productViewexc: e.target.value }) }}
                                                        label="Exc. tax *"
                                                    />
                                                </FormControl>
                                            </TableCell>
                                            <TableCell align="center" fullWidth>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        value={productView.productViewinc}
                                                        onChange={(e) => { setProductView({ ...productView, productViewinc: e.target.value }) }}
                                                        label="Inc. tax *"
                                                    />
                                                </FormControl>
                                            </TableCell>
                                            <TableCell align="center" fullWidth>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined"></InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        value={productView.productViewmarg}
                                                        onChange={(e) => { setProductView({ ...productView, productViewmarg: e.target.value }) }}
                                                        label="Marg"
                                                    />
                                                </FormControl>
                                            </TableCell>
                                            <TableCell align="center" fullWidth>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        value={productView.productViewexctax}
                                                        onChange={(e) => { setProductView({ ...productView, productViewexctax: e.target.value }) }}
                                                        label="Exc. tax *"
                                                    />
                                                </FormControl>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        value={productView.productViewinctax}
                                                        onChange={(e) => { setProductView({ ...productView, productViewinctax: e.target.value }) }}
                                                        label="Inc. tax *"
                                                    />
                                                </FormControl>
                                            </TableCell>
                                            <TableCell align="center" fullWidth>
                                                <Button
                                                    sx={userStyle.uploadBtn}
                                                >
                                                    Upload Image
                                                    <input
                                                        type="file"
                                                        hidden
                                                    />
                                                </Button>
                                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid container sx={userStyle.gridcontainer}>
                            <Grid >
                                <Button sx={userStyle.buttonadd}>Save And Add Another </Button>
                                <Button sx={userStyle.buttonadd}>Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <br /> <br />
        </Box>
    );
}

function Productview() {
    return (

        <Box sx={{ display: 'flex' }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <Productviewlist /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}

export default Productview;