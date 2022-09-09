import React,{useState} from 'react';
import { Button,TextField,DialogActions,DialogContent,DialogTitle,Dialog, Grid ,Box} from '@mui/material';
import {FcInfo} from 'react-icons/fc';
import { userStyle } from '../../../PageStyle';

function TaxGrpCreate(){

const [hidden, setHidden] = useState(true);

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
    <Dialog PaperProps={{  style: { borderRadius:"10px"}}} onClose={handleClose} open={open} keepMounted aria-describedby="alert-dialog-slide-description" >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}> Add tax group</DialogTitle>
        <DialogContent dividers>
          <Box component="form"sx={{ '& .MuiTextField-root': {  maxWidth: '100%', minWidth:'100%',width:'400px' }, '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0', }, }} noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item sm={12} md={12}>
                            <TextField id="outlined-required" fullWidth label="Name" size="small" />
                    </Grid>
                    <Grid item sm={12} md={12}>
                            <TextField id="outlined-required" fullWidth label="Sub taxes" size="small" />
                    </Grid>
                </Grid>
              <br />
        </Box>
      </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus onClick={handleClose} > Save </Button>
          <Button  variant="contained" color="error" autoFocus onClick={handleClose}>Close </Button>
        </DialogActions>
      </Dialog>
</>


);

}
export default TaxGrpCreate;