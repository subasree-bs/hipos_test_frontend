import React, { useEffect }  from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { Container } from '@mui/system';
import Forgotlogo from '../assets/images/mainlogo.png';
import { loginforgot } from './Loginstyle';
import './Signin.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';


const ForgotPwd = () => {
  useEffect(
    () => {
      document.body.classList.add('signinbackground');
      return () => {
        document.body.classList.remove('signinbackground');
      }
    }, []
  );

  return (
    <>
    <Container maxWidth="sm" sx={loginforgot.container}>
      <Box >
        <Grid >
          <img src={ Forgotlogo } alt="HILIFE.AI LOGO" /><br /><br/>
          <Typography variant="h5">Forgot Password</Typography><br />
          <Container>
          <Typography variant="subtitle1" sx={{ textAlign: 'justify'}}>Enter your registered email address, mobile number, or username to change your HIPOS account password. </Typography>
          </Container><br/>
          <TextField fullWidth id="outlined-basic" label="Email address or Mobile Number" variant="outlined" sx={{ maxWidth: '90%'}} /><br /><br />
          <Link to="/forgetCaptcha" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bolder', textTransform: 'capitalize' }}><Button variant="contained" fullWidth sx={{ maxWidth: '90%',fontSize: '22px', backgroundColor: '#159AFF !important',}}>Next</Button></Link><br /><br />
        </Grid>
      </Box>
    </Container><br /><br />
    <Footer />
    </>
  )
}

export default ForgotPwd;