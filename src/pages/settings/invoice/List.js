import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,
    Grid, TableFooter, Link,InputLabel,Badge,Checkbox,Dialog,DialogContent,DialogTitle,TextField,DialogActions,FormGroup,FormControlLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {userStyle} from '../../PageStyle';
import {FcInfo} from 'react-icons/fc';
import { styled } from '@mui/material/styles';
import {FaFileAlt} from "react-icons/fa";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import $ from 'jquery';
//Date RANGE
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import Sechemecreate from './scheme/Create';
import Sechmeedit from './scheme/Edit';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
// import { Link } from 'react-router-dom';

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
    $('#invoice').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
//Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: -23,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function Invoicelisttable() {

const [hidden, setHidden] = useState(true);
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
        <Typography sx={userStyle.HeaderText}>Invoice Settings<Typography sx={userStyle.SubHeaderText}>Manage your invoice settings</Typography></Typography> 
        </Box>
        <Box sx={userStyle.container}>     
            <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                <Tab iconPosition="start" label={<><div>&ensp;Invoice Schemes </div></>} {...a11yProps(0)}/>
                <Tab iconPosition="start" label={<><div>&ensp;Invoice Layouts</div></>} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>          
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                  <Typography>All your invoice schemes</Typography>
                    <Sechemecreate />
                        <Table aria-label="customized table" id="orders" sx={{margin:'20px'}}>
                        <TableHead>
                            <StyledTableRow>
                              <StyledTableCell align="left">Name&ensp;<FcInfo/></StyledTableCell>
                              <StyledTableCell align="left">Prrefix&ensp;<FcInfo/></StyledTableCell>
                              <StyledTableCell align="left">Start from&ensp;<FcInfo/></StyledTableCell>
                              <StyledTableCell align="left">Invoice count&ensp;<FcInfo/></StyledTableCell>
                              <StyledTableCell align="left">Number of digits&ensp;<FcInfo/></StyledTableCell>
                              <StyledTableCell align="left">Action&ensp;<FcInfo/></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                              <StyledTableCell align="left">Defaut&ensp;&ensp;&ensp;&ensp;<Badge badgeContent={'Default'} color="success"/> </StyledTableCell>
                              <StyledTableCell align="left"></StyledTableCell>
                              <StyledTableCell align="left"></StyledTableCell>
                              <StyledTableCell align="left"></StyledTableCell>
                              <StyledTableCell align="left"></StyledTableCell>
                              <StyledTableCell align="left">
                                <Sechmeedit />
                                 <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;DELETE&ensp;</Button>
                                 <Button variant="contained" color="success" size="small" sx={{ textTransform: 'Capitalize',padding:'2px'}}>Default</Button>
                              </StyledTableCell>
                           </StyledTableRow>  
                        </TableBody>
                      </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box>
                <Typography sx={{float:'left'}}>All your invoice layouts</Typography>
                <Link to="/settings/layout/create"><Button sx={userStyle.buttonadd} >ADD</Button></Link>
                <br /><br />
                <Grid container>
                  <Grid item md={2} sx={{textAlign:'center'}}>
                      <FaFileAlt size={70} color='#3c8dbc'/><StyledBadge badgeContent={'Default'} color="success"/>
                  </Grid>
                </Grid>
                     <Typography sx={{fontWeight:'bold'}}>Used in locations:</Typography>
                      <Typography>XYZ ,   shreebalaji krishanarajan ,   Juiceria  </Typography>
              </Box>
            </TabPanel>
        </Box>

  </>
 );
}

const Invoicelist = ( ) =>{
  return(
<Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Invoicelisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
  );
}
export default Invoicelist;