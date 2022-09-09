
import React from 'react';
import { Box, Grid, Checkbox, Tooltip, IconButton } from '@mui/material';
import { userStyle } from '../../PageStyle';
import { FcInfo } from "react-icons/fc";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
export default function Purchasecreate() {

    return (
        <Box sx={userStyle.formBorder}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable editin product from purchase screen
                    <span>
                        <Tooltip title="Default Profit Percent" >
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Purchase Status
                    <span>
                        <Tooltip title="Default Profit Percent" >
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Lot number
                    <span>
                        <Tooltip title="Default Profit Percent" >
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable purchase order
                    <span>
                        <Tooltip title="Default Profit Percent" >
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
            </Grid>
        </Box>
    );
}