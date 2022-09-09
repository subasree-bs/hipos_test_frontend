import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Tabs,Grid,InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaFileCsv, FaPrint,FaFilePdf,FaArrowCircleDown,FaArrowCircleUp,FaMinusCircle} from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import "rsuite/dist/rsuite.css";
import  Daterangepicker  from '../../../components/Daterangepicker';
import Inputtax from './Inputtax';
import Outputtax from './Outputtax';
import Expensetax from './Expensetax';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

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

function Taxlisttable() {

// TABS
const [value, setValue] = useState(0);

const ProductSellChange = (event, newValue) => {
    setValue(newValue);
};

// Accordion
const [expanded, setExpanded] = useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

  return (
    <>
     <Box>
        <Typography sx={userStyle.HeaderText}>Tax Report</Typography>   <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
             <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',width:'100%'}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                  <br /> 
                  <Box sx={userStyle.formBorder}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Business Location</InputLabel>
                                  <Select labelId="demo-select-small" id="demo-select-small" label='Business Location'fullWidth  >
                                      <MenuItem value={1}>All locations</MenuItem>
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
              </Box>
          <br /> 
            <Box sx={userStyle.container}> 
                <Typography variant="h6" sx={{color:'#384460'}}>Overall (Input - Output - Expense) &ensp;<FcInfo/></Typography>
                <br /><br />
                <Typography variant="h5">Output Tax - Input Tax - Expense Tax: ₹ 0.00</Typography>
            </Box>
            <br />
            <Box sx={userStyle.container}>     
                <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                    <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                    <Tab iconPosition="start" label={<><div><FaArrowCircleDown/>&ensp;Input Tax</div></>} {...a11yProps(0)}/>
                    <Tab iconPosition="start" label={<><div><FaArrowCircleUp/>&ensp;Output Tax</div></>} {...a11yProps(1)} />
                    <Tab iconPosition="start" label={<><div><FaMinusCircle/>&ensp;Expense Tax</div></>} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                    <TabPanel value={value} index={0}>          
                        <Inputtax />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Outputtax />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Expensetax />
                    </TabPanel>
              </Box>
            <br />
  </>
    
    );
}

function Taxlist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Taxlisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Taxlist;