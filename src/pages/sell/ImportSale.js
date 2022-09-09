import React, { useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, tableCellClasses, TableHead, TableRow, Paper, Button, Grid, Typography } from '@mui/material';
import { userStyle } from '../PageStyle';
import { FaTrash, FaEye, } from 'react-icons/fa';
import Sidebar from '../../components/header/Sidebar';
import Footer from '../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../components/Table';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
function Sellimport() {
   
    return (
        <Box>
            <Box>
                <Box>
                    <Grid display="flex">
                        <Typography sx={userStyle.HeaderText}>Import Sales</Typography>
                    </Grid>
                </Box>
                <Box sx={userStyle.container}>
                    <Typography variant="h6">File To Import:</Typography><br />
                    <Grid container spacing={2}>
                        <Grid item md={8}>
                            <Button variant="contained" component="label" sx={userStyle.uploadBtn}>
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </Grid>
                        <Grid item md={4}>
                            <Button variant="contained" sx={userStyle.buttonadd}>Upload and review</Button>
                        </Grid>
                    </Grid>
                    <br /><br />
                    <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize' }}><FileDownloadOutlinedIcon />&ensp;Download template file</Button>
                </Box><br />
                <Box sx={userStyle.container}>
                    <Typography variant='h6' sx={userStyle.importheadtext}>Instructions</Typography><br /><br />
                    <TableContainer component={Paper} sx={{
                        padding: 1,
                        width: '100%',
                        // height:400,
                        margin: 'auto',
                        overflow: 'auto',
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
                        <Table md={{ maxHeight: '5px', overflow: 'auto' }} aria-label="customized table">
                            <TableBody>
                                <TableRow>
                                    <TableCell >1.</TableCell>
                                    <TableCell align="left">Upload sales data in excel format</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >2.</TableCell>
                                    <TableCell align="left">Choose business location and column by which sell lines will be grouped</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >3.</TableCell>
                                    <TableCell align="left">Choose respective sales fields for each column</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >4.</TableCell>
                                    <TableCell>
                                        <Table>
                                            <TableHead >
                                                <TableRow>
                                                    <StyledTableCell sx={userStyle.tableHead1}>Importable fields</StyledTableCell>
                                                    <StyledTableCell align="left" sx={userStyle.tableHead1}>Instructions</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Invoice No.</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Customer name</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Customer Phone number</StyledTableCell>
                                                    <StyledTableCell align="left">Either customer email id or phone number required  </StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Customer Email</StyledTableCell>
                                                    <StyledTableCell align="left">Either customer email id or phone number required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Sale Date</StyledTableCell>
                                                    <StyledTableCell align="left">Sale date time format should be "Y-m-d H:i:s" (2020-07-15 17:45:32)</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Product Name</StyledTableCell>
                                                    <StyledTableCell align="left">Either product name (for single and combo only) or product sku required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Product SKU</StyledTableCell>
                                                    <StyledTableCell align="left">Either product name (for single and combo only) or product sku required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Quantity</StyledTableCell>
                                                    <StyledTableCell align="left">Required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Product Unit</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Unit Price</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Item Tax</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Item Discount</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Item Description</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Order Total</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Types of service</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 1</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 2</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 3</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 4</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>
                                        </Table>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box><br />
                <Box sx={userStyle.container}>
                    <Typography sx={userStyle.HeaderText}>Imports</Typography><br />
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell >Import batch</StyledTableCell>
                                <StyledTableCell >Import time</StyledTableCell>
                                <StyledTableCell >Created By</StyledTableCell>
                                <StyledTableCell >Invoices</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell >TEST001</StyledTableCell>
                                <StyledTableCell >10:AM</StyledTableCell>
                                <StyledTableCell >Admin</StyledTableCell>
                                <StyledTableCell >7</StyledTableCell>
                                <StyledTableCell >
                                    <Grid>
                                        <Button sx={userStyle.buttonview}><VisibilityOutlinedIcon style={{fontSize:'large'}}/>&ensp;VIEW&ensp;</Button>
                                        <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;DELETE&ensp;</Button>
                                    </Grid>
                                </StyledTableCell>
                            </StyledTableRow>
                            </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box>
    );
}
const ImportSell = () => {
    return(
         <>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Sellimport /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
    );
}
export default ImportSell;