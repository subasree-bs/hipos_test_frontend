import React,{useState} from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableContainer,TableHead,Paper,Grid, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import "rsuite/dist/rsuite.css";
import  Daterangepicker  from '../../../components/Daterangepicker';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';


 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#CustomerGroup').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


function Cusgrouplisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
      <>
        <Box>
          <Typography sx={userStyle.HeaderText}>Customer Groups Report</Typography>
          {/* FILTER CONTAINTER START */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                  <AccordionDetails >
                    <br /> 
                    <Box sx={userStyle.formBorder}>
                     <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Customer Group Name</InputLabel>
                                    <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name'fullWidth  >
                                        <MenuItem value={1}>All</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                            </FormControl>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Business Location</InputLabel>
                                    <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name'fullWidth  >
                                        <MenuItem value={1}>All</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>    
                                </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth>
                            <Daterangepicker />
                         </FormControl>
                            </Grid>
                        </Grid>
                    <br />
                </Box>
            </AccordionDetails> 
        </Accordion>
        {/* FILTER CONTAINTER END */}
        </Box>
            <br />
        <Box sx={userStyle.container}>  
        {/* TABLE START    */}
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        {/* Export buttons start*/}
                        <Grid container sx={userStyle.gridcontainer}>    
                                <Grid>   
                                    <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                         {/* Export buttons end*/}
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="CustomerGroup">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell align="left">Customer Group</StyledTableCell>
                                    <StyledTableCell align="left">Total Sale</StyledTableCell>
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
            {/* TABLE START    */}                    
        </Box>
  </>
    
    );
}

function Cusgrouplist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Cusgrouplisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Cusgrouplist;