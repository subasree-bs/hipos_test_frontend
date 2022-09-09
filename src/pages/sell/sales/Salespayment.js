import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Paper, Typography, TableHead, TableRow, TableCell, TableBody, Table, TableContainer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Salespayment() {

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [setSaleModPay, setsetSaleModPay] = useState(false);

    const setSaleModPayOpen = () => {
        setsetSaleModPay(true);
    };
    const salepayclose = () => {
        setsetSaleModPay(false);
    };

    return (
        <Box>
            <Box>
                <Button sx={userStyle.buttonpaid} onClick={setSaleModPayOpen} >Paid</Button>
            </Box>

            <form action=''>
                <Dialog
                    onClose={salepayclose}
                    aria-labelledby="customized-dialog-title1"
                    open={setSaleModPay}
                    sx={userStyle.textInput}
                >
                    <DialogTitle id="customized-dialog-title1" onClose={salepayclose}>
                        View Payments ( Invoice No.: 2022-0011 )
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={4} sm={12} xs={12} display="block">
                                <Typography variant="subtitle1" >Customer: <br /><b>Walk-In Customer </b><br /> Walk-In Customer </Typography>

                            </Grid>
                            <Grid item md={4} sm={12} xs={12} display="block">
                                <Typography variant="subtitle1" >Business: <br /><b>pos by hilife AI </b> XYZ<br />Chennai<br />Chennai,Tamilnadu,India<br />Mobile: 9876543245<br />Email: test@gmail.com </Typography>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12} display="block">
                                <Typography variant="subtitle1" ><b>Invoice No.: </b> #2022-0012 <br /> <b>Date : </b> 00/00/2022 <br /> <b>Payment Status: </b> Paid</Typography>
                            </Grid>
                        </Grid><br />
                        <Grid container spacing={1} sx={{ justifyContent: 'right' }}>
                            <Grid >
                                <Button sx={userStyle.buttonadd} ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Send Payment Received Notification </Link></Button>
                            </Grid>
                        </Grid>
                        <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Reference No</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Payment Method</TableCell>
                                        <TableCell>Payment Note</TableCell>
                                        <TableCell>Payment Account</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>test</TableCell>
                                        <TableCell>test</TableCell>
                                        <TableCell>test</TableCell>
                                        <TableCell>test</TableCell>
                                        <TableCell>test</TableCell>
                                        <TableCell>test</TableCell>
                                        <TableCell>
                                            <Button sx={{ backgroundColor: '#5bc0de', borderColor: '#46b8da', color: 'white' }}><VisibilityOutlinedIcon style={{fontSize:'large'}}/></Button>
                                            <Button sx={{ backgroundColor: '#d9534f', borderColor: '#d43f3a', color: 'white' }}><EditOutlinedIcon style={{fontSize:'large'}}/></Button>
                                            <Button sx={{ backgroundColor: '#337ab7', borderColor: '#2e6da4', color: 'white' }}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/></Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={salepayclose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}

export default Salespayment;