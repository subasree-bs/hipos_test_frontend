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

    const [signupForm, setSignupForm] = useState({name: "", email:"", password:"", country: "India", location: "Tamil Nadu", phonenumber:""});
    
    const sendSignupRequest = async () => {
        const res = await axios.post("http://localhost:5000/api/signup",{
            name: signupForm.name,
            email: signupForm.email,
            password: signupForm.password,
            country: signupForm.country,
            location: signupForm.location,
            phonenumber: signupForm.phonenumber
        }).catch((err) => console.log(err));
        const data = await res.data; 
        return data;
    }
        
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        sendSignupRequest().then(() => history('/'));
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
                                        <TextField fullWidth value={signupForm.name} name="name"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, name: event.target.value});
                                           
                                        }} placeholder="Company Name" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <EmailOutlinedIcon sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.email} name="email" type="email"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, email: event.target.value});
                                            
                                        }} placeholder="Email Address" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <LockOutlinedIcon sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.password} name="password" type="password"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, password: event.target.value});
                                           
                                        }} placeholder="Password" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <PublicOutlinedIcon sx={loginSignup.inputicon} />
                                        <Select fullWidth value={signupForm.country} name="country"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, country: event.target.value});
                                        }} sx={loginSignup.inputfield}>
                                            <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                            <MenuItem value="Albania">Albania</MenuItem>
                                            <MenuItem value="Algeria">Algeria</MenuItem>
                                            <MenuItem value="Andorra">Andorra</MenuItem>
                                            <MenuItem value="Angola">Angola</MenuItem>
                                            <MenuItem value="Antigua and Deps">Antigua and Deps</MenuItem>
                                            <MenuItem value="Argentina">Argentina</MenuItem>
                                            <MenuItem value="Austria">Austria</MenuItem>
                                            <MenuItem value="Australia">Australia</MenuItem>
                                            <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                                            <MenuItem value="Bahamas">Bahamas</MenuItem>
                                            <MenuItem value="Bahrain">Bahrain</MenuItem>
                                            <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                            <MenuItem value="Barbados">Barbados</MenuItem>
                                            <MenuItem value="Belarus">Belarus</MenuItem>
                                            <MenuItem value="Belgium">Belgium</MenuItem>
                                            <MenuItem value="Belize">Belize</MenuItem>
                                            <MenuItem value="Benin">Benin</MenuItem>
                                            <MenuItem value="Bhutan">Bhutan</MenuItem>
                                            <MenuItem value="Bolivia">Bolivia</MenuItem>
                                            <MenuItem value="Bosnia Herzegovina">Bosnia Herzegovina</MenuItem>
                                            <MenuItem value="Botswana">Botswana</MenuItem>
                                            <MenuItem value="Brazil">Brazil</MenuItem>
                                            <MenuItem value="Brunei">Brunei</MenuItem>
                                            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                                            <MenuItem value="Burkina">Burkina</MenuItem>
                                            <MenuItem value="Burundi">Burundi</MenuItem>
                                            <MenuItem value="Cambodia">Cambodia</MenuItem>
                                            <MenuItem value="Cameroon">Cameroon</MenuItem>
                                            <MenuItem value="Canada">Canada</MenuItem>
                                            <MenuItem value="Cape Verde">Cape Verde</MenuItem>
                                            <MenuItem value="Central African Rep">Central African Rep</MenuItem>
                                            <MenuItem value="Chad">Chad</MenuItem>
                                            <MenuItem value="Chile">Chile</MenuItem>
                                            <MenuItem value="China">China</MenuItem>
                                            <MenuItem value="Colombia">Colombia</MenuItem>
                                            <MenuItem value="Comoros">Comoros</MenuItem>
                                            <MenuItem value="Congo">Congo</MenuItem>
                                            <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                                            <MenuItem value="Croatia">Croatia</MenuItem>
                                            <MenuItem value="Cuba">Cuba</MenuItem>
                                            <MenuItem value="Cyprus">Cyprus</MenuItem>
                                            <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                                            <MenuItem value="Denmark">Denmark</MenuItem>
                                            <MenuItem value="Djibouti">Djibouti</MenuItem>
                                            <MenuItem value="Dominica">Dominica</MenuItem>
                                            <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                                            <MenuItem value="East Timor">East Timor</MenuItem>
                                            <MenuItem value="Ecuador">Ecuador</MenuItem>
                                            <MenuItem value="Egypt">Egypt</MenuItem>
                                            <MenuItem value="El Salvador">El Salvador</MenuItem>
                                            <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                                            <MenuItem value="Eritrea">Eritrea</MenuItem>
                                            <MenuItem value="Estonia">Estonia</MenuItem>
                                            <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                                            <MenuItem value="Fiji">Fiji</MenuItem>
                                            <MenuItem value="Finland">Finland</MenuItem>
                                            <MenuItem value="France">France</MenuItem>
                                            <MenuItem value="Gabon">Gabon</MenuItem>
                                            <MenuItem value="Gambia">Gambia</MenuItem>
                                            <MenuItem value="Georgia">Georgia</MenuItem>
                                            <MenuItem value="Germany">Germany</MenuItem>
                                            <MenuItem value="Ghana">Ghana</MenuItem>
                                            <MenuItem value="Greece">Greece</MenuItem>
                                            <MenuItem value="Grenada">Grenada</MenuItem>
                                            <MenuItem value="Guatemala">Guatemala</MenuItem>
                                            <MenuItem value="Guinea">Guinea</MenuItem>
                                            <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
                                            <MenuItem value="Guyana">Guyana</MenuItem>
                                            <MenuItem value="Haiti">Haiti</MenuItem>
                                            <MenuItem value="Honduras">Honduras</MenuItem>
                                            <MenuItem value="Hungary">Hungary</MenuItem>
                                            <MenuItem value="Iceland">Iceland</MenuItem>
                                            <MenuItem value="India" default>India</MenuItem>
                                            <MenuItem value="Indonesia">Indonesia</MenuItem>
                                            <MenuItem value="Iran">Iran</MenuItem>
                                            <MenuItem value="Iraq">Iraq</MenuItem>
                                            <MenuItem value="Ireland">Ireland</MenuItem>
                                            <MenuItem value="Israel">Israel</MenuItem>
                                            <MenuItem value="Italy">Italy</MenuItem>
                                            <MenuItem value="Ivory Coast">Ivory Coast</MenuItem>
                                            <MenuItem value="Jamaica">Jamaica</MenuItem>
                                            <MenuItem value="Japan">Japan</MenuItem>
                                            <MenuItem value="Jordan">Jordan</MenuItem>
                                            <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                                            <MenuItem value="Kenya">Kenya</MenuItem>
                                            <MenuItem value="Kiribati">Kiribati</MenuItem>
                                            <MenuItem value="Korea North">Korea North</MenuItem>
                                            <MenuItem value="Korea South">Korea South</MenuItem>
                                            <MenuItem value="Kosovo">Kosovo</MenuItem>
                                            <MenuItem value="Kuwait">Kuwait</MenuItem>
                                            <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
                                            <MenuItem value="Laos">Laos</MenuItem>
                                            <MenuItem value="Latvia">Latvia</MenuItem>
                                            <MenuItem value="Lebanon">Lebanon</MenuItem>
                                            <MenuItem value="Lesotho">Lesotho</MenuItem>
                                            <MenuItem value="Liberia">Liberia</MenuItem>
                                            <MenuItem value="Libya">Libya</MenuItem>
                                            <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                                            <MenuItem value="Lithuania">Lithuania</MenuItem>
                                            <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                                            <MenuItem value="Madagascar">Madagascar</MenuItem>
                                            <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                                            <MenuItem value="Malawi">Malawi</MenuItem>
                                            <MenuItem value="Malaysia">Malaysia</MenuItem>
                                            <MenuItem value="Maldives">Maldives</MenuItem>
                                            <MenuItem value="Mali">Mali</MenuItem>
                                            <MenuItem value="Malta">Malta</MenuItem>
                                            <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                                            <MenuItem value="Mauritania">Mauritania</MenuItem>
                                            <MenuItem value="Mauritius">Mauritius</MenuItem>
                                            <MenuItem value="Mexico">Mexico</MenuItem>
                                            <MenuItem value="Micronesia">Micronesia</MenuItem>
                                            <MenuItem value="Moldova">Moldova</MenuItem>
                                            <MenuItem value="Monaco">Monaco</MenuItem>
                                            <MenuItem value="Mongolia">Mongolia</MenuItem>
                                            <MenuItem value="Montenegro">Montenegro</MenuItem>
                                            <MenuItem value="Morocco">Morocco</MenuItem>
                                            <MenuItem value="Mozambique">Mozambique</MenuItem>
                                            <MenuItem value="Madagascar">Madagascar</MenuItem>
                                            <MenuItem value="Myanmar">Myanmar, {'Burma'}</MenuItem>
                                            <MenuItem value="Namibia">Namibia</MenuItem>
                                            <MenuItem value="Nauru">Nauru</MenuItem>
                                            <MenuItem value="Nepal">Nepal</MenuItem>
                                            <MenuItem value="Netherlands">Netherlands</MenuItem>
                                            <MenuItem value="New Zealand">New Zealand</MenuItem>
                                            <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                                            <MenuItem value="Niger">Niger</MenuItem>
                                            <MenuItem value="Nigeria">Nigeria</MenuItem>
                                            <MenuItem value="Norway">Norway</MenuItem>
                                            <MenuItem value="Oman">Oman</MenuItem>
                                            <MenuItem value="Pakistan">Pakistan</MenuItem>
                                            <MenuItem value="Palau">Palau</MenuItem>
                                            <MenuItem value="Panama">Panama</MenuItem>
                                            <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                                            <MenuItem value="Paraguay">Paraguay</MenuItem>
                                            <MenuItem value="Peru">Peru</MenuItem>
                                            <MenuItem value="Philippines">Philippines</MenuItem>
                                            <MenuItem value="Poland">Poland</MenuItem>
                                            <MenuItem value="Portugal">Portugal</MenuItem>
                                            <MenuItem value="Qatar">Qatar</MenuItem>
                                            <MenuItem value="Romania">Romania</MenuItem>
                                            <MenuItem value="Russian Federation">Russian Federation</MenuItem>
                                            <MenuItem value="Rwanda">Rwanda</MenuItem>
                                            <MenuItem value="St Kitts and Nevis">St Kitts and Nevis</MenuItem>
                                            <MenuItem value="St Lucia">St Lucia</MenuItem>
                                            <MenuItem value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</MenuItem>
                                            <MenuItem value="Samoa">Samoa</MenuItem>
                                            <MenuItem value="San Marino">San Marino</MenuItem>
                                            <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
                                            <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                                            <MenuItem value="Senegal">Senegal</MenuItem>
                                            <MenuItem value="Serbia">Serbia</MenuItem>
                                            <MenuItem value="Seychelles">Seychelles</MenuItem>
                                            <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                                            <MenuItem value="Singapore">Singapore</MenuItem>
                                            <MenuItem value="Slovakia">Slovakia</MenuItem>
                                            <MenuItem value="Slovenia">Slovenia</MenuItem>
                                            <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                                            <MenuItem value="Somalia">Somalia</MenuItem>
                                            <MenuItem value="South Africa">South Africa</MenuItem>
                                            <MenuItem value="Spain">Spain</MenuItem>
                                            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                            <MenuItem value="Sudan">Sudan</MenuItem>
                                            <MenuItem value="Suriname">Suriname</MenuItem>
                                            <MenuItem value="Swaziland">Swaziland</MenuItem>
                                            <MenuItem value="Sweden">Sweden</MenuItem>
                                            <MenuItem value="Switzerland">Switzerland</MenuItem>
                                            <MenuItem value="Syria">Syria</MenuItem>
                                            <MenuItem value="Taiwan">Taiwan</MenuItem>
                                            <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                                            <MenuItem value="Thailand">Thailand</MenuItem>
                                            <MenuItem value="Togo">Togo</MenuItem>
                                            <MenuItem value="Tonga">Tonga</MenuItem>
                                            <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
                                            <MenuItem value="Tunisia">Tunisia</MenuItem>
                                            <MenuItem value="Turkey">Turkey</MenuItem>
                                            <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                                            <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                                            <MenuItem value="Uganda">Uganda</MenuItem>
                                            <MenuItem value="Ukraine">Ukraine</MenuItem>
                                            <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
                                            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                            <MenuItem value="United States">United States</MenuItem>
                                            <MenuItem value="Uruguay">Uruguay</MenuItem>
                                            <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                                            <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                                            <MenuItem value="Vatican City">Vatican City</MenuItem>
                                            <MenuItem value="Venezuela">Venezuela</MenuItem>
                                            <MenuItem value="Vietnam">Vietnam</MenuItem>
                                            <MenuItem value="Yemen">Yemen</MenuItem>
                                            <MenuItem value="Zambia">Zambia</MenuItem>
                                            <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                                        </Select>
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <FmdGoodOutlinedIcon sx={loginSignup.inputicon} />
                                        <Select fullWidth value={signupForm.location} name="location"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, location: event.target.value})
                                        }} sx={loginSignup.inputfield} id="signupSelect">
                                           <MenuItem value=""></MenuItem>
                                            <MenuItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</MenuItem>
                                            <MenuItem value="Andhra Pradesh">Andhra Pradesh	</MenuItem>
                                            <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                            <MenuItem value="Assam">Assam</MenuItem>
                                            <MenuItem value="Bihar">Bihar</MenuItem>
                                            <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                                            <MenuItem value="Chattisgarh">Chattisgarh</MenuItem>
                                            <MenuItem value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</MenuItem>
                                            <MenuItem value="Daman and Diu"> Daman and Diu</MenuItem>
                                            <MenuItem value="Delhi">Delhi</MenuItem>
                                            <MenuItem value="Goa">Goa</MenuItem>
                                            <MenuItem value="Gujarat">Gujarat</MenuItem>
                                            <MenuItem value="Haryana">Haryana</MenuItem>
                                            <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                            <MenuItem value="Jammu and Kashmir">Jammu and Kashmir</MenuItem>
                                            <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                                            <MenuItem value="Karnataka">Karnataka</MenuItem>
                                            <MenuItem value="Kerala">Kerala</MenuItem>
                                            <MenuItem value="Lakshadweep Islands">Lakshadweep Islands</MenuItem>
                                            <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                            <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                            <MenuItem value="Manipur">Manipur</MenuItem>
                                            <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                                            <MenuItem value="Mizoram">Mizoram</MenuItem>
                                            <MenuItem value="Nagaland">Nagaland</MenuItem>
                                            <MenuItem value="Odisha">Odisha</MenuItem>
                                            <MenuItem value="Pondicherry">Pondicherry</MenuItem>
                                            <MenuItem value="Punjab">Punjab</MenuItem>
                                            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                            <MenuItem value="Sikkim">Sikkim</MenuItem>
                                            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                            <MenuItem value="Telangana">Telangana</MenuItem>
                                            <MenuItem value="Tripura">Tripura</MenuItem>
                                            <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                            <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                            <MenuItem value="West Bengal">West Bengal</MenuItem>
                                        </Select>
                                    </Box>
                                </Box>
                                <Box sx={loginSignup.forminputfield}>
                                    <Box sx={loginSignup.inputalign}>
                                        <LocalPhoneOutlinedIcon sx={loginSignup.inputicon} />
                                        <TextField fullWidth value={signupForm.phonenumber} name="phonenumber"
                                        onChange={ (event) => {
                                            setSignupForm({...signupForm, phonenumber: event.target.value});
                                        }} placeholder="PhoneNumber" variant="outlined" sx={loginSignup.inputfield} />
                                    </Box>
                                </Box>
                                <br />
                                <Typography>Your data will be in INDIA data center.</Typography>
                                <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="I agree to the Terms of Service and Privacy Policy. " />
                                </FormGroup>
                             
                                <br />
                                {/* <Link to="/dashboard" style={{textDecoration: 'none', color:'white'}}><Button type="submit" variant="contained" fullWidth sx={loginSignup.Signupbtn}>Create your free account</Button></Link> */}
                                <Button variant="contained" type="submit" fullWidth sx={loginSignup.Signupbtn}>Create your free account</Button>
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