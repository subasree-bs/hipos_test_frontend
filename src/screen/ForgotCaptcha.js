import React, { useEffect } from 'react';
import { Box, Typography, Button, FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import Forgotlogo from '../assets/images/mainlogo.png';
import { loginforgot } from './Loginstyle';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import './Signin.css';

const ForgotCaptcha = () => {

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
          <img src={Forgotlogo} alt="HILIFE.AI LOGO" /><br />
          <Typography variant="h5">Authentication</Typography><br /><br />
          <Container>
            <FormControl variant="outlined"  fullWidth sx={{ maxWidth: '90%' }}>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <Typography><Link to="/forgetpwd" style={{ color: 'rgb(33, 150, 243)', textDecoration: 'none', fontWeight: 'bolder', fontFamily: 'revert'}}>Change</Link></Typography>
                    </IconButton>
                  </InputAdornment>
                }
                label=""
              />
            </FormControl><br /><br/>
            <Typography variant="h6">Forgot Password</Typography><br />
           
            <Link to="/forgetVerifyPwd" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bolder', textTransform: 'capitalize' }}><Button variant="contained" fullWidth sx={{ maxWidth: '90%',fontSize: '22px', backgroundColor: '#159AFF !important', }}>Next</Button></Link><br /><br />
          </Container>
        </Box>
      </Container><br /><br />
    <Footer />
    </>
  )
}

export default ForgotCaptcha;