import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableContainer,TableHead,TableRow,Paper, Grid,TableFooter, InputLabel,Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import {FaFileCsv, FaPrint, FaFilePdf, } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

 //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#StockReport').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function Stocklisttable() {

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return (
<>
  <Box>
    <Typography sx={userStyle.HeaderText}>Stock Report</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                <br /> 
                <Box sx={userStyle.formBorder}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Business Location</InputLabel>
                                    <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Category</InputLabel>
                                <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Sub Category</InputLabel>
                                <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>   
                                    <MenuItem value=""> <em>Please Select</em></MenuItem>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                        </Grid>
                        
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Brand</InputLabel>
                                    <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                          </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Unit</InputLabel>
                                <Select labelId="demo-select-small" id="demo-select-small" label='Customer Group Name' fullWidth>
                                    <MenuItem value={1}>All</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                       </Grid>
                  </Grid>
                  <Box sx={{float:'right',margin:'10px',}}>
                        <Button size='small' variant='contained' color='primary' sx={{textTransform:'capitalize'}}>Apply Filters</Button>
                    </Box>
                </Box>
            </AccordionDetails> 
        </Accordion>
    </Box>
        <br />
  
            <Box sx={userStyle.container}>     
                <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography>Closing stock (By purchase price)  </Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography>Closing stock (By sale price)</Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography> Potential profit</Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Typography>Profit Margin % </Typography><br />
                            <Typography variant='h5'>  ₹ 30,078.16  </Typography>
                        </Grid>
                    </Grid>
                </Box>
            <br />
            <Box sx={userStyle.container}>     
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                        <Grid container sx={userStyle.gridcontainer}>    
                                <Grid>   
                                    <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                    <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                    <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                    <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                                </Grid>    
                            </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="StockReport">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell align="left">SKU</StyledTableCell>
                                    <StyledTableCell align="left">Product</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Unit price</StyledTableCell>
                                    <StyledTableCell align="left">Current Stock</StyledTableCell>
                                    <StyledTableCell align="left">Current stock value(By purchase price)</StyledTableCell>
                                    <StyledTableCell align="left">Current stock value(By sale price)</StyledTableCell>
                                    <StyledTableCell align="left">Potential profit</StyledTableCell>
                                    <StyledTableCell align="left">Total unit sold</StyledTableCell>
                                    <StyledTableCell align="left">Total unit Transfered</StyledTableCell>
                                    <StyledTableCell align="left">Total unit Adjusted</StyledTableCell> 
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                            <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                                <StyledTableRow>
                                    <StyledTableCell sx={userStyle.footerStyle} colspan={4}> Total </StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                    <StyledTableCell sx={userStyle.footerStyle} align="left"> ₹ 0.00</StyledTableCell>
                                
                                </StyledTableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
            </Box>

  </>
    
    );
}

function Stocklist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Stocklisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Stocklist;