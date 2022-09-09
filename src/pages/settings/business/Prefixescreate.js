import React from "react";
import { Box, Grid, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import { userStyle } from "../../PageStyle";

export default function Prefixescreate() {
    return (
        <Box sx={userStyle.container}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Purchase</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="purcahse"
                                type="text"
                                placeholder='PO'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Purchase Return</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="purchase return"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Purchase order</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="purchase order"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Stock Transfer</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="stock transfer"
                                type="text"
                                placeholder='ST'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Stock Adjustment</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="stock adjustment"
                                type="text"
                                placeholder='SA'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Sell Return</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="sell return"
                                type="text"
                                placeholder='CN'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Expenses</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="expenses"
                                type="text"
                                placeholder='EP'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Contacts</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="contacts"
                                type="text"
                                placeholder='CO'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Purchase Payment</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="purchase payment"
                                type="text"
                                placeholder='PP'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Sell Payment</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="sell payment"
                                type="text"
                                placeholder='SP'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Expense Payment</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="expense payment"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Business Location</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Business Location"
                                type="text"
                                placeholder='PP'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">User Name</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="User Name"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Subscription No</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Subscription No"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Draft</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Draft"
                                type="text"
                                placeholder='pos by hilife AI'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Sales Order</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Sales order"
                                type="text"
                                placeholder='pos by hilife AI'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}