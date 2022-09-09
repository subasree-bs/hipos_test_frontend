import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions,} from '@mui/material';
import { userStyle } from '../../PageStyle';


function Categorycreate() {

  //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ******** Text field ******** //
  const [categoryAdd, setCategoryAdd] = useState({
    categoryAddCateName: "", categoryAddCateCode: "", categoryAddDescription: "",
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
          Add
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
              label="Category Name"
              size="small"
              value={categoryAdd.categoryAddCateName}
              onChange={(e) => { setCategoryAdd({ ...categoryAdd, categoryAddCateName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Category code"
              size="small"
              value={categoryAdd.categoryAddCateCode}
              onChange={(e) => { setCategoryAdd({ ...categoryAdd, categoryAddCateCode: e.target.value }) }}
            />
            <label htmlFor="">Category code is same as HSN code</label><br />
            <TextField
              placeholder="Description"
              label="Description"
              multiline
              rows={2}
              maxRows={4}
              value={categoryAdd.categoryAddDescription}
              onChange={(e) => { setCategoryAdd({ ...categoryAdd, categoryAddDescription: e.target.value }) }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus>SAVE</Button>
          <Button variant="contained" color="error" autoFocus onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Categorycreate;