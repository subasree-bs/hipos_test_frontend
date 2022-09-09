import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { userStyle } from '../../PageStyle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Categoryedit() {

  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const edithandleClickOpen = () => {
    seteditOpen(true);
  };
  const edithandleClose = () => {
    seteditOpen(false);
  };

  // ******** Text field ******** //
  const [categoryEdit, setCategoryEdit] = useState({
    categoryEditCateName: "", categoryEditCateCode: "", categoryEditDescription: "",
  });

  return (
    <Box>
      <Button sx={userStyle.buttonedit} onClick={edithandleClickOpen} ><EditOutlinedIcon style={{fontsize:'large'}}/>&ensp;Edit</Button>

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
          EDIT
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
              value={categoryEdit.categoryEditCateName}
              onChange={(e) => { setCategoryEdit({ ...categoryEdit, categoryEditCateName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Category code"
              size="small"
              value={categoryEdit.categoryEditCateCode}
              onChange={(e) => { setCategoryEdit({ ...categoryEdit, categoryEditCateCode: e.target.value }) }}
            />
            <label htmlFor="">Category code is same as HSN code</label><br />
            <TextField
              placeholder="Description"
              label="Description"
              multiline
              rows={2}
              maxRows={4}
              value={categoryEdit.categoryEditDescription}
              onChange={(e) => { setCategoryEdit({ ...categoryEdit, categoryEditDescription: e.target.value }) }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus >Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={edithandleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Categoryedit;