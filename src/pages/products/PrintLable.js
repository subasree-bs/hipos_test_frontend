import React, { useState } from 'react';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Table, TableBody, TableContainer, TableHead,
    Typography, Checkbox, IconButton, Tooltip, Paper, Button,
} from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../../components/Table';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FcInfo, } from "react-icons/fc";
import { FaInfo } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { userStyle } from '../PageStyle';
import Sidebar from '../../components/header/Sidebar';
import Footer from '../../components/footer/Footer';

function PrintLabellist() {

    // search data
    const [productLabel, setProductLabel] = useState({ searchProduct: "", showprice: "", barcodesetting: "" });

    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Print Labels&ensp;
                <Tooltip title="Add products -> Choose informations to show in Labels -> Select Barcode Setting -> Preview Labels -> Print">
                    <IconButton>
                        <FcInfo />
                    </IconButton>
                </Tooltip>
            </Typography>
            {/* label card 1 start */}
            <Box sx={userStyle.container} style={{ minHeight: '300px' }}>
                <Typography sx={userStyle.importheadtext}>Add products to generate Labels</Typography><br /><br />
                <Grid container style={{ justifyContent: "center", }} sx={userStyle.textInput}>
                    <Grid md={8} sx={12} xs={12}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}>< SearchOutlinedIcon />  </Grid>
                            <FormControl size="small" fullWidth >
                                <InputLabel id="demo-select-small">Enter Products name to print labels</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    type="search"
                                    label="Enter Product name / SKU / Scan bar code"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <TableContainer component={Paper}>
                    <Table aria-label="customized table" id="">
                        <TableHead >
                            <StyledTableRow >
                                <StyledTableCell >Products</StyledTableCell>
                                <StyledTableCell >No. of labels</StyledTableCell>
                                <StyledTableCell >Packing Date</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer><br />
            </Box><br />
            <Box sx={userStyle.container}>
                <Typography sx={userStyle.importheadtext}>Information to show in Labels</Typography><br /><br />
                <Box>
                    <form action=''>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Purchase name
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Product Variation (recommanded)
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />product Price
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIconTax}><FaInfo /></Grid>
                                    <FormControl size="small" fullWidth sx={userStyle.formfield}>
                                        <InputLabel id="demo-select-small">Show Price:</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="Show Price:"
                                            value={productLabel.showprice}
                                            onChange={(event) => { setProductLabel({ ...productLabel, showprice: event.target.value }) }}
                                            fullWidth
                                        >
                                            <MenuItem value={0}>Inc. tac</MenuItem>
                                            <MenuItem value={1}>Exc. tax</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Business name
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Print packing date
                            </Grid>
                        </Grid><br /><hr /><br />
                        <Grid container>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIconTax}><AiOutlineSetting /></Grid>
                                    <FormControl size="small" fullWidth sx={userStyle.formfield}>
                                        <InputLabel id="demo-select-small">Barcode Settings:</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="Barcode Settings:"
                                            value={productLabel.barcodesetting}
                                            onChange={(event) => { setProductLabel({ ...productLabel, barcodesetting: event.target.value }) }}
                                            fullWidth
                                        >
                                            <MenuItem value={0}>barcode -1</MenuItem>
                                            <MenuItem value={1}>barcode -2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid><br />
                        <Box sx={{ float: 'right' }}>
                            <Button size="large" variant="contained" sx={{ padding: '10px 30px', textTransform: 'capitalize' }}>PREVIEW</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

function PrintLabel() {
    return (
        <Box sx={{ display: 'flex' }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <PrintLabellist /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}

export default PrintLabel;