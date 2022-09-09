import { Box,Grid, TextField,Select,Typography,  MenuItem,Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Signuplogo from '../assets/images/mainlogo.png';
import { loginSignup } from './Loginstyle';
import { CgQuote } from 'react-icons/cg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FavoriteSharp, BusinessOutlined} from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {FaFacebookF,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import { loginSignIn } from './Loginstyle';
import { Link,useNavigate } from 'react-router-dom';
import google from '../assets/images/icons/google.png';
import microsoft from '../assets/images/icons/microsoft.png';
import './Signin.css';
import axios from 'axios';
const Signup = () => {
    
    const history = useNavigate();
    useEffect(
        () => {
          document.body.classList.add('signupbackground');
          return () => {
            document.body.classList.remove('signupbackground');
          }
        }, []
      );

    const [signupForm, setSignupForm] = useState({name: "", email:"", password:"", country: "", location: "", phonenumber:""});
    
    const sendSignupRequest = async () => {
        const res = await axios.post("http://localhost:5000/api/signup",{
            SignUpCompanyName: signupForm.name,
            SignUpEmail: signupForm.email,
            SignUpPassword: signupForm.password,
            SignUpCountry: signupForm.country,
            SignUpLocation: signupForm.location,
            SignUpPhonenumber: signupForm.phonenumber
        }).catch(err => console.log(err));
        const data = await res.data; 
        return data;
    }
    
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // console.log(signupForm);
        sendSignupRequest().then(() => history("/signin"));
    }

    

    return (
    <>
    <Box sx={{backgroundColor: 'white'}}>
        <Grid container>
            <Grid item md={5} sx={loginSignup.signupLeft}>
                <Grid sx={{marginLeft: '30px', marginRight: '30px', marginTop: '10px', marginBottom: '10px'}}>
                   <Grid sx={{display: 'flex', justifyContent: 'center',marginTop: '30px',}}>
                       <Grid sx={loginSignup.signupleftheadlogo}> <img src={ Signuplogo }  alt="HILIFE.AI LOGO" width="75px" /></Grid>
                      <Typography variant="h5" sx={loginSignup.signupleftheadcontent}>HIPOS</Typography>
                   </Grid><br /><br />
                   <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                       <hr style={{ height: '0px', width: '50%'}}/>
                       <CgQuote style={{fontSize: '65px',color: 'white',fontWeight: 900,marginTop: '-30px',}} />
                       <hr style={{ height: '0px', width: '50%'}}/>
                   </Grid><br /><br />
                   <Typography sx={loginSignup.signupleftcontent} >
                       Thanks to the HIPOS team for this wonderful system, i had been using a traditional
                       software system before, which felt very limited. But HILIFE.AI is like a
                       fresh breath of air for my business and choosing it was a very satisfying
                       decision. It has made automation so much simpler.
                    </Typography><br /><br />
                    <hr /><br />
                    <Grid sx={loginSignup.signupleftbottom}>
                        <Grid sx={{backgroundColor: 'white', borderRadius: '44px', margin: '0px 0px 0px 30px' }}>
                            <img src={ Signuplogo } alt="HILIFE.AI LOGO" style={{padding: '10px'}} />
                        </Grid>
                        <Typography sx={{ fontSize: '18px', fontWeight: '900', marginLeft: '30px'}}>
                             Shreebalaji.K<br /><br />
                             <span>HILIFE.AI Pvt Ltd., India</span>
                        </Typography>
                    </Grid><br /><br />
                    <hr /><br />
                    <Grid>
                        <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '18px', fontWeight: '600', }}>Made with&ensp;<FavoriteSharp sx={{color: 'red', fontSize: '30px',   fontWeight: '600', }} /> in TRICHY</Typography>
                        <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '18px', fontWeight: '600', }}>திருச்சியில் உருவாக்கப்பட்டது&ensp;<FavoriteSharp sx={{color: 'red', fontSize: '30px',   fontWeight: '600',}} /></Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={7} sx={{height:'100vh',overFlowY:'auto',right:'0',marginLeft:'45%',paddingLeft:'10px',paddingRight:'20px','@media(max-width:1100px)':{margin:'0 auto'}}}>
                <Grid sx={{margin: '30px'}}>
                   <Grid sx={{ display: 'flex', justifyContent: 'space-between'}}>
                       <Box sx={{visibility:'hidden','@media(max-width:1100px)':{visibility:'visible'}}}><img src={Signuplogo} alt="HILIFE.AI LOGO"  /></Box>
                       <Typography variant="h5" sx={{color: '#7C7B7A',}}>&ensp;Already have a HIPOS account?&ensp;<Link to="/" style={{textDecoration: 'none'}}><span style={{ color: 'blue', fontFamily: 'system-ui'}}>Sign In</span></Link></Typography>
                   </Grid><br />
                   <hr /><br />
                   <Grid sx={{}}>
                      <Typography variant="h5" sx={{ color : '#5D5C5C', fontFamily: 'fantasy', textAlign: 'center' }}>Start your full-featured Free Trial for 14 days</Typography><br />
                      {/* Signup form start */}
                      <Grid >
                        <form action="" onSubmit={handleSignupSubmit}>
                            <Box sx={loginSignup.formstart}>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <BusinessOutlined sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.name} name="SignUpCompanyName"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, name: event.target.value});
                                        }} placeholder="Company Name" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <EmailOutlinedIcon sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.email} name="SignUpEmail"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, email: event.target.value})
                                        }} placeholder="Email Address" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <LockOutlinedIcon sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.password} name="SignUpPassword"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, password: event.target.value})
                                        }} placeholder="Password" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <PublicOutlinedIcon sx={loginSignup.inputicon} />
                                        <Select fullWidth value={signupForm.country} name="SignUpCountry"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, country: event.target.value});
                                        }} sx={loginSignup.inputfield}>
                                            <MenuItem value={0}>Afghanistan</MenuItem>
                                            <MenuItem value={1}>Albania</MenuItem>
                                            <MenuItem value={2}>Algeria</MenuItem>
                                            <MenuItem value={3}>Andorra</MenuItem>
                                            <MenuItem value={4}>Angola</MenuItem>
                                            <MenuItem value={5}>Antigua & Deps</MenuItem>
                                            <MenuItem value={6}>Argentina</MenuItem>
                                            <MenuItem value={7}>Austria</MenuItem>
                                            <MenuItem value={8}>Australia</MenuItem>
                                            <MenuItem value={9}>Azerbaijan</MenuItem>
                                            <MenuItem value={10}>Bahamas</MenuItem>
                                            <MenuItem value={12}>Bahrain</MenuItem>
                                            <MenuItem value={13}>Bangladesh</MenuItem>
                                            <MenuItem value={14}>Barbados</MenuItem>
                                            <MenuItem value={15}>Belarus</MenuItem>
                                            <MenuItem value={16}>Belgium</MenuItem>
                                            <MenuItem value={17}>Belize</MenuItem>
                                            <MenuItem value={18}>Benin</MenuItem>
                                            <MenuItem value={19}>Bhutan</MenuItem>
                                            <MenuItem value={20}>Bolivia</MenuItem>
                                            <MenuItem value={21}>Bosnia Herzegovina</MenuItem>
                                            <MenuItem value={22}>Botswana</MenuItem>
                                            <MenuItem value={23}>Brazil</MenuItem>
                                            <MenuItem value={24}>Brunei</MenuItem>
                                            <MenuItem value={25}>Bulgaria</MenuItem>
                                            <MenuItem value={26}>Burkina</MenuItem>
                                            <MenuItem value={27}>Burundi</MenuItem>
                                            <MenuItem value={28}>Cambodia</MenuItem>
                                            <MenuItem value={29}>Cameroon</MenuItem>
                                            <MenuItem value={30}>Canada</MenuItem>
                                            <MenuItem value={31}>Cape Verde</MenuItem>
                                            <MenuItem value={32}>Central African Rep</MenuItem>
                                            <MenuItem value={33}>Chad</MenuItem>
                                            <MenuItem value={34}>Chile</MenuItem>
                                            <MenuItem value={35}>China</MenuItem>
                                            <MenuItem value={36}>Colombia</MenuItem>
                                            <MenuItem value={37}>Comoros</MenuItem>
                                            <MenuItem value={38}>Congo</MenuItem>
                                            <MenuItem value={39}>Costa Rica</MenuItem>
                                            <MenuItem value={40}>Croatia</MenuItem>
                                            <MenuItem value={30}>Cuba</MenuItem>
                                            <MenuItem value={31}>Cyprus</MenuItem>
                                            <MenuItem value={32}>Czech Republic</MenuItem>
                                            <MenuItem value={33}>Denmark</MenuItem>
                                            <MenuItem value={34}>Djibouti</MenuItem>
                                            <MenuItem value={35}>Dominica</MenuItem>
                                            <MenuItem value={36}>Dominican Republic</MenuItem>
                                            <MenuItem value={37}>East Timor</MenuItem>
                                            <MenuItem value={38}>Ecuador</MenuItem>
                                            <MenuItem value={39}>Egypt</MenuItem>
                                            <MenuItem value={40}>El Salvador</MenuItem>
                                            <MenuItem value={41}>Equatorial Guinea</MenuItem>
                                            <MenuItem value={42}>Eritrea</MenuItem>
                                            <MenuItem value={43}>Estonia</MenuItem>
                                            <MenuItem value={44}>Ethiopia</MenuItem>
                                            <MenuItem value={45}>Fiji</MenuItem>
                                            <MenuItem value={46}>Finland</MenuItem>
                                            <MenuItem value={47}>France</MenuItem>
                                            <MenuItem value={48}>Gabon</MenuItem>
                                            <MenuItem value={49}>Gambia</MenuItem>
                                            <MenuItem value={50}>Georgia</MenuItem>
                                            <MenuItem value={51}>Germany</MenuItem>
                                            <MenuItem value={52}>Ghana</MenuItem>
                                            <MenuItem value={53}>Greece</MenuItem>
                                            <MenuItem value={54}>Grenada</MenuItem>
                                            <MenuItem value={55}>Guatemala</MenuItem>
                                            <MenuItem value={56}>Guinea</MenuItem>
                                            <MenuItem value={57}>Guinea-Bissau</MenuItem>
                                            <MenuItem value={58}>Guyana</MenuItem>
                                            <MenuItem value={59}>Haiti</MenuItem>
                                            <MenuItem value={60}>Honduras</MenuItem>
                                            <MenuItem value={61}>Hungary</MenuItem>
                                            <MenuItem value={62}>Iceland</MenuItem>
                                            <MenuItem value={63} default>India</MenuItem>
                                            <MenuItem value={64}>Indonesia</MenuItem>
                                            <MenuItem value={65}>Iran</MenuItem>
                                            <MenuItem value={66}>Iraq</MenuItem>
                                            <MenuItem value={67}>Ireland</MenuItem>
                                            <MenuItem value={68}>Israel</MenuItem>
                                            <MenuItem value={69}>Italy</MenuItem>
                                            <MenuItem value={70}>Ivory Coast</MenuItem>
                                            <MenuItem value={71}>Jamaica</MenuItem>
                                            <MenuItem value={72}>Japan</MenuItem>
                                            <MenuItem value={73}>Jordan</MenuItem>
                                            <MenuItem value={74}>Kazakhstan</MenuItem>
                                            <MenuItem value={75}>Kenya</MenuItem>
                                            <MenuItem value={76}>Kiribati</MenuItem>
                                            <MenuItem value={77}>Korea North</MenuItem>
                                            <MenuItem value={78}>Korea South</MenuItem>
                                            <MenuItem value={79}>Kosovo</MenuItem>
                                            <MenuItem value={80}>Kuwait</MenuItem>
                                            <MenuItem value={81}>Kyrgyzstan</MenuItem>
                                            <MenuItem value={82}>Laos</MenuItem>
                                            <MenuItem value={83}>Latvia</MenuItem>
                                            <MenuItem value={84}>Lebanon</MenuItem>
                                            <MenuItem value={85}>Lesotho</MenuItem>
                                            <MenuItem value={86}>Liberia</MenuItem>
                                            <MenuItem value={87}>Libya</MenuItem>
                                            <MenuItem value={88}>Liechtenstein</MenuItem>
                                            <MenuItem value={89}>Lithuania</MenuItem>
                                            <MenuItem value={90}>Luxembourg</MenuItem>
                                            <MenuItem value={91}>Madagascar</MenuItem>
                                            <MenuItem value={92}>Kazakhstan</MenuItem>
                                            <MenuItem value={93}>Malawi</MenuItem>
                                            <MenuItem value={94}>Malaysia</MenuItem>
                                            <MenuItem value={95}>Maldives</MenuItem>
                                            <MenuItem value={96}>Mali</MenuItem>
                                            <MenuItem value={97}>Malta</MenuItem>
                                            <MenuItem value={98}>Marshall Islands</MenuItem>
                                            <MenuItem value={99}>Mauritania</MenuItem>
                                            <MenuItem value={100}>Mauritius</MenuItem>
                                            <MenuItem value={101}>Mexico</MenuItem>
                                            <MenuItem value={102}>Micronesia</MenuItem>
                                            <MenuItem value={103}>Moldova</MenuItem>
                                            <MenuItem value={104}>Monaco</MenuItem>
                                            <MenuItem value={105}>Mongolia</MenuItem>
                                            <MenuItem value={106}>Montenegro</MenuItem>
                                            <MenuItem value={107}>Morocco</MenuItem>
                                            <MenuItem value={108}>Mozambique</MenuItem>
                                            <MenuItem value={109}>Madagascar</MenuItem>
                                            <MenuItem value={110}>Myanmar, {'Burma'}</MenuItem>
                                            <MenuItem value={111}>Namibia</MenuItem>
                                            <MenuItem value={112}>Nauru</MenuItem>
                                            <MenuItem value={113}>Nepal</MenuItem>
                                            <MenuItem value={114}>Netherlands</MenuItem>
                                            <MenuItem value={115}>New Zealand</MenuItem>
                                            <MenuItem value={116}>Nicaragua</MenuItem>
                                            <MenuItem value={117}>Niger</MenuItem>
                                            <MenuItem value={118}>Nigeria</MenuItem>
                                            <MenuItem value={119}>Norway</MenuItem>
                                            <MenuItem value={120}>Oman</MenuItem>
                                            <MenuItem value={121}>Pakistan</MenuItem>
                                            <MenuItem value={122}>Palau</MenuItem>
                                            <MenuItem value={123}>Panama</MenuItem>
                                            <MenuItem value={124}>Papua New Guinea</MenuItem>
                                            <MenuItem value={125}>Paraguay</MenuItem>
                                            <MenuItem value={126}>Peru</MenuItem>
                                            <MenuItem value={127}>Philippines</MenuItem>
                                            <MenuItem value={128}>Poland</MenuItem>
                                            <MenuItem value={129}>Portugal</MenuItem>
                                            <MenuItem value={130}>Qatar</MenuItem>
                                            <MenuItem value={131}>Romania</MenuItem>
                                            <MenuItem value={132}>Russian Federation</MenuItem>
                                            <MenuItem value={133}>Rwanda</MenuItem>
                                            <MenuItem value={134}>St Kitts & Nevis</MenuItem>
                                            <MenuItem value={135}>St Lucia</MenuItem>
                                            <MenuItem value={136}>Saint Vincent & the Grenadines</MenuItem>
                                            <MenuItem value={137}>Samoa</MenuItem>
                                            <MenuItem value={138}>San Marino</MenuItem>
                                            <MenuItem value={139}>Sao Tome & Principe</MenuItem>
                                            <MenuItem value={140}>Saudi Arabia</MenuItem>
                                            <MenuItem value={141}>Senegal</MenuItem>
                                            <MenuItem value={142}>Serbia</MenuItem>
                                            <MenuItem value={143}>Seychelles</MenuItem>
                                            <MenuItem value={144}>Sierra Leone</MenuItem>
                                            <MenuItem value={145}>Singapore</MenuItem>
                                            <MenuItem value={146}>Slovakia</MenuItem>
                                            <MenuItem value={147}>Slovenia</MenuItem>
                                            <MenuItem value={148}>Solomon Islands</MenuItem>
                                            <MenuItem value={149}>Somalia</MenuItem>
                                            <MenuItem value={150}>South Africa</MenuItem>
                                            <MenuItem value={151}>Spain</MenuItem>
                                            <MenuItem value={152}>Sri Lanka</MenuItem>
                                            <MenuItem value={153}>Sudan</MenuItem>
                                            <MenuItem value={154}>Suriname</MenuItem>
                                            <MenuItem value={155}>Swaziland</MenuItem>
                                            <MenuItem value={156}>Sweden</MenuItem>
                                            <MenuItem value={157}>Switzerland</MenuItem>
                                            <MenuItem value={158}>Syria</MenuItem>
                                            <MenuItem value={159}>Taiwan</MenuItem>
                                            <MenuItem value={160}>Tajikistan</MenuItem>
                                            <MenuItem value={161}>Thailand</MenuItem>
                                            <MenuItem value={162}>Togo</MenuItem>
                                            <MenuItem value={163}>Tonga</MenuItem>
                                            <MenuItem value={164}>Trinidad & Tobago</MenuItem>
                                            <MenuItem value={165}>Tunisia</MenuItem>
                                            <MenuItem value={166}>Turkey</MenuItem>
                                            <MenuItem value={167}>Turkmenistan</MenuItem>
                                            <MenuItem value={168}>Tuvalu</MenuItem>
                                            <MenuItem value={169}>Uganda</MenuItem>
                                            <MenuItem value={170}>Ukraine</MenuItem>
                                            <MenuItem value={171}>United Arab Emirates</MenuItem>
                                            <MenuItem value={172}>United Kingdom</MenuItem>
                                            <MenuItem value={173}>United States</MenuItem>
                                            <MenuItem value={174}>Uruguay</MenuItem>
                                            <MenuItem value={175}>Uzbekistan</MenuItem>
                                            <MenuItem value={176}>Vanuatu</MenuItem>
                                            <MenuItem value={177}>Vatican City</MenuItem>
                                            <MenuItem value={178}>Venezuela</MenuItem>
                                            <MenuItem value={179}>Vietnam</MenuItem>
                                            <MenuItem value={180}>Yemen</MenuItem>
                                            <MenuItem value={181}>Zambia</MenuItem>
                                            <MenuItem value={182}>Zimbabwe</MenuItem>
                                        </Select>
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <FmdGoodOutlinedIcon sx={loginSignup.inputicon} />
                                        <Select fullWidth value={signupForm.location} name="SignUpLocation"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, location: event.target.value})
                                        }} sx={loginSignup.inputfield} id="signupSelect">
                                           <MenuItem value=""></MenuItem>
                                            <MenuItem value={0}>Andaman and Nicobar Islands</MenuItem>
                                            <MenuItem value={1}>Andhra Pradesh	</MenuItem>
                                            <MenuItem value={2}>Arunachal Pradesh	</MenuItem>
                                            <MenuItem value={3}>Assam</MenuItem>
                                            <MenuItem value={4}>Bihar</MenuItem>
                                            <MenuItem value={5}>Chandigarh</MenuItem>
                                            <MenuItem value={6}>Chattisgarh</MenuItem>
                                            <MenuItem value={7}>Dadra & Nagar Haveli</MenuItem>
                                            <MenuItem value={8}> Daman & Diu	</MenuItem>
                                            <MenuItem value={9}>Delhi</MenuItem>
                                            <MenuItem value={10}>Goa</MenuItem>
                                            <MenuItem value={12}>Gujarat</MenuItem>
                                            <MenuItem value={13}>Haryana</MenuItem>
                                            <MenuItem value={14}>Himachal Pradesh	</MenuItem>
                                            <MenuItem value={15}>Jammu and Kashmir	</MenuItem>
                                            <MenuItem value={16}>Jharkhand</MenuItem>
                                            <MenuItem value={17}>Karnataka</MenuItem>
                                            <MenuItem value={18}>Kerala</MenuItem>
                                            <MenuItem value={19}>Lakshadweep Islands	</MenuItem>
                                            <MenuItem value={20}>Madhya Pradesh	</MenuItem>
                                            <MenuItem value={21}>Maharashtra</MenuItem>
                                            <MenuItem value={22}>Manipur</MenuItem>
                                            <MenuItem value={23}>Meghalaya</MenuItem>
                                            <MenuItem value={24}>Mizoram</MenuItem>
                                            <MenuItem value={25}>Nagaland</MenuItem>
                                            <MenuItem value={26}>Odisha</MenuItem>
                                            <MenuItem value={27}>Pondicherry</MenuItem>
                                            <MenuItem value={28}>Punjab</MenuItem>
                                            <MenuItem value={29}>Rajasthan</MenuItem>
                                            <MenuItem value={30}>Sikkim</MenuItem>
                                            <MenuItem value={31}>Tamil Nadu	</MenuItem>
                                            <MenuItem value={32}>Telangana</MenuItem>
                                            <MenuItem value={33}>Tripura</MenuItem>
                                            <MenuItem value={34}>Uttar Pradesh	</MenuItem>
                                            <MenuItem value={35}>Uttarakhand</MenuItem>
                                            <MenuItem value={36}>West Bengal</MenuItem>
                                        </Select>
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <LocalPhoneOutlinedIcon sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.phonenumber} name="SignUpPhonenumber"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, phonenumber: event.target.value})
                                        }} placeholder="PhoneNumber" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <br />
                                <Typography>Your data will be in INDIA data center.</Typography>
                                <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="I agree to the Terms of Service and Privacy Policy. " />
                                </FormGroup>
                             
                                <br />
                                <Link to="/dashboard" style={{textDecoration: 'none', color:'white'}}><Button variant="contained" fullWidth sx={loginSignup.Signupbtn}>Create your free account</Button></Link>
                                <br /><br />
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
                                  
                                    <br />
                                </Grid>
                            </Box>
                        </form>
                      </Grid>
                      {/* Signup form end */}
                   </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}
export default Signup;