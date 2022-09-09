import React,{ useState} from 'react';
import { Button,Checkbox,TextField,Box,Grid,FormControlLabel,FormGroup ,TextareaAutosize,Typography,FormControl,Select,TableContainer,Paper,Table,TableHead,TableRow,TableBody,TableCell,InputLabel,OutlinedInput,Tooltip,InputAdornment} from '@mui/material';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineTable} from 'react-icons/ai';
import { FaTextWidth,FaTextHeight} from 'react-icons/fa';
import {ImArrowRight,ImArrowLeft} from 'react-icons/im';
import {CgArrowsHAlt} from 'react-icons/cg'
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';

const Barcodecreate = ()=>{
    return(
        <>
        <Typography  sx={userStyle.HeaderText}>Add barcode sticker setting </Typography>
            <Box sx={userStyle.container} spacing={3}>
              <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >  <Grid container>
                        <Grid item sm={12} md={12}>
                            <TextField required fullWidth id="outlined-required" label="Sticker Sheet setting Name" size="small" />
                        </Grid>
                        </Grid>
                        <br />
                        <Grid item md={12} sm={12} xs={12}>  
                            <FormControl size="small" fullWidth>
                                <TextareaAutosize aria-label="minimum height" minRows={3} placeholder='Sticker Sheet setting Description' style={{ border: '1px solid #B97DF0' }} />
                            </FormControl>
                            </Grid>
                        <Grid container>
                            <Grid item sm={12} md={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="Continous feed or rolls" />
                            </FormGroup>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><ImArrowRight /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Additional top margin (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><ImArrowLeft /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Additional left margin (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><FaTextWidth /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Width of sticker (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><FaTextHeight /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Height of sticker (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    <br />
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><FaTextWidth /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Paper width (In Inches)'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
    
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        <br />
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><FaTextHeight /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Paper height (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
    
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    <br />
                    <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><BsThreeDots /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Stickers in one row:'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
    
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><CgArrowsHAlt /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Distance between two rows (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
    
                                            </TextField>
                                    </FormControl>
                                </Grid>
                        </Grid>
                        <br />
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><CgArrowsHAlt /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='Distance between two columns (In Inches):'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
    
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                 <Grid style={{ display: 'flex'}}  >
                                    <Grid sx={userStyle.spanIconTax}><AiOutlineTable /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                                            <TextField size="small" label='No. of Stickers per sheet:'  sx={{borderRadius:'0px !important',margin:'0px !important',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: '1px solid #B97DF0',
                                                    borderRadius:'0px !important',
                                                },}}>
    
                                            </TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                            <Grid item sm={12} md={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="Set as default" />
                            </FormGroup>
                            </Grid>
                        </Grid>
                    <Box sx={{float:'right'}}>
                     <Button variant='contained' sx={userStyle.buttonadd}>SAVE</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

// function Barcodecreate() {
//     return(
//         <Box sx={{display:'flex', }} >
//           <Sidebar />
//           <Box sx={{width:'100%',overflowX:'hidden'}}>
//               <Box component="main" sx={{ padding: '30px',}}><br /><br />
//                 <Barcodecreatelist /><br /><br />
//                 <Footer />
//               </Box>
//           </Box>
//         </Box>
//     );
// }

export default Barcodecreate;