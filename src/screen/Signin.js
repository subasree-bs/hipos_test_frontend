import { Grid, TextField, Typography, Button, Divider, Box, FormControl,InputLabel, OutlinedInput,InputAdornment,IconButton} from '@mui/material';
import { Container } from '@mui/system';
import { FavoriteSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/mainlogo.png';
import { loginSignIn } from './Loginstyle';
import google from '../assets/images/icons/google.png';
import slack from '../assets/images/icons/slack.png';
import yahoo from '../assets/images/icons/yahoo.png';
import microsoft from '../assets/images/icons/microsoft.png';
import {FaEyeSlash,FaFacebookF,FaLinkedinIn,FaTwitter,FaLinkedin,FaFacebook,FaApple} from 'react-icons/fa';
import './Signin.css';
import {BsThreeDots} from 'react-icons/bs';
import CarouselComponent from "./CarousalSignin";
import { Link } from 'react-router-dom';

const Signin = () => {
    useEffect(
        () => {
          document.body.classList.add('signinbackground');
          return () => {
            document.body.classList.remove('signinbackground');
          }
        }, []
      );

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
   };

   const [hiddenCont, setHiddencont] = useState("true");
   const handleMorelogo = () => {
    setHiddencont(!hiddenCont);
    };
 
  const [fade, setFade] = useState(true);
  const [hidden, setHiiden] = useState(true);

    const triggerFade = () => {
      setFade(false);
      setHiiden(!hidden);
    };

  return (
    <>
     <Container maxWidth="md" sx={{ marginTop: '100px',boxShadow:'0px 0px 10px #d6d3d363',backgroundColor:'white','@media (max-width: 750px)':{ boxShadow: 'none !important',marginTop: '0px'}, '@media (max-width: 1050px)':{ maxWidth:'md'}}}>
       <Grid container sx = {{marginBottom: '10px'}} className="signInContainer">
         <Grid item xs={12} sm={12} md={7} className="signInContainer">
            <Grid sx={{ textAlign: 'center', marginTop: '40px',}}>
                <img src={ logo } alt="HILIFEAILOGO" />
            </Grid>
        
            <Grid>
            { hiddenCont ? <>
                <Grid sx={loginSignIn.container}>
                    <Typography variant="h5" sx={loginSignIn.signInheadtxt} >Sign IN</Typography>
                    <Typography variant="h5" sx={loginSignIn.signInheadtxt}>to access HIPOS</Typography>
                    <TextField fullWidth id="outlined-basic" label="Email address or Mobile Number" variant="outlined" sx={{ maxWidth: '90%'}} />
                 
                   {/* PASSWORD CONTAINER START */}
                    <div className={fade ? 'fadedClass' : 'visibleClass'}>
                      <br />
                      <FormControl variant="outlined" fullWidth sx={{ maxWidth: '90%'}} >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                              label="password *"
                          />
                        </FormControl>
                        <Link to="/dashboard" style={{color: 'white',fontWeight: 'bolder',textDecoration: 'none'}}><Button variant="contained" sx={loginSignIn.signinBtn}>Signin</Button></Link>
                      <Box sx={loginSignIn.otplinks}>
                        <Link to="/forgetOtp" style={{ color: '#159AFF', textDecoration: 'none', textAlign: 'left', float: 'left'}} sx={loginSignIn.signInSendotp}>sign in using OTP</Link>
                        <Link to="/forgetpwd" style={{ color: '#159AFF', textDecoration: 'none', textAlign: 'right', float: 'right'}} sx={loginSignIn.signInForgptpassword}>Forgot Password?</Link>
                      </Box>
                  </div><br />
                   {/* PASSWORD CONTAINER END */}

                   {/* NEXT BUTTON START */}
                    <div className={!hidden ? "hiddenbtn" : "showbtn"}>             
                    <Button variant="contained"  onAnimationEnd={triggerFade}  className={isActive ? "btncontainer" : "btncontainer active"} onClick={() => { handleToggle()}} style={{ maxWidth: '90%'}}>  <Typography className={isActive ? "text" : "text active"} style={{fontWeight: 'bolder', fontSize: '20px'}}>Next</Typography> <Typography  className={isActive ? "loader" : "loader active"}></Typography></Button><br />
                    <br /><Typography variant="subtitle1"><Link to="/forgetpwd" style={{ color: '#0b0b0b', textDecoration: 'none'}}>Forgot Password</Link></Typography>
                    </div><br />
                       {/* NEXT BUTTON END */}

                 
                </Grid>
                <Divider /><br />
                
                  {/* SOCIAL ICONS START               */}

             
                    {/* <Typography variant="h6" sx={loginSignIn.signInheadtxt}>Sign In Using</Typography> */}
                    <Grid container sx={loginSignIn.socialcontainer}>
                     
                          <Box sx={loginSignIn.socialicons}>
                              <Box component="img" sx={loginSignIn.socialgoogle} alt="Google logo" src={google} />
                             <Typography sx={loginSignIn.socialiconstxt}>Google</Typography>
                          </Box>
                       
                        <Box sx={loginSignIn.micrsoftlogo}>
                            <Box component="img" sx={loginSignIn.socialmicrosoft} src={ microsoft } alt="Microsoft Logo"  />
                          </Box>
                          <Box sx={loginSignIn.facebooklogo}>
                            <Box sx={loginSignIn.socialfacebook}><FaFacebookF></FaFacebookF></Box>
                          </Box>
                          <Box sx={loginSignIn.linkedinlogo}>
                            <Box sx={loginSignIn.sociallinkedin}><FaLinkedinIn></FaLinkedinIn></Box>
                          </Box>
                          <Box sx={loginSignIn.twitterlogo}>
                            <Box sx={loginSignIn.socialtwitter}><FaTwitter></FaTwitter></Box>
                          </Box>
                          <Box sx={loginSignIn.morelogo} onClick={() => { handleMorelogo()}}>
                            <Box sx={loginSignIn.socialmorelogo}><BsThreeDots></BsThreeDots></Box>
                          </Box>
                          <br />
                </Grid> </>:
           <Box sx={loginSignIn.moresocialiconcontainer} >
            <Typography sx={loginSignIn.signInheadtxt}>Sign in using</Typography>
              <Grid container>
                <Grid md={6} xs={6} sm={6} lg={6}>
                  <Box sx={loginSignIn.moresocialGooglebg}>
                    <Box component="img" sx={loginSignIn.socialgoogle} alt="Google logo" src={google} />
                    <Typography sx={loginSignIn.socialiconstxt}>Google</Typography>
                    </Box>
                 </Grid>
                 <Grid md={6} xs={6} sm={6} lg={6}>
                    <Box sx={loginSignIn.moresocialMSbg}>
                      <Box component="img" sx={loginSignIn.socialgoogle} src={ microsoft } alt="Microsoft Logo"  />
                      <Typography sx={loginSignIn.moresocialiconstxt}> Microsoft</Typography>
                    </Box>     
               </Grid>
            </Grid>
            <Grid container>
                <Grid md={6} xs={6} sm={6} lg={6}>
                  <Box sx={loginSignIn.moresocialLINbg}>
                    <Typography sx={loginSignIn.moresocialiconstxt}>Linked</Typography>
                    <Box sx={loginSignIn.sociallinkedin}><FaLinkedin></FaLinkedin></Box>
                   </Box>
                 </Grid>
                 <Grid md={6} xs={6} sm={6} lg={6}>
                    <Box sx={loginSignIn.moresocialFBbg}>
                      <Box sx={loginSignIn.socialfacebook}><FaFacebook></FaFacebook></Box>
                      <Typography sx={loginSignIn.moresocialiconstxt}>Facebook</Typography>
                    </Box>     
               </Grid>
            </Grid>
            <Grid container>
                <Grid md={6} xs={6} sm={6} lg={6}>
                  <Box sx={loginSignIn.moresocialTwitterbg}>
                    <Box sx={loginSignIn.socialtwitter}><FaTwitter></FaTwitter></Box>
                    <Typography sx={loginSignIn.moresocialiconstxt}>Twitter</Typography>
                    </Box>
                 </Grid>
                 <Grid  md={6} xs={6} sm={6} lg={6}>
                 <Box sx={loginSignIn.moresocialYahoobg}>
                 <Box component="img" sx={loginSignIn.socialyahoo} src={ yahoo } alt="yahoo"  />
                   </Box>   
               </Grid>
            </Grid>
            <Grid container>
                <Grid  md={6} xs={6} sm={6} lg={6}>
                  <Box sx={loginSignIn.moresocialSlackbg}>
                    <Box component="img" sx={loginSignIn.socialgoogle} alt="Google logo" src={slack} />
                    <Typography sx={loginSignIn.moresocialiconslacktxt}>Slack</Typography>
                    </Box>
                 </Grid>
                 <Grid md={6} xs={6} sm={6} lg={6}>
                 <Box sx={loginSignIn.moresocialApplebg}>
                    <Box sx={loginSignIn.socialApple}><FaApple></FaApple></Box>
                    <Typography sx={loginSignIn.moresocialiconstxt} className="moresocialiconstxt">Sign in with Apple</Typography>

                   </Box>       
               </Grid>
            </Grid>
            <br />
          <Button type='button' sx={loginSignIn.MoresignInbtn} onClick={() => { handleMorelogo()}}>Signin with Hilife.AI</Button>
       
          </Box>
            }
                 {/* SOCIAL ICONS END               */}


            </Grid>
            <Grid>
                
            </Grid>
         </Grid>

         {/* CAROUSEL CONTAIENR START*/}
         <Grid item md={5} sx={loginSignIn.carouselcomp} className="carouselContainer">
         <CarouselComponent></CarouselComponent>
         </Grid>
           {/* CAROUSEL CONTAIENR END*/}

       </Grid>
     </Container><br /><br />
     <Box>
       {/* Sign In Footer Start  */}
        <Box sx={loginSignIn.singinfooter}>
            <Typography sx={{justifyContent: 'center'}}>Don't have a HIPOS &ensp;<Link to="/signup" sx={loginSignIn.bottomlink} style={{color: 'blue', textDecoration: 'none'}}>Sign Up Now</Link></Typography>
            <Typography sx={loginSignIn.hearts}>Made with <FavoriteSharp sx={loginSignIn.heart} />&ensp;&ensp;&ensp;in TRICHY <b>&ensp;| &ensp;</b> திருச்சியில் உருவாக்கப்பட்டது &ensp;<FavoriteSharp sx={loginSignIn.heart} /> </Typography>
        </Box><br />
       {/* Sign In Footer End  */}
     </Box>
    </>
  )

}

export default Signin;