import React, { useEffect } from 'react';
import { Box, Typography, Button,  FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import Forgotlogo from '../assets/images/mainlogo.png';
import { loginforgot } from './Loginstyle';
import { FaEyeSlash } from "react-icons/fa";
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import './Signin.css';

const ForgotVerifyPwd = () => {
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
                        <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>Enter the last password you remember with this HIPOS account. If it matches, you can continue to sign in.</Typography><br />
                        </Container>
                        <FormControl variant="outlined" fullWidth sx={{ maxWidth: '90%' }}>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            <FaEyeSlash />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label=""
                            />
                        </FormControl><br /><br />
                        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bolder' }}><Button variant="contained" fullWidth sx={{ maxWidth: '90%',fontSize: '22px', backgroundColor: '#159AFF !important', }}>VERIFY THE PASSWORD</Button></Link><br /><br />
                        <Typography variant="subtitle1"><span  style={{textDecoration:'none'}}><Link to="/forgetOtp" style={{ color: 'rgb(33, 150, 243)', textDecoration: 'none', fontSize: '20px', fontWeight: 'bolder',  }}>Continue to reset password</Link></span></Typography><br /><br />
                    </Container>
                </Box>
            </Container><br /><br />
    <Footer />
    </>
  )
}

export default ForgotVerifyPwd;