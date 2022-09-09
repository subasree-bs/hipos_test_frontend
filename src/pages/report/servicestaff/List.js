import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,
    Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaFileCsv, FaPrint, FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import Daterangepicker from '../../../components/Daterangepicker';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#detailed').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 $(document).ready(function () {
    setTimeout(function(){
    $('#detailedWtPurchase').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 $(document).ready(function () {
    setTimeout(function(){
    $('#orders').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

 $(document).ready(function () {
    setTimeout(function(){
    $('#lineorders').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


const Servicestafftable = ()=>{
    // TABS
const [value, setValue] = useState(0);

const ProductSellChange = (event, newValue) => {
    setValue(newValue);
};

// accordian
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

    return (
      <>
    <Box>
      <Typography sx={userStyle.HeaderText}>Service Staff Report</Typography> 
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                  <br /> 
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
                      <InputLabel  InputLabel id="demo-select-small">Service staff</InputLabel>
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
                      <FormControl size="small" fullWidth>
                        <Daterangepicker />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <br />
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
        <Box sx={userStyle.container}>     
            <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                  <Tab iconPosition="start" label={<><div>&ensp;Orders</div></>} {...a11yProps(0)}/>
                  <Tab iconPosition="start" label={<><div>&ensp;Line Orders</div></>} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>          
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="orders">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Invoice No.</TableCell>
                            <TableCell align="left">Service staff</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Subtotal</TableCell>
                            <TableCell align="left">Total Discount</TableCell>
                            <TableCell align="left">Total Tax</TableCell>
                            <TableCell align="left">Total amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">XYZ</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">₹21.27</TableCell>
                           </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                            <TableRow> 
                            <TableCell align="left"sx={userStyle.footerStyle} colspan={4}>Total</TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                        
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="lineorders">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">Invoice No.</TableCell>
                                <TableCell align="left">Service staff</TableCell>
                                <TableCell align="left">Product</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Unit Price</TableCell>
                                <TableCell align="left">Discount</TableCell>
                                <TableCell align="left">Tax</TableCell>
                                <TableCell align="left">Net Price</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">xyz</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"> </TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"> </TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                            <TableRow> 
                                <TableCell align="left"sx={userStyle.footerStyle} colspan={4}>Total</TableCell>
                                <TableCell align="left"sx={userStyle.footerStyle}></TableCell>
                                <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                                <TableCell align="left"sx={userStyle.footerStyle}>₹ 0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
        </Box>
  </>
 );
}

const ServiceStafflist = ()=>{
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Servicestafftable /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    );
    
}

export default ServiceStafflist;