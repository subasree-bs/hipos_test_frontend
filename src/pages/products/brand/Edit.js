import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions,} from '@mui/material';
import { userStyle } from '../../PageStyle';
import { FaEdit } from 'react-icons/fa';

function Brandedit() {

  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const edithandleClickOpen = () => {
    seteditOpen(true);
  };
  const edithandleClose = () => {
    seteditOpen(false);
  };

  // ******** Text field ******** //
  const [brandEdit, setBrandEdit] = useState({
    brandEditBrandName: "", brandEditShortDescription: "",
  });

  return (
    <Box>
      <Button sx={userStyle.buttonedit} onClick={edithandleClickOpen}><FaEdit />&ensp;Edit</Button>

      <Dialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={edithandleClose}
        open={editopen}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={edithandleClose}>
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
              value={brandEdit.brandEditBrandName}
              onChange={(e) => { setBrandEdit({ ...brandEdit, brandEditBrandName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Short Description"
              size="small"
              value={brandEdit.brandEditShortDescription}
              onChange={(e) => { setBrandEdit({ ...brandEdit, brandEditShortDescription: e.target.value }) }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus > Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={edithandleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );

}
export default Brandedit;