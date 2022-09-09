import React, {useState} from 'react';
import { Typography,Container,Select,Checkbox,FormControl,MenuItem, Grid, InputLabel, Box, Button,
    Menu,TableSortLabel,Tooltip,Avatar,Divider,Toolbar,Table,TableBody,
    TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,
    DialogContent,DialogActions,tableCellClasses,Link,TableFooter} from "@mui/material";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash,FaDatabase, FaHistory, FaCopy, FaBarcode,} from "react-icons/fa";
import {prodStyle, prodList} from "./ProductStyle";
import { AiFillFileExcel } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { styled,alpha } from '@mui/material/styles';
//jquery
import $ from 'jquery';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';

//View Group Prices Modal Tags
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500], }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  
  $(document).ready(function () {
    setTimeout(function () {
      $("#stocktable").DataTable({
        language: { search: "", searchPlaceholder: "Search..." },
        lengthMenu: [25, 50, 100, 200, 500, 1000],
        paging: true,
      });
    }, 1000);
  });

 function Stocktable() {
    // Stock Report Table Modal
    const [ModalOpen, setModalOpen] = useState(false);

    const handleClickModalOpen = () => {
    setModalOpen(true);
    };
    const handleModalClose = () => {
    setModalOpen(false);
    };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <TableContainer component={Paper} sx={prodStyle.tablecontainer}>
      <Grid container sx={prodStyle.prod_grid_container}>
                        <Grid >
                            <Button sx={prodList.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={prodList.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={prodList.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={prodList.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table" id="stocktable">
                        <TableHead>
                          <StyledTableRow>
                   
                          <StyledTableCell >SKU</StyledTableCell>
                        <StyledTableCell >Product</StyledTableCell>
                        <StyledTableCell >Location</StyledTableCell>
                        <StyledTableCell sx={{  width: 180 }}>Unit Price</StyledTableCell>
                        <StyledTableCell >Current Stock</StyledTableCell>
                        <StyledTableCell sx={{  width: 180 }}>Current Stock Value (By purchase price)</StyledTableCell>
                        <StyledTableCell sx={{  width: 180 }}>Current Stock Value (By sale price)</StyledTableCell>
                        <StyledTableCell >Potential Profit</StyledTableCell>
                        <StyledTableCell >Total Unit Sold</StyledTableCell>
                        <StyledTableCell >Total Unit Tranferred</StyledTableCell>
                        <StyledTableCell >Total Unit Adjusted</StyledTableCell>
                          </StyledTableRow>
                        </TableHead>
                        <TableBody>
                     
                           <StyledTableRow >
                                
                                  <StyledTableCell>demo</StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell>
                                      <Button  variant="outlined"  onClick={handleClickModalOpen}  
                                                    size="small"  sx={prodList.viewbtn} >
                                                    View group prices
                                                    </Button>
                                                    <BootstrapDialog
                                                    onClose={handleModalClose}
                                                    aria-labelledby="customized-dialog-title"
                                                    open={ModalOpen}
                                                    sx={{
                                                        "& .MuiDialog-paper": {
                                                        marginTop: "-330px",
                                                        transformOrigin: "0 0 0",
                                                        },
                                                    }}
                                                    >
                                                    <BootstrapDialogTitle
                                                        id="customized-dialog-title"
                                                        onClose={handleModalClose}
                                                        sx={{ minWidth: 600 }}
                                                    >
                                                        Product
                                                    </BootstrapDialogTitle>
                                                    <DialogContent dividers>
                                                        <Table>
                                                        <TableRow sx={{ backgroundColor: "#2dce89", m: 0, p: 0 }}>
                                                            <TableCell sx={{ color: "#fff" }}>
                                                            Default Selling Price (Inc. tax)
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow sx={{ backgroundColor: "#d2d6de" }}>
                                                            <TableCell>₹ 2,343.75</TableCell>
                                                        </TableRow>
                                                        </Table>
                                                        <br />
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button  autoFocus  onClick={handleModalClose}  variant="outlined"
                                                        sx={{
                                                            backgroundColor: "#f4f4f4",
                                                            borderColor: "#ddd",
                                                            color: "#444",
                                                        }}
                                                        >
                                                        Close
                                                        </Button>
                                                    </DialogActions>
                                                    </BootstrapDialog>
                                               
                        </StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                  <StyledTableCell></StyledTableCell>
                                 
                                </StyledTableRow>
                           
                         
                        </TableBody>
                        <TableFooter>
                                <TableRow className="table2_total">
                                <TableCell
                                colSpan={4}
                                align="center"
                                sx={{ fontWeight: 700, fontSize: 18, color: "black" }}
                                >
                                Total:{" "}
                                </TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>18.00</TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>
                                ₹ 30,078.16
                                </TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>
                                ₹ 46,687.50
                                </TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>
                                ₹ 16,609.34
                                </TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>13.00</TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>0.00</TableCell>
                                <TableCell sx={{ color: "black", fontSize: 16 }}>0.00</TableCell>
                            </TableRow> 
                        </TableFooter>
                      </Table>
                    </TableContainer>
              
    </div>
  );
}
export default Stocktable;
