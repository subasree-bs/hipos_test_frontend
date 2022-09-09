import React, {useState} from 'react';
import { Typography,Container,Select,Checkbox,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Menu,TableSortLabel,Tooltip,Avatar,Divider,Toolbar,Table,TableBody,
    TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
    DialogContent,DialogActions,tableCellClasses,Link} from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash,FaDatabase, FaHistory, FaCopy, FaBarcode,} from "react-icons/fa";
import {prodStyle, prodList} from "./ProductStyle";
import { AiFillFileExcel } from "react-icons/ai";

import { styled,alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

//jquery
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { MenuBookRounded } from '@material-ui/icons';
import Productcreate from './Create';

  $(document).ready(function () {
    setTimeout(function () {
      $("#productTable").DataTable({
        language: { search: "", searchPlaceholder: "Search..." },
        lengthMenu: [25, 50, 100, 200, 500, 1000],
        paging: true,
      });
    }, 1000);
  });

  


  //STYLED MENU
  //Actions Dropdown Button - List 
  const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


 function ProdTable() {
    
    //*****Action button*****//
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <TableContainer component={Paper} sx={prodStyle.tablecontainer}>
      <Grid container sx={prodStyle.prod_grid_container}>
                        <Grid >
                            <Button sx={prodList.button_grp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
                            <Button sx={prodList.button_grp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
                            <Button sx={prodList.button_grp}><FaPrint />&ensp;Print&ensp;</Button>
                            <Button sx={prodList.button_grp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
                        </Grid>
                    </Grid>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="productTable">
                        <TableHead>
                          <StyledTableRow>
                          <StyledTableCell><Checkbox color="primary"  /></StyledTableCell>
                          <StyledTableCell></StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell>Business Location</StyledTableCell>
                            <StyledTableCell>Unit purchase price</StyledTableCell>
                            <StyledTableCell>selling price</StyledTableCell>
                            <StyledTableCell>Current stock</StyledTableCell>
                            <StyledTableCell>Product type</StyledTableCell>
                            <StyledTableCell>Category</StyledTableCell>
                            <StyledTableCell>Brand</StyledTableCell>
                            <StyledTableCell>Tax</StyledTableCell>
                            <StyledTableCell>SKU</StyledTableCell>
                            <StyledTableCell>Custom Field1</StyledTableCell>
                            <StyledTableCell>Custom Field2</StyledTableCell>
                            <StyledTableCell>Custom Field3</StyledTableCell>
                            <StyledTableCell>Custom Field4</StyledTableCell>
                          </StyledTableRow>
                        </TableHead>
                        <TableBody>
                     
                           <StyledTableRow >
                                  <StyledTableCell padding="checkbox">  <Checkbox color="primary"  /> </StyledTableCell>
                                  <StyledTableCell component="th" scope="row" padding="none" >
                                    <Avatar
                                      sx={{ backgroundColor: "#cdcdcd" }}
                                      variant="square"
                                    ></Avatar>
                                  </StyledTableCell>

                                   {/* Actions Dropdown Button */}

                                  <StyledTableCell>
                                  <Button
                                      id="demo-customized-button"
                                      aria-controls={open ? "demo-customized-menu" : undefined}
                                      aria-haspopup="true"
                                      aria-expanded={open ? "true" : undefined}
                                      variant="contained"
                                      disableElevation
                                      onClick={handleClick}
                                      endIcon={<KeyboardArrowDownIcon />}
                                      size="small"
                                      sx={{backgroundColor: '#6420c0', textTransform: 'Capitalize'}}
                                    >
                                      Actions
                                    </Button>

                    {/* Actions Dropdown Button - List */}
                    <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                                <MenuItem onClick={handleClose} disableRipple>
                                        <FaBarcode /> &nbsp; &nbsp; &nbsp;Labels
                                      </MenuItem>
                                      <MenuItem >
                                      <Link to="viewproduct" disableRipple style={{color:"rgb(55, 65, 81)",textDecoration: "none"}} >
                                        <FaEye />  &nbsp;&nbsp; &nbsp;View
                                        </Link>
                                      </MenuItem>
                                      <MenuItem>
                                      <Link to="editproduct" fullWidth disableRipple style={{color:"rgb(55, 65, 81)",textDecoration: "none"}}>
                                         <FaEdit /> &nbsp;&nbsp; &nbsp;Edit
                                         </Link>
                                      </MenuItem>
                                      <MenuItem onClick={handleClose} disableRipple>
                                        <FaTrash />  &nbsp;&nbsp; &nbsp;  Delete
                                      </MenuItem>
                                      <Divider sx={{ my: 2 }} />
                                      <MenuItem onClick={handleClose} disableRipple>
                                        <FaDatabase /> &nbsp;&nbsp; &nbsp; Add or edit opening stock
                                      </MenuItem>
                                      <MenuItem onClick={handleClose} disableRipple>
                                        <FaHistory /> &nbsp; &nbsp; &nbsp;Product stock history
                                      </MenuItem>
                                      <MenuItem onClick={handleClose} disableRipple>
                                        <FaCopy /> &nbsp; &nbsp; &nbsp;Duplicate Product
                                      </MenuItem>
                                            </StyledMenu>
                                    </StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                </StyledTableRow>
                              </TableBody>
                      </Table>
                    </TableContainer>
                    <Box sx={{marginTop:'10px'}}>
                      <Button  variant="contained"  size="small"  sx={prodList.delete_btn} >
                        Delete Selected
                      </Button>&nbsp;
                      <Button  variant="contained"  size="small"  sx={prodList.addtolocation_btn} >
                        Add to location
                      </Button>&nbsp;
                      <Button  variant="contained"  size="small"  sx={prodList.remove_btn} >
                        Remove from location
                      </Button>&nbsp;
                      <Button  variant="contained"  size="small"  sx={prodList.deactive_btn} >
                        Deactivate Selected
                      </Button>
                      </Box><br />
    </div>
  );
}
export default ProdTable;
