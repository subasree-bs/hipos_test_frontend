import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableContainer,TableHead,Paper,Grid, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import {FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import ExpenseChart from './Chart';
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import Daterangepicker from '../../../components/Daterangepicker';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#ExpenseReport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Expenselisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
      <>
        <Box>
            <Typography sx={userStyle.HeaderText}>Expense Report</Typography>
            {/* FILTER CONTAINER start   */}
                 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                        <AccordionDetails >
                            <Box sx={userStyle.formBorder}>
                                <br /> 
                                <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12} md={6} lg={3}>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                            <InputLabel id="demo-select-small">Business Location</InputLabel>
                                                <Select labelId="demo-select-small" id="demo-select-small" fullWidth label='Business Location'
                                                    // value={ProfitLoss.ProfitAddLocation}
                                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                                >
                                                <MenuItem value={1}>All locations</MenuItem>
                                                <MenuItem value={2}>xxx</MenuItem>
                                                </Select>   
                                        </FormControl>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                        <InputLabel id="demo-select-small">Category</InputLabel>
                                            <Select labelId="demo-select-small" id="demo-select-small" label='Category' fullWidth
                                                    // value={ProfitLoss.ProfitAddLocation}
                                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                                >
                                                <MenuItem value={1}>All</MenuItem>
                                                </Select>   
                                        </FormControl>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3}>
                                <FormControl size="small" fullWidth>
                          <Daterangepicker />
                        </FormControl>
                                </Grid>
                            </Grid>
                            <Box sx={{float:'right',margin:'10px',}}>
                                <Button size='small' variant='contained'sx={userStyle.buttonadd}>Apply Filters</Button>
                            </Box>
                        </Box> 
                   </AccordionDetails> 
                </Accordion>
        {/* FILTER CONTAINER END   */}
            </Box>
            <br />
        {/* CHART CONTAINER start   */}
            <Box sx={userStyle.container}> 
                <Box sx={{textAlign:'center',justifyContent:'center'}}>
                    <ExpenseChart></ExpenseChart>
                </Box>
            </Box>
        {/* CHART CONTAINER END   */}
            <br />
            <Box sx={userStyle.container}>     
        {/* TABLE START  */}
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ExpenseReport">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="left">Expense Categories</StyledTableCell>
                                <StyledTableCell align="left">Total Expense</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell align="left">xyz</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        </Table>
                    </TableContainer>   
            {/* TABLE END  */}                         
            </Box>
    </>
);
}

const Expenselist = ()=>{
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Expenselisttable /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    );
}

export default Expenselist;