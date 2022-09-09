import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip, IconButton, Zoom, Checkbox, Grid, MenuItem, FormGroup, FormControlLabel } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { FcInfo } from 'react-icons/fc';
import { userStyle } from '../../PageStyle';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function Unitedit() {
  const [hidden, setHidden] = useState(true);

  //Edit modal
  const [openEdit, setopenEditMod] = useState(false);
  const openEditMod = () => {
    setopenEditMod(true);
  };
  const closeEdit = () => {
    setopenEditMod(false);
  };

  // ******** Text field ******** //
  const [unitEdit, setUnitEdit] = useState({
    unitEditName: "", unitEditShortName: "", unitEditAllowDecimal: "", unitEditAddCheckbox: "", unitEditTimesBaseUnit: "", unitEditSelectBaseUnit: ""
  });

  return (
    <Box>
      <Button sx={userStyle.buttonedit} onClick={openEditMod}><EditOutlinedIcon style={{fontsize:'large'}}/>&ensp;Edit</Button>

      <Dialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={closeEdit}
        open={openEdit}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={closeEdit}>
          Edit Unit
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
              value={unitEdit.unitEditName}
              onChange={(e) => { setUnitEdit({ ...unitEdit, unitEditName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Short Name *"
              size="small"
              value={unitEdit.unitEditShortName}
              onChange={(e) => { setUnitEdit({ ...unitEdit, unitEditShortName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Allow Decimal"
              size="small"
              value={unitEdit.unitEditAllowDecimal}
              onChange={(e) => { setUnitEdit({ ...unitEdit, unitEditAllowDecimal: e.target.value }) }}
            >
              <MenuItem value={1}> Please Select</MenuItem>
              <MenuItem value={2}> Yes</MenuItem>
              <MenuItem value={3}> No</MenuItem>

            </TextField>
            <FormGroup>
              <span ><FormControlLabel onClick={() => setHidden(s => !s)} control={<Checkbox />}
                value={unitEdit.unitEditAddCheckbox}
                onChange={(e) => { setUnitEdit({ ...unitEdit, unitEditAddCheckbox: e.target.value }) }}
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
                    value={unitEdit.unitEditTimesBaseUnit}
                    onChange={(e) => { setUnitEdit({ ...unitEdit, unitEditTimesBaseUnit: e.target.value }) }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    id=""
                    select
                    label="Select base unit"
                    size="small"
                    value={unitEdit.unitEditSelectBaseUnit}
                    onChange={(e) => { setUnitEdit({ ...unitEdit, unitEditSelectBaseUnit: e.target.value }) }}
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
          <Button variant="contained" color="error" autoFocus onClick={closeEdit}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Unitedit;