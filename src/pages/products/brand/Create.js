import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { userStyle } from '../../PageStyle';

function Brandcreate() {

  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const addhandleClickOpen = () => {
    seteditOpen(true);
  };
  const addhandleClose = () => {
    seteditOpen(false);
  };

  // ******** Text field ******** //
  const [brandAdd, setBrandAdd] = useState({
    brandAddBrandName: "", brandAddShortDescription: "",
  });

  return (
    <Box>
      <Button sx={userStyle.buttonadd} onClick={addhandleClickOpen}>&ensp;ADD</Button>

      <Dialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={addhandleClose}
        open={editopen}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={addhandleClose}>
          Edit brand
        </DialogTitle>
        <DialogContent dividers sx={userStyle.container}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Name"
              size="small"
              value={brandAdd.brandAddBrandName}
              onChange={(e) => { setBrandAdd({ ...brandAdd, brandAddBrandName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Short Description"
              size="small"
              value={brandAdd.brandAddShortDescription}
              onChange={(e) => { setBrandAdd({ ...brandAdd, brandAddShortDescription: e.target.value }) }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus > Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={addhandleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );

}
export default Brandcreate;