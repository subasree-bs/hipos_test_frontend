import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Button, Tabs, Tab, Typography } from '@mui/material';
import { userStyle } from '../../PageStyle';
import Businesscreate from './Businesscreate';
import Taxcreate from './Taxcreate';
import Productcreate from './Productcreate';
import Contactcreate from './Contactcreate';
import Salecreate from './Salecreate';
import Purchasecreate from './Purchasecreate';
import Dashboardcreate from './Dashboardcreate';
import Systemcreate from './Systemcreate';
import Prefixescreate from './Prefixescreate';
import Emailcreate from './Emailcreate';
import Modulecreate from './Modulescreate';
import Rewardcreate from './Rewardcreate';
import Poscreate from './Poscreate';
import Labelcreate from './Labelcreate';
import Smscreate from './Smscreate';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div  role="tabpanel"hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other} >
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
 function Businesssettingstable() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={userStyle.container} >
                <Typography variant="h6" >Business Settings</Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={2} lg={2}> </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons} >
                                <SearchOutlinedIcon />
                            </Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Time Zone</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Time zone"
                                    fullWidth
                                >
                                    <MenuItem value="">
                                    </MenuItem>
                                    <MenuItem value={1}>Business name</MenuItem>
                                    <MenuItem value={2}>Start Date</MenuItem>
                                    <MenuItem value={2}>Default profit percent</MenuItem>
                                    <MenuItem value={2}>Currency</MenuItem>
                                    <MenuItem value={2}>Currency Symbol Placement</MenuItem>
                                    <MenuItem value={2}>Time Zone</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}> </Grid>
                </Grid>
            </Box>
            <br />
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', minWidth: '15%', maxWidth: '15%' }}
                >
                    <Tab label="Business" {...a11yProps(0)} />
                    <Tab label="Tax" {...a11yProps(1)} />
                    <Tab label="Product" {...a11yProps(2)} />
                    <Tab label="Contact" {...a11yProps(3)} />
                    <Tab label="Sale" {...a11yProps(4)} />
                    <Tab label="POS" {...a11yProps(5)} />
                    <Tab label="Purchases" {...a11yProps(6)} />
                    <Tab label="Dashboard" {...a11yProps(7)} />
                    <Tab label="System" {...a11yProps(8)} />
                    <Tab label="Prefixes" {...a11yProps(9)} />
                    <Tab label="Email Settings" {...a11yProps(10)} />
                    <Tab label="SMS Settings" {...a11yProps(11)} />
                    <Tab label="Reward Point Settings" {...a11yProps(12)} />
                    <Tab label="Modules" {...a11yProps(13)} />
                    <Tab label="Custom Labels" {...a11yProps(14)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Businesscreate />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Taxcreate />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Productcreate />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Contactcreate />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Salecreate />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Poscreate />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Purchasecreate />
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <Dashboardcreate />
                </TabPanel>
                <TabPanel value={value} index={8} style={{width:'100%'}}>
                    <Systemcreate/>
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <Prefixescreate />
                </TabPanel>
                <TabPanel value={value} index={10}>
                    <Emailcreate />
                </TabPanel>
                <TabPanel value={value} index={11} style={{width:'100%'}}>
                    <Smscreate />
                </TabPanel>
                <TabPanel value={value} index={12}>
                    <Rewardcreate />
                </TabPanel>
                <TabPanel value={value} index={13}>
                    <Modulecreate />
                </TabPanel>
                <TabPanel value={value} index={14}>
                    <Labelcreate />
                </TabPanel>
            </Box>
            <br />
            <Grid container sx={{ justifyContent: 'right !important',bottom:'0', }}>
                <Box  >
                    <Button sx={userStyle.buttonadd}>UPDATE SETTINGS</Button>
                </Box>
            </Grid>
        </>
    );
}

function Businesssettings() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Businesssettingstable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Businesssettings;