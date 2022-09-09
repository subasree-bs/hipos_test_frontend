import React, { useState } from "react";
import { Box, Typography,Button, Grid, InputLabel, Checkbox,Dialog,DialogContent,DialogTitle,TextField,DialogActions, FormControlLabel, FormControl, MenuItem, Select } from '@mui/material';
import {userStyle} from '../../../PageStyle';
import {FaInfo} from 'react-icons/fa';

const Sechemecreate = () =>{

//Add modal
const [open, setOpen] = useState(false);
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

//HIDDEN INPUTS
const [hiddenInputs, sethiddenInputs] = useState(true);

return(

  <Box >
      <Button sx={userStyle.buttonadd} onClick={handleClickOpen} >ADD</Button>

        {/* ADDMODAL */}

        <Dialog onClose={handleClose} open={open} keepMounted aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="customized-dialog-title" onClose={handleClose}> Add new invoice scheme </DialogTitle>
            <DialogContent dividers>
             <Box component="form" sx={{'& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', }, }}  noValidate autoComplete="off">
                <Grid container spacing={5}>
                  <Grid item xs={12} md={4}>
                        <Button variant='contained' onClick={()=>(sethiddenInputs(false))} sx={{backgroundColor:'grey !important',width:'160px',minHeight:'80px'}}>FORMAT :  <br /> XXXX</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant='contained'  onClick={()=>(sethiddenInputs(false))} sx={{backgroundColor:'grey !important',width:'160px',minHeight:'80px'}}>FORMAT:  <br /> 2022-XXXX</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography>Preview</Typography>
                        <Typography>#0000</Typography>
                    </Grid>
                </Grid>
              <br />
              <Grid container>
                <Grid item xs={12} md={12}>
                <TextField required id="outlined-required" label="Name:" size="small" fullWidth/>
                </Grid>
              </Grid>
              <br />

        {/* HIDDEN INPUTS START*/}

          {!hiddenInputs? <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                 <Grid sx={{ display: 'flex' }}  >
                      <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='Prefix'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                 <Grid sx={{ display: 'flex' }}  >
                        <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                            <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='Start from'  sx={{borderRadius:'0px !important',
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
              <Grid item xs={12} md={6}>
                 <Grid sx={{ display: 'flex' }}  >
                      <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                          <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                            <InputLabel id="demo-select-small">Number of digits</InputLabel>
                                <Select
                                        labelId="demo-select-small"
                                        sx={{borderRadius:'0px !important',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: '1px solid #B97DF0',
                                            borderRadius:'0px !important',
                                        },}}
                                        id="demo-select-small"
                                        label='Number of digits'
                                        // value={ProfitLoss.ProfitAddLocation}
                                        // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                         >
                                        <MenuItem value={1}>None</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>
                    </Grid>
                <Grid item xs={12} md={6}>
                   <FormControlLabel  label="Set as default"control={ <Checkbox />} />
                </Grid>
          </Grid>
    <br />
    </>
     : null  }     

       {/* HIDDEN INPUTS START*/}      
       
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={handleClose} > Save</Button>
          <Button  variant="contained" color="error" autoFocus onClick={handleClose}>  Close </Button>
        </DialogActions>
      </Dialog>
    </Box>
    );
}

export default Sechemecreate;