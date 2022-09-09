import React, { useState } from 'react';
import Sidebar from '../components/header/Sidebar';
import { Grid, Typography, Box, FormControl, InputLabel, Select, MenuItem  } from '@mui/material';
import { dashboardstyle } from './Dashboardstyle';
import { SmartScreenSharp , DoDisturbOnSharp, PriorityHighSharp, PrivacyTipSharp, ShoppingCart, ChildFriendly, Crib } from '@mui/icons-material';
import Daterangepicker from '../components/Daterangepicker';
import axios from 'axios';
// import Dashboardtable from './Table';
axios.defaults.withCredentails = true
let firstRender = true;
const Dashboardlayout = () => {

  const [login,setLogin] = useState();

  const refreshToken = async() => {
    const res =  await  axios.get("http://localhost:5000/api/refresh", {
      withCredential: true
    }).catch(err=>console.log(err))
    const data = await res.data;
    return data;
  }

  const sendRequest = async() => {
    const res = await axios.get("http://localhost:5000/api/dashboard",{
      withCredentials: true
    }).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }
  useEffect(()=> {
    if(firstRender){
      firstRender = false;
      sendRequest().then((data)=>setLogin(data.login))
    }
    let interval = setInterval(()=>{ 
      refreshToken().then(data=>setLogin(data.login))
    },1000 * 29)

    return ()=>clearInterval(interval)

  },[])

  const [location, setLocation] =  useState("");
  
  return(
    <Box>
      <Typography variant="h5" sx={{color: 'rgb(94, 53, 177)'}}>Welcome Admin</Typography><br />
      <Grid container sx={{justifyContent: 'space-between'}}>
        <Grid item xs={12} sm={6} md={4} sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',borderRadius: '10px', }}}>
          <Grid sx={dashboardstyle.headlocation}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Select Location</InputLabel>
                <Select labelId="demo-select-small" id="demo-select-small" value={location} label="Select Location" onChange={(event) => {console.log(event.target.value); setLocation(event.target.value)}}>
                  <MenuItem value={1}>Location 1</MenuItem>
                  <MenuItem value={2}>Location 2</MenuItem>
                  <MenuItem value={3}>Location 3</MenuItem>
                </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',borderRadius: '10px', }}}>
            <FormControl size="small" fullWidth>
              <Daterangepicker />
            </FormControl>
        </Grid>
      </Grid><br />
      {/* Grid Layout for TOTAL  start*/}
      <Grid lg={12} item container spacing={{ xs: 3, sm: 3, md: 4, lg: 3}}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.container}>
            <Grid sx={dashboardstyle.conetntbox}>
              <Grid sx={dashboardstyle.contentboxicon}><SmartScreenSharp style={{fontSize: '52px', padding: '5px',backgroundColor: 'rgb(146 4 196)!important', marginTop: '2px',}} /></Grid>
              <span>TOTAL PURCHASE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.containerOne}>
            <Grid sx={dashboardstyle.conetntbox}>
            <Grid sx={dashboardstyle.contentboxicon}><ShoppingCart style={{fontSize: '52px', padding: '5px',}} /></Grid>
              <span>TOTAL SALES<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.containerTwo}>
            <Grid sx={dashboardstyle.conetntbox}>
              <Grid sx={dashboardstyle.contentboxicon}><PriorityHighSharp style={{fontSize: '42px', padding: '5px',}} /></Grid>
              <span>PURCHASE DUE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.containerThree}>
            <Grid sx={dashboardstyle.conetntbox}>
              <Grid sx={dashboardstyle.contentboxicon}><PrivacyTipSharp style={{fontSize: '42px', padding: '5px',}} /></Grid>
              <span>SALES DUE<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.containerFour}>
            <Grid sx={dashboardstyle.conetntbox}>
              <Grid  sx={dashboardstyle.contentboxicon}><Crib style={{fontSize: '42px', padding: '5px',}} /></Grid>
              <span>TOTAL SALES <br />RETURN<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.containerFour}>
            <Grid sx={dashboardstyle.conetntbox}>
              <Grid  sx={dashboardstyle.contentboxicon}><ChildFriendly style={{fontSize: '42px', padding: '5px',}} /></Grid>
              <span>TOTAL PURCHASE <br />RETURN<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Grid sx={dashboardstyle.containerFour}>
            <Grid sx={dashboardstyle.conetntbox}>
              <Grid  sx={dashboardstyle.contentboxicon}><DoDisturbOnSharp style={{fontSize: '42px', padding: '5px',}} /></Grid>
              <span>EXPENSES<br /><span style={{fontSize: '35px'}}>₹ 0.00</span></span>
            </Grid>
          </Grid>
        </Grid>
      </Grid><br /><br />
      {/* Grid Layout for TOTAL end */}
      {/* Table start */}
        {/* <Box>
          <Dashboardtable />
        </Box> */}
      {/* Table end */}
  </Box>
  );
}

const Dashboard = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
       <Sidebar />
        {/* Main Dashboard start */}
      <Box sx={{ width: '100%' }}>
       <Box component="main" sx={{ flexGrow: 1, padding: '30px',}}><br /><br />
        <Dashboardlayout />
       </Box>
      </Box>
      {/* Main Dashboard end */}
    </Box>
    </>
  )
}

export default Dashboard;