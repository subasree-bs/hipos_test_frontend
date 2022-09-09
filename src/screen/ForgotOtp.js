import React, { useEffect } from 'react';
import { Box, Typography, Button,  FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import Forgotlogo from '../assets/images/mainlogo.png';
import { loginforgot } from './Loginstyle';
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import './Signin.css';

const ForgotOtp = () => {

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
                        <FormControl variant="outlined" fullWidth sx={{ maxWidth: '90%' }}>
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
                        </FormControl><br /><br />
                        <Typography variant="h6">Forgot Password</Typography><br />
                        <Container>
                        <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>A one-time password (OTP) will be sent to your registered email address for verification </Typography><br />
                        </Container>
                        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none',fontWeight: 'bolder' }}><Button variant="contained" fullWidth sx={{ maxWidth: '90%',fontSize: '22px', backgroundColor: '#159AFF !important', }}>SEND OTP</Button></Link><br /><br />
                        <Link to="/" style={{ color: 'rgb(33, 150, 243)', textDecoration: 'none', fontSize: '20px', fontWeight: 'bolder',  }}><Typography variant="subtitle1"><span style={{textDecoration:'none'}}>Contact Support</span></Typography></Link><br /><br />
                    </Container>
                </Box>
            </Container><br /><br />
    <Footer />
   </>
  )
}

export default ForgotOtp;