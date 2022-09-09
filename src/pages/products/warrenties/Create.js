import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { userStyle } from '../../PageStyle';

function Warrentycreate() {

  //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ******** Text field ******** //
  const [warrantyAdd, setWarrantyAdd] = useState({
    warrantyAddName: "", warrantyAddDescription: "", warrantyAddDuration: "", warrantyAddDurSelect: "",
  });


  return (
    <Box>
      <Button sx={userStyle.buttonadd} onClick={handleClickOpen}>ADD</Button>

      <Dialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={handleClose}
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Warranty
        </DialogTitle>
        <DialogContent dividers sx={userStyle.container}>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' }, }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Name"
              size="small"
              value={warrantyAdd.warrantyAddName}
              onChange={(e) => { setWarrantyAdd({ ...warrantyAdd, warrantyAddName: e.target.value }) }}
            />
            <TextField
              placeholder="Description"
              label="Description"
              multiline
              rows={2}
              maxRows={4}
              value={warrantyAdd.warrantyAddDescription}
              onChange={(e) => { setWarrantyAdd({ ...warrantyAdd, warrantyAddDescription: e.target.value }) }}
            />
            <br />
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <TextField
                  placeholder="Duration"
                  label="Duration *"
                  value={warrantyAdd.warrantyAddDuration}
                  onChange={(e) => { setWarrantyAdd({ ...warrantyAdd, warrantyAddDuration: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  required
                  id="outlined-select-currency"
                  select
                  label="Please Select"
                  value={warrantyAdd.warrantyAddDurSelect}
                  onChange={(e) => { setWarrantyAdd({ ...warrantyAdd, warrantyAddDurSelect: e.target.value }) }}
                >
                  <MenuItem value={1}>Please Select</MenuItem>
                  <MenuItem value={1}>Days</MenuItem>
                  <MenuItem value={1}>Months</MenuItem>
                  <MenuItem value={1}>Years</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus>Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Warrentycreate;