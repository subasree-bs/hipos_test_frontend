import React, { useState } from 'react';
import { Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Grid, InputLabel, FormControl, OutlinedInput, Tooltip, Select, InputAdornment } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { userStyle } from '../../PageStyle';
import { FcInfo } from 'react-icons/fc';

function Customorgroupedit() {

  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const edithandleClickOpen = () => {
    seteditOpen(true);
  };
  const edithandleClose = () => {
    seteditOpen(false);
  };

  // Input
  const [editCustomerGroup, setEditCustomerGroup] = useState({ editCustGrpName: "", editCustGrpPriceCalcType: "", editCustGrpCalcPercent: "" });

  return (
    <Box>
      <Button onClick={edithandleClickOpen} sx={userStyle.buttonedit}><EditOutlinedIcon style={{fontSize:'large'}} />&ensp;Edit&ensp;</Button>

      <Dialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={edithandleClose}
        open={editopen}
        // TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={edithandleClose}>
          Edit Customer Group
        </DialogTitle>
        <DialogContent dividers>
          {/* ****** Form Start ****** */}
          <Box component="form" sx={{ '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #B97DF0' } }} noValidate autoComplete="off" >
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <FormControl size="small" fullWidth >
                  <InputLabel htmlFor="component-outlined" >Customer Group Name *</InputLabel>
                  <OutlinedInput
                    id="addCustGroupName"
                    value={editCustomerGroup.editCustGrpName}
                    onChange={(e) => { setEditCustomerGroup({ ...editCustomerGroup, editCustGrpName: e.target.value }) }}
                    label="Customer Group Name *"
                  />
                </FormControl>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <FormControl size="small" fullWidth >
                  <InputLabel id="demo-select-small">Price calculation type</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={editCustomerGroup.editCustGrpPriceCalcType}
                    onChange={(e) => { setEditCustomerGroup({ ...editCustomerGroup, editCustGrpPriceCalcType: e.target.value }) }}
                    label="Price calculation type"
                  >
                    <MenuItem value={"addCustGroupPercentage"}>Percentage</MenuItem>
                    <MenuItem value={"addCustGroupSellPriceGrp"}>Selling Price Group</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">Calculation Percentage (%)</InputLabel>
                  <OutlinedInput
                    id="editCustGrpCalcPercentage"
                    endAdornment={
                      <Tooltip title='Selling price = Selling price Set For the product + Calculation percentage. You can specify percentage as positive to increase and negtive to decrease selling price.' placement="top">
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="tooltip info"
                            edge="end"
                            value={editCustomerGroup.editCustGrpCalcPercent}
                            onChange={(e) => { setEditCustomerGroup({ ...editCustomerGroup, editCustGrpCalcPercent: e.target.value }) }}
                          >
                            <FcInfo/>
                          </IconButton>
                        </InputAdornment>
                      </Tooltip>
                    }
                    label="Calculation Percentage (%)"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          {/* ****** Form End ****** */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus color="success">Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={edithandleClose}> Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Customorgroupedit;