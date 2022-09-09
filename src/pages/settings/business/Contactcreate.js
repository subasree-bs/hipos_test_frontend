import React from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { userStyle } from '../../PageStyle';

export default function Contactcreate() {
    return (
        <Box sx={userStyle.container}>
            <Grid container spacing={3}>
               <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Default Credit Limit</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="sku prefix"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}