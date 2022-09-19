import React,{useState} from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { userStyle } from '../../PageStyle';

export default function Contactcreate() {

    const [businessSettingsContact,setBusinessSettingsContact] = useState({creditLimit:""})

    return (
        <Box sx={userStyle.container}>
            <Grid container spacing={3}>
               <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid sx={{ display: 'flex' }}  >
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Default Credit Limit</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Default Credit Limit"
                                value={businessSettingsContact.ContactCreditLimit}
                                onChange={(e) => { setBusinessSettingsContact({ ...businessSettingsContact, creditLimit: e.target.value }) }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}