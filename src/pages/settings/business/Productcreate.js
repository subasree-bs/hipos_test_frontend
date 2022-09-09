import React, { useState } from 'react';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Checkbox, Select, MenuItem, Tooltip, IconButton, 
} from '@mui/material';
import { userStyle } from '../../PageStyle';
import { FcInfo } from "react-icons/fc";
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

export default function Productcreate() {
    //*** Product Key ****/
    const [shownProduct, setShownProduct] = useState(true);
    return (
        <Box sx={userStyle.container}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">SKU prefix</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="sku prefix"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid  >
                            <Checkbox aria-label="Checkbox demo" onClick={() => { setShownProduct(s => !s) }} label="Checkbox demo" />
                        </Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Enable Product Expiry</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="Enable Product Expiry"
                                fullWidth
                            >
                                <MenuItem value={1}>Add item Expiry</MenuItem>
                                <MenuItem value={2}>Add manufacturing date and expiry period</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid>
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                {!shownProduct ?
                    <>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Grid sx={{ display: 'flex' }}  >

                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">on Product Expiry</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="on Product Expiry"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>keep selling</MenuItem>
                                        <MenuItem value={2}>stop selling n day</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={userStyle.spanText} >
                                    <Box sx={{ display: 'flex' }}>
                                        <Grid sx={userStyle.spanIcons} >
                                            0
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid>
                                    <IconButton>
                                        <FcInfo />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                    :
                    <Grid item xs={12} sm={6} md={4} lg={4}>  </Grid>
                }
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Brands
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Categories
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Sub-Categories
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Price & Tax info
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            <BalanceOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Default Unit</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="Default Unit"
                                fullWidth
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={1}>please select</MenuItem>
                                <MenuItem value={2}>Pieces (Pc(s))</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Sub Units
                    <span>
                        <Tooltip title="Default Profit Percent" arrow>
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Racks
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Row
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Position
                    <span>
                        <Tooltip title="Default Profit Percent" arrow>
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Waranty
                </Grid>
            </Grid>
        </Box>
    );
}