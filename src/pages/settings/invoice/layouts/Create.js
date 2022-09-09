import React,{ useState} from 'react';
import { Checkbox,FormControlLabel,Box,Button,FormGroup,MenuItem, TextField,IconButton,Grid ,TextareaAutosize,Typography,FormControl,Select,TableContainer,Paper,Table,TableHead,TableRow,TableBody,TableCell,InputLabel,OutlinedInput,Tooltip,InputAdornment} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineTable} from 'react-icons/ai';
import {FaInfo,FaTextWidth,FaTextHeight} from 'react-icons/fa';
import {ImArrowRight,ImArrowLeft} from 'react-icons/im';
import {CgArrowsHAlt} from 'react-icons/cg';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../../../components/header/Sidebar';
import Footer from '../../../../components/footer/Footer';
import { userStyle } from '../../../PageStyle';


function Layoutcreate(){

const [editorState, setEditorState] = useState( 
    MUIEditorState.createEmpty(), 
    ) 
    const onChange = newState => { 
    setEditorState(newState) 
    } 
    
const [editorSecondState, setEditorSecondState] = useState( 
    MUIEditorState.createEmpty(), 
    ) 
    const onChangeSecond = newState => { 
        setEditorSecondState(newState) 
    } 

return(
<Box>
    <Typography  sx={userStyle.HeaderText}>Add new invoice layout</Typography>
    <Box sx={userStyle.container}>
        <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >
            <Grid container spacing={2} >
                <Grid item sm={12} md={6}>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',}}>
                        <TextField size="small" label='search Product' sx={{borderRadius:'0px !important',margin:'0px !important',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid #B97DF0',
                                borderRadius:'0px !important',
                            },}}>

                        </TextField>
                      </FormControl>
                    </Grid>
              
                <Grid item sm={12} md={6}>
                <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small"  fullWidth label='Customer Group Name'
                                    sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}  >
                                    <MenuItem value={1}>Classic (For normal printer)</MenuItem>
                                    <MenuItem value={2}>Elegant (For normal printer)</MenuItem>
                                    <MenuItem>Detailed (For normal printer)</MenuItem>
                                    <MenuItem>Slim (Recommended for thermal line receipt printer, 80mm paper size)</MenuItem>
                                    <MenuItem>Slim 2 (Recommended for thermal line receipt printer, 80mm and 58mm paper size)</MenuItem>
                              
                                </Select>   
                            </FormControl>
                        </Grid>
                    </Grid>    
                    <br /> 
                <Grid container spacing={2} >
                    <Grid item sm={12} md={6}>
                        <FormControl size="small">
                                <Button  component="label"  sx={userStyle.buttonadd} >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                            <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max 1 MB, jpeg,gif,png formats only.</Typography>
                        </FormControl>
                </Grid>
              
                <Grid item sm={12} md={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Show invoice logo" />
                    </FormGroup>
                </Grid>
            </Grid>   
            <br /> 
            <Grid container>
            <Grid item sm={12} md={12}>
                      <MUIEditor editorState={editorState} onChange={onChange} />
                </Grid>
            </Grid>  
            <br />
              <Grid container spacing={2}>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Sub Heading Line 1:" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Sub Heading Line 2:" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Sub Heading Line 3:" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Sub Heading Line 4:" size="small" />
                        </Grid>
                </Grid> <br />
                <Grid container spacing={2}>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Sub Heading Line 4:" size="small" />
                        </Grid>
                </Grid> 
        </Box>
    </Box>
    <br />
    <Box sx={userStyle.container}>
        <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >

            <Grid container spacing={2}>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Invoice heading" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Heading Suffix for not paid" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Heading Suffix for paid" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormControl variant="outlined" size="small" fullWidth >
                                <InputLabel htmlFor="outlined-adornment-password">Proforma invoice heading:</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end" >
                                                        <FcInfo />
                                                    </IconButton>
                                                </InputAdornment>
                                        
                                        }
                                        label="Proforma invoice heading:"
                                    />
                                </FormControl>
                        </Grid>
                </Grid> <br />
                <Grid container spacing={2}>
                        <Grid item sx={12} sm={6} md={3}>
                         <FormControl variant="outlined" size="small" fullWidth >
                                <InputLabel htmlFor="outlined-adornment-password">Quotation Heading</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end" >
                                                        <FcInfo />
                                                    </IconButton>
                                                </InputAdornment>
                                        
                                        }
                                        label="Quotation Heading"
                                    />
                                </FormControl>
                        </Grid>
                </Grid> <br />
                <Grid container spacing={2}>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Invoice no. label" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Quotation no. label" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Date Label" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Due date label" size="small" />
                        </Grid>
                </Grid> <br />
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show due date" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Date time format" size="small" />
                            <Typography>Enter date and time format in PHP datetime format. If blank business date time format will be applied</Typography>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Sales Person Label" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <TextField id="outlined-required" fullWidth label="Commission agent label" size="small" />
                        </Grid>
                </Grid> <br />      
               
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show business name" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox defaultChecked />} label=" Show location name" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show Sales Person" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show commission agent" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />     
                <Typography variant='h6'>Fields for customer details:</Typography> 

                <Grid container spacing={2}>
                    <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label=" Show Customer information" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                             <TextField id="outlined-required" fullWidth label="Customer Label" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox defaultChecked />} label="Show client ID" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                             <TextField id="outlined-required" fullWidth label="Client ID Label" size="small" />
                        </Grid>
                </Grid> <br />      
                <Grid container spacing={2}>
                 
                        <Grid item sx={12} sm={6} md={3}>
                             <TextField id="outlined-required" fullWidth label="Client tax number label" size="small" />
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox defaultChecked />} label="Show reward point" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />   
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Custom Field 1" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label="Custom Field 2" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Custom Field 3" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Custom Field 4" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />  
                <Typography variant='h6'>Fields to be shown in location address:</Typography> 
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  defaultChecked/>} label=" Landmark" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox defaultChecked/>} label="City" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  defaultChecked/>} label=" State" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  defaultChecked/>} label="Country" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />  
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  defaultChecked/>} label="Zip code" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label="Custom Field 1" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Custom Field 2" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Custom Field 3" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />  
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label="Custom Field 4" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />   
                <Typography variant='h6'>Fields for Communication details</Typography> 
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  defaultChecked/>} label="Mobile number" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label="Alternate number" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Email" />
                            </FormGroup>
                        </Grid>
                      
                </Grid> <br />  
                <Typography variant='h6'>Fields for Communication details</Typography> 
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  defaultChecked/>} label="Tax 1 details" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label="Tax 2 details" />
                            </FormGroup>
                        </Grid> 
                </Grid> <br />  
            </Box>
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >
             <Grid container spacing={2}>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Product Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Quantity Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                         <TextField id="outlined-required" fullWidth label="Unit Price Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Subtotal Label" size="small" />
                    </Grid>
                </Grid> <br />     
                <Grid container spacing={2}>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Category or HSN code label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Total quantity label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                         <TextField id="outlined-required" fullWidth label="Item discount label" size="small" />
                    </Grid>
                </Grid> <br />    
                <Typography variant='h6'>Product details to be shown:</Typography> 
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label=" Show brand" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox defaultChecked/>} label="Show SKU" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show category code or HSN code" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label={<><Typography>Show sale description</Typography></>} />
                            </FormGroup>
                            <Typography>(Product IMEI or Serial Number)</Typography>
                        </Grid>
                </Grid> <br />             
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Custom Field1" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label=" Custom Field2" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label=" Custom Field3" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label='Custom Field4'/>
                            </FormGroup>
                       
                        </Grid>
                </Grid> <br />  
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show product imagea" />
                            </FormGroup>
                        </Grid>
                </Grid> <br />    
                <Grid container spacing={2}>
                     <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show warranty name" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox />} label="Show warranty expiry date" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox  />} label="Show warranty description" />
                            </FormGroup>
                        </Grid>
                      
                </Grid> <br />                
            </Box>                             
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >
                <Grid container spacing={2}>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Subtotal Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Discount Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                         <TextField id="outlined-required" fullWidth label="Tax Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Total label" size="small" />
                    </Grid>
                </Grid> <br />   
                <Grid container spacing={2}>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Round off label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Total Due Label (Current sale)" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                         <TextField id="outlined-required" fullWidth label="Amount Paid Label" size="small" />
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Show Payment information" />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Show Barcode" />
                        </FormGroup>
                    </Grid>
                </Grid> <br />       
                <Grid container spacing={2}>
                    <Grid item sx={12} sm={6} md={3}>
                        <TextField id="outlined-required" fullWidth label="Round off label" size="small" />
                    </Grid>
                  
                    <Grid item sx={12} sm={6} md={5}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label={<>Show total balance due (All sales)<FcInfo/></>} />
                        </FormGroup>
                    </Grid>
                    <Grid item sx={12} sm={6} md={4}>
                         <FormControl variant="outlined" size="small" fullWidth >
                                <InputLabel htmlFor="outlined-adornment-password">Quotation Heading</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end" >
                                                        <FcInfo />
                                                    </IconButton>
                                                </InputAdornment>
                                        }
                                        label="Quotation Heading"
                                    />
                                </FormControl>
                         </Grid>
                     </Grid> <br />    
                <Grid container spacing={2}>
                
                    <Grid item sx={12} sm={6} md={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Show total in words " />
                        </FormGroup>
                       
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Status *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Status *"
                                    fullWidth
                                >
                                    <MenuItem value={1}>Admin</MenuItem>
                                    <MenuItem value={2}>Cashier</MenuItem>
                                    <MenuItem value={3}>Admin - Franchiese</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid>
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                            </Grid>
                         </Grid>
                    </Grid>
                    
                </Grid> <br />          
            </Box>                             
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >                                     
                <MUIEditor editorState={editorSecondState} onChange={onChangeSecond} /> 
                    <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label=" Set as default" />
                            </FormGroup>
                        </Grid>
                    </Grid>
            </Box>                             
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >                                     
                <Typography variant='h6'>Product details to be shown:</Typography> 
                <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label=" Show QR Code" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <Typography variant='h6'>Product details to be shown:</Typography> 
                <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Business Name" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=" Business location address" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=" Business tax 1" />
                            </FormGroup>
                        </Grid>
                </Grid>
                <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=" Business tax 2" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Invoice No." />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Invoice Datetime" />
                            </FormGroup>
                        </Grid>
                </Grid>
                <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=" Subtotal" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Total amount with tax" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Total Tax" />
                            </FormGroup>
                        </Grid>
                </Grid>
                <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=" Customer name" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={4}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Invoice URL" />
                            </FormGroup>
                        </Grid>
                </Grid>
            </Box>                             
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >                                     
            <Typography variant='h6'>Types of service module settings</Typography> 
            <br />
                  <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                 <TextField id="outlined-required" fullWidth label="Types of service label" size="small" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=" Show types of service" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Show types of service custom fields" />
                            </FormGroup>
                        </Grid>
                    </Grid>
            </Box>                             
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >                                     
            <Typography variant='h6'>Restaurant module settings</Typography> 
            <br />
                 <Grid container spacing={2}> 
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show table" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                 <TextField id="outlined-required" fullWidth label="Table label" size="small" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show service staff" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                 <TextField id="outlined-required" fullWidth label="Service staff label" size="small" />
                            </FormGroup>
                        </Grid>
                    </Grid>
            </Box>                             
        </Box>
        <br />
        <Box sx={userStyle.container}>
            <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0',}, }} noValidate autoComplete="off" >                                     
            <Typography variant='h6'>Credit Note / Sell Return Details</Typography> 
            <br />
                 <Grid container spacing={2}> 
                 <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                 <TextField id="outlined-required" fullWidth label="THeading" size="small" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                 <TextField id="outlined-required" fullWidth label="Reference Number" size="small" />
                            </FormGroup>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <FormGroup>
                                 <TextField id="outlined-required" fullWidth label="Total Amount" size="small" />
                            </FormGroup>
                        </Grid>
                    </Grid>
            </Box>                             
        </Box>
        <br />
        <Box sx={{textAlign:'center'}}>
            <Button variant='contained' sx={{backgroundColor:'#7009ab'}}>SAVE</Button>
        </Box>
</Box>
);

}

// function Layoutcreate() {
//     return(
//         <Box sx={{display:'flex', }} >
//           <Sidebar />
//           <Box sx={{width:'100%',overflowX:'hidden'}}>
//               <Box component="main" sx={{ padding: '30px',}}><br /><br />
//                 <Layoutcreatelist /><br /><br />
//                 <Footer />
//               </Box>
//           </Box>
//         </Box>
//     );
// }

export default Layoutcreate;