import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip, IconButton, Zoom, Checkbox, Grid, MenuItem, FormGroup, FormControlLabel } from '@mui/material';
import { FcInfo } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { userStyle } from '../../PageStyle';
import CloseIcon from '@mui/icons-material/Close';


function Unitcreate() {
  const [hidden, setHidden] = useState(true);

  //Add modal
  const [openAdd, setOpenAdd] = useState(false);
  const openAddMod = () => {
    setOpenAdd(true);
  };
  const closeAddMod = () => {
    setOpenAdd(false);
  };

  // ******** Text field ******** //
  const [unitAdd, setUnitAdd] = useState({
    unitAddName: "", unitAddShortName: "", unitAddAllowDecimal: "", unitAddAddCheckbox: "", unitAddTimesBaseUnit: "", unitAddSelectBaseUnit: ""
  });

  return (
    <Box>
      <Button sx={userStyle.buttonadd} onClick={openAddMod}>ADD</Button>

      <Dialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={closeAddMod}
        open={openAdd}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={closeAddMod}>
          Add Unit
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
              label="Name:"
              size="small"
              value={unitAdd.unitAddName}
              onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Short Name *"
              size="small"
              value={unitAdd.unitAddShortName}
              onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddShortName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Allow Decimal"
              size="small"
              value={unitAdd.unitAddAllowDecimal}
              onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddAllowDecimal: e.target.value }) }}
            >
              <MenuItem value={1}> Please Select</MenuItem>
              <MenuItem value={2}> Yes</MenuItem>
              <MenuItem value={3}> No</MenuItem>

            </TextField>
            <FormGroup>
              <span ><FormControlLabel onClick={() => setHidden(s => !s)} control={<Checkbox />}
                value={unitAdd.unitAddAddCheckbox}
                onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddAddCheckbox: e.target.value }) }}
                label="Add as multiple of other unit " />
                <Tooltip title="Define this unit at the multiple of other units Ex: 1 dozen = 12 pieces" arrow>
                  <IconButton>
                    <FcInfo />
                  </IconButton>
                </Tooltip>
              </span>
            </FormGroup><br />
            {!hidden ?
              <Grid container spacing={2}>
                <Grid item xs={2}><br />
                  <label htmlFor="">1 Unit :</label>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Short name:"
                    size="small"
                    value={unitAdd.unitAddTimesBaseUnit}
                    onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddTimesBaseUnit: e.target.value }) }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    id=""
                    select
                    label="Select base unit"
                    size="small"
                    value={unitAdd.unitAddSelectBaseUnit}
                    onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddSelectBaseUnit: e.target.value }) }}
                  >
                    <MenuItem value={1}>Select base unit</MenuItem>
                    <MenuItem value={2}>Pieces (Pc(s))</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              : null}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus>Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={closeAddMod}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Unitcreate;