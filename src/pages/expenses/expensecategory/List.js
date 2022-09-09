import React  from 'react';
import { Box, Paper, Button, Grid, Typography, Table, TableBody, TableContainer, TableHead, } from '@mui/material';
import { FaFileExcel, FaPrint,FaFilePdf } from 'react-icons/fa';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import Expcategoryadd from './Create';
import Expcategoryedit from './Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Expcategorylist() {
//  JQUERY
$(document).ready(function () {
    setTimeout(function () {
        $('#example').DataTable({
            language: { search: '', searchPlaceholder: "Search..." },
            lengthMenu: [25, 50, 100, 200, 500, 1000],
        });
    }, 1000);
});

return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Expense Categories <Typography sx={userStyle.SubHeaderText}>Manage your expense categories</Typography></Typography>
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>All your expense categories</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Expcategoryadd />
                    </Grid>
                </Grid>
                <Grid container sx={userStyle.gridcontainer}>
                    <Grid >
                        <Button sx={userStyle.buttongrp}><FaFileExcel />&ensp;Export to CSV</Button>
                        <Button sx={userStyle.buttongrp}><FaFileExcel />&ensp;Export to Excel</Button>
                        <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                        <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                    </Grid>
                </Grid>
                <Box>
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Category Name</StyledTableCell>
                                    <StyledTableCell align="left">Category Code</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">test </StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Expcategoryedit />
                                        <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize' }}><DeleteOutlineOutlinedIcon />&ensp;Delete&ensp;</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}
const Expensecategorylist = ()=>{
    return(
      <>
         <Box sx={{display:'flex',}} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX:'hidden' }}>
                <Box component="main" sx={{ padding: '30px',}}><br /><br />
                    <Expcategorylist /><br /><br />
                    <Footer />
                </Box>
            </Box>
         </Box>
      </>
    );
}
export default Expensecategorylist;