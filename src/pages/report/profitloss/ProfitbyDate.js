import React from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Table,TableBody,TableContainer,Tabs,TableHead,Paper,TableFooter } from '@mui/material';
import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar,FaCubes,FaTags } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle'

const Profitbydate = ()=>{
    return(
        <>
    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
        <Grid container sx={userStyle.gridcontainer}>    
                <Grid>   
                    <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                    <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                    <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                    <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                </Grid>    
            </Grid>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByDate">
                <TableHead>
                    <StyledTableRow>
                    <StyledTableCell align="left">Date</StyledTableCell>
                    <StyledTableCell align="left">Gross Profit</StyledTableCell>
            
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell> Pieces </StyledTableCell>
                        <StyledTableCell align="left"> ₹781.25</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                    <StyledTableRow>
                        <StyledTableCell sx={userStyle.footerStyle}> Total </StyledTableCell>
                        <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹781.25</StyledTableCell>
                    </StyledTableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </>
    );
}

export default Profitbydate;