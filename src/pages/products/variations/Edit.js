import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions,Grid, } from '@mui/material';
import { userStyle } from '../../PageStyle';
import { AiOutlineClose } from 'react-icons/ai';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function Variationedit() {

  //ToDOList function

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);


  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("");
    console.log(items);
  }
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);

  };
  //Edit modal
  const [editopen, seteditOpen] = useState(false);
  const edithandleClickOpen = () => {
    seteditOpen(true);
  };
  const edithandleClose = () => {
    seteditOpen(false);
  };

  // ******** Text field ******** //
  const [variationEdit, setVariationEdit] = useState({
    variationEditVariationName: "",
  });

  return (
    <Box>
      <Button sx={userStyle.buttonedit} onClick={edithandleClickOpen}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;Edit</Button>

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
          Edit Variations
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
            <div>
              <TextField
                required
                id="outlined-required"
                label="Variation Name:"
                size="small"
                value={variationEdit.variationEditVariationName}
                onChange={(e) => { setVariationEdit({ ...variationEdit, variationEditVariationName: e.target.value }) }}
              />
              {/* TODOLIST */}
              <div className="todo">
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <TextField variant="outlined" size="small"
                      className="form-control variantName"
                      placeholder="Add an item..."
                      label="item"
                      value={newItem}
                      onChange={e => setNewItem(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" size="small" onClick={() => addItem()} sx={{height:'40px', marginTop:'8px'}}><AddCircleOutlineOutlinedIcon /></Button>
                  </Grid>
                </Grid>
                <br />
                <ul type="none" className="todoLlistUl">
                  {items.map(item => {
                    return (
                      <li key={item.id}>

                        <Grid container spacing={2}>
                          <Grid item xs={10} style={{ margin: "0", padding: "0" }}>
                            <TextField variant="outlined" size="small" label="item" value={item.value} />&ensp;
                          </Grid>
                          <Grid item xs={2}>
                            <Button color="error" variant="contained" size="small" type="button" onClick={() => deleteItem(item.id)} sx={{height:'40px', marginTop:'-8px'}}><AiOutlineClose/></Button>
                          </Grid>
                        </Grid>
                      </li>
                    )
                  })}
                </ul>
              </div>
              {/* TODOLIST END */}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus>SAVE</Button>
          <Button variant="contained" color="error" autoFocus onClick={edithandleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Variationedit;