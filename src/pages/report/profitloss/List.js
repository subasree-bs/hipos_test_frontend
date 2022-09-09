import React,{ useState} from 'react';
import {Typography,Select,FormControl,MenuItem, Grid, InputLabel, Box, Button,Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,TableFooter } from '@mui/material';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import $ from 'jquery';

//FONTAWESOME
import { FaFileCsv, FaPrint,FaMapMarker,FaFileAlt, FaUser,FaFilePdf,FaCalendar,FaCubes,FaTags } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import ProfitLossTable from './ProfitlossTable';
import CloseStockTable from './ClosestockTable';
import Profitbyproduct from './ProfitbyProducts';
import Profitbycategory from './ProfitbyCategory';
import Profitbybrand from './ProfitbyBrands';
import Profitbylocation from './ProfitbyLocation';
import Profitbyinvoice from './ProfitbyInvoice';
import Profitbydate from './ProfitbyDate';
import Profitbycustomer from './ProfitbyCustomer';
import Profitbyday from './ProfitbyDay';
import { userStyle } from '../../PageStyle'
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
 
  //  JQUERY
 $(document).ready(function () {
    setTimeout(function(){
    $('#ByProduct').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 

const Profitlosstable = ()=>{
// TABS
const [value, setValue] = useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

const [ProfitLoss, setProfitLoss] = useState({
    addsupContactType: "", ProfitAddLocation: "", addsupBusinessName: "", addsupPrefix: "", addsupFistN: "",
});

return(
<Box>
<Grid container spacing={2}>
    <Grid item xs={6} md={6} sm={6}>
        <Typography sx={userStyle.HeaderText}>Profit & Loss Report </Typography>
    </Grid>
    <Grid item xs={3} md={3} sm={12}>                             
        <Grid sx={{ display: 'flex' }}  >
            <Grid sx={{ fontSize: '20px', border: '1px solid #B97DF0', width: '33px', height: '40px', backgroundColor: '#B97DF0',paddingTop:'6px', color: '#fff',textAlign:'center', justfyContent:'center' }} ><FaMapMarker/></Grid>
                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                    <InputLabel id="demo-select-small">All locations</InputLabel>
                        <Select labelId="demo-select-small"
                            sx={{borderRadius:'0 !important'}}
                            id="demo-select-small"
                            label='All locations'
                            value={ProfitLoss.ProfitAddLocation}
                            onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                            fullWidth
                         >
                            <MenuItem value="">
                                <em>Please Select</em>
                            </MenuItem>
                            <MenuItem value={1}>yyy</MenuItem>
                            <MenuItem value={2}>xxx</MenuItem>
                        </Select>   
                </FormControl>
            </Grid>
        </Grid>
        <Grid item xs={3} md={3} sm={12}>
            <FormControl size="small" fullWidth>
              <Daterangepicker />
            </FormControl>
        </Grid>
     </Grid>   
    <br /> 
    {/* Table */}
    <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
                <Box sx={userStyle.container}>
                    <ProfitLossTable />
                </Box>
            </Grid>
            <Grid item xs={6} md={6}>
                <Box sx={userStyle.container}>
                    <CloseStockTable />
                </Box>
            </Grid>
        </Grid>
    <br />

    {/* profit containers      */}

        <Box sx= {userStyle.container}>
            <Typography variant='h5'> Gross Profit: ₹ 1,562.49</Typography>
            <Typography>(Total sell price - Total purchase price)</Typography>
            <br />
            <Typography variant='h5'> Net Profit: ₹ 1,562.49</Typography>
            <Typography>Gross Profit + (Total sell shipping charge + Total Stock Recovered + Total Purchase discount + Total sell round off )
              - ( Total Stock Adjustment + Total Expense + Total purchase shipping charge + Total transfer shipping charge + Purchase additional expenses + Total Sell discount + Total customer reward )</Typography>
        </Box>
    <br />
        <Box sx={userStyle.container}>

        <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
            <Tab iconPosition="start" label={<><div><FaCubes/>&ensp;Profit by products</div></>} {...a11yProps(0)}/>
            <Tab iconPosition="start" label={<><div><FaTags/>&ensp;Profit by categories</div></>} {...a11yProps(1)} />
            <Tab iconPosition="start" label={<><div>&ensp;Profit by brands</div></>}  {...a11yProps(2)} />
            <Tab iconPosition="start" label={<><div><FaMapMarker/>&ensp;Profit by locations</div></>} {...a11yProps(3)} />
            <Tab iconPosition="start" label={<><div><FaFileAlt/>&ensp;Profit by invoice</div></>} {...a11yProps(4)} />
            <Tab iconPosition="start" label={<><div><FaCalendar/>&ensp;Profit by date</div></>}{...a11yProps(5)} />
            <Tab iconPosition="start" label={<><div><FaUser/>&ensp;Profit by customer</div></>} {...a11yProps(6)} />
            <Tab iconPosition="start" label={<><div><FaCalendar/>&ensp;Profit by day</div></>} {...a11yProps(7)} />
            </Tabs>
        </Box>
        
            {/* Profitby products start */}
            <TabPanel value={value} index={0}>          
               <Profitbyproduct />
            </TabPanel>
            {/* Profit by products end */}

            {/* Profitby category start */}
            <TabPanel value={value} index={1}>
               <Profitbycategory />
            </TabPanel>
            {/* Profitby category end */}

            {/* Profitby brand start */}
            <TabPanel value={value} index={2}>
               <Profitbybrand />
            </TabPanel>
            {/* Profitby brand end */}

            {/* Profitby location start */}
            <TabPanel value={value} index={3}>
               <Profitbylocation />
            </TabPanel>
            {/* Profitby location end */}

            {/* Profitby invoice start */}
            <TabPanel value={value} index={4}>
               <Profitbyinvoice />
            </TabPanel>
            {/* Profitby invoice end */}

            {/* Profitby date start */}
            <TabPanel value={value} index={5}>
              <Profitbydate />
            </TabPanel>
            {/* Profitby date end */}

            {/* Profitby customer start */}
            <TabPanel value={value} index={6}>
               <Profitbycustomer />
            </TabPanel>
            {/* Profitby customer end */}

            {/* Profitby day start */}
            <TabPanel value={value} index={7}>
               <Profitbyday />
            </TabPanel>
            {/* Profitby day end */}
        </Box>
    </Box>
);   
}

const Profitlosslist = ()=>{
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <Profitlosstable /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    )
}

export default Profitlosslist;