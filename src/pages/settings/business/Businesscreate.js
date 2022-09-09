import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box,Grid,FormControl,InputLabel,OutlinedInput,Tooltip,IconButton,Select,MenuItem,Button} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { userStyle } from '../../PageStyle';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Datetimepicker from '../../../components/Datetimepicker';

export default function Businesscreate(){

return(
 <Box  sx={userStyle.container}>
    <Grid container spacing={3} >
        <Grid item xs={12} sm={12} md={4} lg={4}> 
            <Grid sx={{ display: 'flex' }}  >
                <FormControl size="small" fullWidth>
                    <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                    <OutlinedInput id="component-outlined" label="Business Name" type="text"placeholder='pos by hilife AI' />
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={12} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} > < CalendarTodayOutlinedIcon /> </Grid>
                <FormControl size="small" fullWidth>
                    <Datetimepicker />
                </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={12} md={4} lg={4} >
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >< AddCircleOutlineOutlinedIcon /> </Grid>
                <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Default Profit Percent</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                                <Tooltip title="Default Profit Percent" arrow>
                                    <IconButton>
                                        <FcInfo />
                                    </IconButton>
                                </Tooltip>
                            }
                            label="Bank Identifier Code"
                        />
                </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >
                   <MoneyOutlinedIcon /> 
             </Grid>
             <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                 <InputLabel id="demo-select-small">Currency</InputLabel>
                 <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     label="Currency"
                     fullWidth
                 >
                     <MenuItem value="">
                     </MenuItem>
                     <MenuItem value={1}>Indian Rupees</MenuItem>
                     <MenuItem value={2}>phillippines -pesos</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >                              
             <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                 <InputLabel id="demo-select-small">Currency Symbol Placement</InputLabel>
                 <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     label="Currency Symbol Placement"
                     fullWidth
                 >
                     <MenuItem value="">
                     </MenuItem>
                     <MenuItem value={1}>Before Amount</MenuItem>
                     <MenuItem value={2}>After Amount</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >
                 < ScheduleOutlinedIcon />
             </Grid>
             <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                 <InputLabel id="demo-select-small">Time Zone</InputLabel>
                 <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     label="Time Zone"
                     // value={editcusModForm.editcusState}
                     // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusState: event.target.value }) }}
                     fullWidth
                 >
                     <MenuItem value="">
                     </MenuItem>
                     <MenuItem value={1}>xxx</MenuItem>
                     <MenuItem value={2}>yyy</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={12} md={4} lg={4} >
                 <Grid sx={{ display: 'flex' }}  >
                     <Grid sx={{ width: '210px' }}>
                        <FormControl variant="outlined" size="small" fullWidth>
                             <InputLabel htmlFor="outlined-adornment-password">Upload Logo</InputLabel>
                             <OutlinedInput id="outlined-adornment-password" label="Upload Logo"/>
                         </FormControl>
                     </Grid>
                        <FormControl size="small" fullWidth>
                        <Button  component="label" sx={userStyle.buttonadd} >   Browse<input type="file" hidden /> </Button>
                        <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}></Typography>
                        </FormControl>
                 </Grid>
             </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid sx={{ display: 'flex' }}  >
                <Grid sx={userStyle.spanIcons} >< CalendarTodayOutlinedIcon /> </Grid>
                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                        <InputLabel id="demo-select-small">Financial year Start Month</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Finanicial year Start Month"
                            // value={editcusModForm.editcusState}
                            // onChange={(event) => { setEditCusModForm({ ...editcusModForm, editcusState: event.target.value }) }}
                            fullWidth
                        >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={1}>xxx</MenuItem>
                        <MenuItem value={2}>yyy</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >
                 < CalculateOutlinedIcon />
             </Grid>
             <FormControl size="small" fullWidth sx={{ display: 'flex' }}>                                  
                 <InputLabel id="demo-select-small">Stock Accounting Method</InputLabel>        
                 <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     label="Stock Accounting Method"
                     fullWidth
                 >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={1}>FIFO(First in first out)</MenuItem>
                <MenuItem value={2}>LIFO(Last in first out)</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={12} md={4} lg={4} >
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >
                 < ModeEditOutlineOutlinedIcon />
             </Grid>
             <FormControl variant="outlined" size="small" fullWidth>
                 <InputLabel htmlFor="outlined-adornment-password">Transcation Edit Days</InputLabel>
                 <OutlinedInput
                     id="outlined-adornment-password"                                       
                     label="Transcation Edit Days"
                 />
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >
             < CalendarTodayOutlinedIcon />
             </Grid>
             <FormControl size="small" fullWidth sx={{ display: 'flex' }}>                                  
                 <InputLabel id="demo-select-small">Date Format</InputLabel>        
                 <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     label="Time Format"
                     fullWidth
                 >
                     <MenuItem value="">
                     </MenuItem>
                     <MenuItem value={1}>mm/dd/yyyy</MenuItem>
                     <MenuItem value={1}>dd/mm/yyyy</MenuItem>
                     <MenuItem value={2}>dd-mm-yyy</MenuItem>
                     <MenuItem value={2}>mm-dd-yyy</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={4}>
         <Grid sx={{ display: 'flex' }}  >
             <Grid sx={userStyle.spanIcons} >
             < ScheduleOutlinedIcon />
             </Grid>
             <FormControl size="small" fullWidth sx={{ display: 'flex' }}>                                  
                 <InputLabel id="demo-select-small">Time Format</InputLabel>        
                 <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     label="Time Format"
                     fullWidth
                 >
                     <MenuItem value="">
                     </MenuItem>
                     <MenuItem value={1}>12 hour</MenuItem>
                     <MenuItem value={2}>24 hour</MenuItem>
                 </Select>
             </FormControl>
         </Grid>
     </Grid>
 </Grid>
</Box>

 );

}