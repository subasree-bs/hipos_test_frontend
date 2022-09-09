import * as React from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput,Checkbox } from '@mui/material';
import { userStyle } from '../../PageStyle';
//icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

export default function Taxcreate() {
    return (
        <Box sx={userStyle.container}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            < InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Tax 1 Name</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Tax 1 Name"
                                type="text"
                                placeholder='GST/VAT/Other'

                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            < InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Tax 1 No</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Tax 1 No"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            < InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Tax 2 Name</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Tax 2 Name"
                                type="text"
                                placeholder='GST/VAT/Other'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons} >
                            < InfoOutlinedIcon />
                        </Grid>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Tax 2 No</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Tax 2 No"
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable inline tax in purchase and sell
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4}></Grid>
                
            </Grid>
        </Box>
    );
}