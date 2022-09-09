import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions,Grid, } from '@mui/material';
import { userStyle } from '../../PageStyle';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


function Variationcreate() {

  //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  // ******** Text field ******** //
const [variationAdd, setVariationAdd] = useState({
  variationAddVariationName: "",
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
          Add Variations
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
                value={variationAdd.variationAddVariationName}
                onChange={(e) => { setVariationAdd({ ...variationAdd, variationAddVariationName: e.target.value }) }}
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
                    <Button variant="contained" size="small" onClick={() => addItem()} sx={{height:'40px', marginTop:'8px'}}><FaPlus /></Button>
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
          <Button variant="contained" color="error" autoFocus onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Variationcreate;