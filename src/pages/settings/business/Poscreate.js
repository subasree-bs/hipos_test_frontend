import * as React from 'react';
import {
    Typography, Grid, Box, FormControl, InputLabel, OutlinedInput, TableHead, Checkbox, Tooltip, IconButton, Select,
    MenuItem, Table, TableContainer, TableBody, Paper
} from '@mui/material';
import { userStyle } from '../../PageStyle';
import { FcInfo } from "react-icons/fc";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';


export default function Poscreate() {
    
    return (

        <Box sx={userStyle.container}>
            <TableContainer component={Paper} sx={{
                padding: 1,
                width: '100%',
                margin: 'auto',
                overflow: 'auto',
                boxShadow: 'none',
                "&::-webkit-scrollbar": {
                    width: 20
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'pink'
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: 'blue'
                }
            }} >
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h3>Add keyboard shortcuts:</h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography>
                            shortcut should be the names of the keys separated by '+',example:ctrl+shift+b,ctrl+h
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant='h6'>Available key names are:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography>
                            shift, ctrl, alt, backspace, tab, enter, return, capslock, esc, escape, space, pageup, pagedown, end, home,
                            left, up, right, down, ins, del, and plus
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Table style={{ minWidth: 200 }} aria-label="customized table">
                            <TableHead>
                               <StyledTableRow>
                                    <StyledTableCell><Typography variant='h5'>Operations</Typography></StyledTableCell>
                                    <StyledTableCell><Typography  variant='h5'>Keyboard Shortcut</Typography></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Express Checkout: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+e</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+e"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Pay & Checkout: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+p</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+p"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Draft: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+d</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+d"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Cancel: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+c</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+c"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Go to product quantity: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">f2</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="f2"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Weighing Scale: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined"></InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Scale"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Table md={{ minWidth: 200, maxHeight: '5px', overflow: 'auto' }} aria-label="customized table">
                            <TableHead>
                               <StyledTableRow>
                                    <StyledTableCell><Typography variant='h5'>Operations</Typography></StyledTableCell>
                                    <StyledTableCell><Typography  variant='h5'>Keyboard Shortcut</Typography></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Edit Discount: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+i</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+i"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Edit Order Tax: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+t</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+t"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Add Payment Row: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+r</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+r"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Finalize Payment: </Typography></StyledTableCell>
                                    <StyledTableCell align="left"> <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">shift+f</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="shift+f"
                                            type="text"
                                        />
                                    </FormControl></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Add new product: </Typography></StyledTableCell>
                                    <StyledTableCell align="left">
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">f4</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="f4"
                                                type="text"
                                            />
                                        </FormControl>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant='h5'>POS settings:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Display Multiple Pay
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Disable Draft
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Disable Express Checkout
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Don't show product suggestion
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Don't show recent transcations
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Disable Discount
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Disable order tax
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Subtotal Editable
                        <span>
                            <Tooltip title="Default Profit Percent" arrow>
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip>
                        </span>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Disable Suspend sale
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable transcation date on POS screen
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable service staff in product line
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />is service staff required
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Disable credit sale buttton
                        <span>
                            <Tooltip title="Default Profit Percent" arrow>
                                <IconButton>
                                    <FcInfo />
                                </IconButton>
                            </Tooltip>
                        </span>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Enable Weighing Scale
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Show invoice scheme
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Show invoice layout dropdown
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />print invoice on suspend
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Checkbox aria-label="Checkbox demo" label="Checkbox demo" defaultChecked />Show pricing on product suggestion tooltip
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}> </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}> </Grid>
                    <hr />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant='h6'>Cash Denominations</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined"></InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label=""
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography>Comma separated values Example: 100,200,500,2000</Typography>
                    </Grid>
                    <hr />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant='h5'>Weighing Scale barcode Setting:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography>Configure barcode as per your weighing scale.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label=""
                                type="text"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Product sku length</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Product sku length"
                                    // value={editcusModForm.editcusState}
                                    // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusState: event.target.value }) }}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                    </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Quantity integer part length</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Quantity integer part length"
                                    // value={editcusModForm.editcusState}
                                    // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusState: event.target.value }) }}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                    </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Quantity fractional part length</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Quantity fractional part length"
                                    // value={editcusModForm.editcusState}
                                    // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusState: event.target.value }) }}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                    </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </TableContainer>
        </Box>
    );
}