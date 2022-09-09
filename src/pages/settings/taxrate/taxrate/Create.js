import React,{useState} from 'react';
import { IconButton,DialogActions,DialogContent,DialogTitle,Dialog,TextField,Button, Grid ,Box,Typography ,InputLabel,FormControl,OutlinedInput,InputAdornment,Table,FormControlLabel,Checkbox,FormGroup,TableRow,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import { userStyle } from '../../../PageStyle';

function Create(){

//Add modal
const [open, setOpen] = useState(false);
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

return(
<>
  <Button variant="contained" onClick={handleClickOpen} sx={userStyle.buttonadd} >ADD</Button>
    <Dialog PaperProps={{style: { borderRadius:"10px"}}} onClose={handleClose} open={open} keepMounted aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}> Add Tax Rate </DialogTitle>
          <DialogContent dividers>
          {/* FORM START */}
          <Box component="form"sx={{ '& .MuiTextField-root': {  maxWidth: '100%', minWidth:'100%',width:'400px' }, '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', }, }} noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item sm={12} md={12}>
                          <TextField id="outlined-required" fullWidth label="Name" size="small" />
                    </Grid>
                   <Grid item sm={12} md={12}>
                    <FormControl variant="outlined" size="small" fullWidth sx={{width:'100%'}}>
                        <InputLabel htmlFor="outlined-adornment-password">Tax Rate %</InputLabel>
                            <OutlinedInput id="outlined-adornment-password" label="Tax Rate %"
                              endAdornment={
                                <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" edge="end" >
                                            <FcInfo />
                                        </IconButton>
                                </InputAdornment>
                              }   
                            />
                        </FormControl>
                    </Grid>
                  </Grid>
                  <br />
                <Grid container>
                     <Grid item sm={12} md={12}>
                        <FormGroup>
                           <FormControlLabel control={<Checkbox  />} label={<div>For tax group only <FcInfo/></div>}/>
                        </FormGroup> <br />
                    </Grid>
                </Grid>
          </Box>
          {/* FORM END */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={handleClose} >  Save  </Button>
          <Button  variant="contained" color="error" autoFocus onClick={handleClose}>  Close</Button>
        </DialogActions>
      </Dialog>
</>

);

}
export default Create;