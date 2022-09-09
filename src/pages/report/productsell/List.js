import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Tabs,TextField,
 Grid,InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaMapMarker,FaBars,FaList,FaSearch,FaUser } from "react-icons/fa";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Productsellbrand from './Productsellbrand';
import Productsellcategory from './Productsellcategory';
import ProductsellDetailedpurchase from './ProductsellDetailedpurchase';
import ProductsellDetailed from './ProductsellDetailed';
import Productsellgrouped from './Productsellgrouped';
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


function ProductSell() {

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
<Typography sx={userStyle.HeaderText}>Product Sell Report</Typography>    
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'none',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
            <AccordionDetails >
                <br /> 
                <Box sx={userStyle.formBorder}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaSearch /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                    <TextField size="small" label='search Product'>
                                    </TextField>
                            </FormControl>
                        </Grid>
                    </Grid>
                <Grid item sm={12} xs={12} md={6} lg={3}>
                  <Grid sx={{ display: 'flex' }}  >
                    <Grid sx={userStyle.spanIcons}><FaUser /></Grid>
                        <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Customer</InputLabel>
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
                <Grid item sm={12} xs={12} md={6} lg={3}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Customer Group Name</InputLabel>
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
                    <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons}><FaMapMarker /></Grid>
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
                    </Grid>
                </Grid>
                  <br />
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">Category</InputLabel>
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
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                     <FormControl size="small" fullWidth>
                        <Daterangepicker />
                     </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <TextField fullWidth id="time" type="time"size='small' defaultValue="07:30" InputLabelProps={{shrink: true, }} inputProps={{step: 300,}}/>
                            <TextField fullWidth id="time" type="time"size='small' defaultValue="07:30" InputLabelProps={{shrink: true, }} inputProps={{step: 300,}}/>
                        </Grid>
                  </Grid>
                </Grid>
                <br />
            </Box>
        </AccordionDetails> 
    </Accordion>
</Box>
    <br />
    <Box sx={userStyle.container}>     
         <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
            <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                <Tab iconPosition="start" label={<><div><FaList/>&ensp;Detailed</div></>} {...a11yProps(0)}/>
                <Tab iconPosition="start" label={<><div><FaList/>&ensp;Detailed (With purchase)</div></>} {...a11yProps(1)} />
                <Tab iconPosition="start" label={<><div><FaBars/>&ensp;Grouped</div></>}  {...a11yProps(2)} />
                <Tab iconPosition="start" label={<><div><FaBars/>&ensp;By Category</div></>} {...a11yProps(3)} />
                <Tab iconPosition="start" label={<><div><FaBars/>&ensp;By Brand</div></>} {...a11yProps(4)} />
            </Tabs>
        </Box>
            <TabPanel value={value} index={0}>          
                <ProductsellDetailed/>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <ProductsellDetailedpurchase/>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Productsellgrouped/>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Productsellcategory/>
            </TabPanel>
            
            <TabPanel value={value} index={4}>
                 <Productsellbrand />
            </TabPanel>
        </Box>
  </>
    
    );
}

const ProductSelllist = ()=>{
    return(
<Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <ProductSell /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    );
}

export default ProductSelllist;