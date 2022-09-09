import React from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Checkbox, Select, MenuItem, Tooltip, IconButton, Typography } from '@mui/material';
import { userStyle } from '../../PageStyle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import { FcInfo } from "react-icons/fc";

export default function Salecreate() {
  
    return (
        <Box sx={userStyle.container}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            <PercentOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Default Sale Discount</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Default Sale Discount"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            <InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Default Sale Tax</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                //   value={stockTranAdd.stockTranAddStatus}
                                //   onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddStatus: e.target.value }) }}
                                label="Default Sale Tax"
                                fullWidth
                            >
                                <MenuItem value={1}>None</MenuItem>
                                <MenuItem value={2}>Cashier</MenuItem>
                                <MenuItem value={3}>Admin - Franchiese</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            <InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Sales Commission Agent</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                //   value={stockTranAdd.stockTranAddStatus}
                                //   onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddStatus: e.target.value }) }}
                                label="Sales Commission Agent"
                                fullWidth
                            >
                                <MenuItem value={1}>None</MenuItem>
                                <MenuItem value={2}>Cashier</MenuItem>
                                <MenuItem value={3}>Admin - Franchiese</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            <InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Commission Calculate Type</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                //   value={stockTranAdd.stockTranAddStatus}
                                //   onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddStatus: e.target.value }) }}
                                label="Commission Calculate Type"
                                fullWidth
                            >
                                <MenuItem value={1}>None</MenuItem>
                                <MenuItem value={2}>Cashier</MenuItem>
                                <MenuItem value={3}>Admin - Franchiese</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            <InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Sales item Addition Method</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                //   value={stockTranAdd.stockTranAddStatus}
                                //   onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddStatus: e.target.value }) }}
                                label="Sales item Addition Method"
                                fullWidth
                            >
                                <MenuItem value={1}>None</MenuItem>
                                <MenuItem value={2}>Cashier</MenuItem>
                                <MenuItem value={3}>Admin - Franchiese</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Amount rounding method</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                //   value={stockTranAdd.stockTranAddStatus}
                                //   onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddStatus: e.target.value }) }}
                                label="Amount rounding method"
                                fullWidth
                            >
                                <MenuItem value={1}>None</MenuItem>
                                <MenuItem value={2}>Cashier</MenuItem>
                                <MenuItem value={3}>Admin - Franchiese</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid>
                            <Tooltip  title="Stock transfer will not be editable if status is completed " >
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Sales price is miminum selling price
                    <span>
                        <Tooltip title="Default Profit Percent" arrow>
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Allow Overselling
                    <span>
                        <Tooltip title="Default Profit Percent" arrow>
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Sales Order
                    <span>
                        <Tooltip title="Default Profit Percent" arrow>
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography>Payment Link:
                        <span>
                            <Tooltip title="Default Profit Percent" arrow>
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip>
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Sales Order
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography>Razorpay: (For INR India)
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Key ID</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="key id"
                                // value={editcusModForm.editcusPrefix}
                                // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusPrefix: event.target.value }) }}
                                type="text"
                                placeholder='pos by hilife AI'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Key Secret</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Key secret"
                                // value={editcusModForm.editcusPrefix}
                                // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusPrefix: event.target.value }) }}
                                type="text"
                                placeholder='pos by hilife AI'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}> </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography>Stripe:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Stripe Public Key</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Strip public key"
                                // value={editcusModForm.editcusPrefix}
                                // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusPrefix: event.target.value }) }}
                                type="text"
                                placeholder='pos by hilife AI'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Stripe Secret Key</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="stripe secret key"
                                // value={editcusModForm.editcusPrefix}
                                // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusPrefix: event.target.value }) }}
                                type="text"
                                placeholder='pos by hilife AI'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}> </Grid>

            </Grid>
        </Box>
    );
}