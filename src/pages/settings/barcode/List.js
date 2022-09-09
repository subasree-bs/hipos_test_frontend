import React from 'react';
import { Button, Grid,Link ,Box,Typography,Badge,Table,TableHead,TableContainer,TableBody,TableCell,Paper} from '@mui/material';
import { FaFileCsv,FaPrint,FaFilePdf,} from 'react-icons/fa'
import { AiFillFileExcel } from 'react-icons/ai';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import $ from 'jquery';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle';
// import { Link } from 'react-router-dom';

//  JQUERY 
  $(document).ready(function () {
    setTimeout(function(){
    $('#barcode').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


const Barcodelisttable = ()=>{
    return(

        <Box>
          <Typography sx={userStyle.HeaderText}>Barcodes <Typography  sx={userStyle.SubHeaderText}>Manage your barcode settings</Typography></Typography>
              <Box sx={userStyle.container}><br />
                    <Box>
                {/* Table start */}
                    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                      <Typography sx={userStyle.importheadtext}>All your barcode settings</Typography>
                      <Link to="/settings/barcode/create" style={{textDecoration:'none', color: 'white'}}><Button sx={userStyle.buttonadd}>Add new setting</Button></Link>
                {/* Button groups start */}
                      <Grid sx={{textAlign:'center'}}>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFileCsv/>&ensp;Export to csv&ensp;</Button>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<AiFillFileExcel/>&ensp;Export to Excel&ensp;</Button>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaPrint/>&ensp;Print&ensp;</Button>
                            <Button variant="outlined" sx={userStyle.buttongrp}>&ensp;<FaFilePdf/>&ensp;Export to PDF&ensp;</Button>
                      </Grid>
               {/* Button groups start */}
                        <Table aria-label="customized table" id="orders" sx={{margin:'20px'}}> <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="left">Sticker Sheet setting Name</StyledTableCell>
                                <StyledTableCell align="left">Sticker Sheet setting Description</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell align="left">Defaut&ensp;&ensp;&ensp;&ensp;<Badge badgeContent={'Default'} color="success"/> </StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left">
                                  <Link to="/settings/barcode/edit" style={{textDecoration:'none', color: 'white'}}><Button variant="contained" size='small' sx={userStyle.buttonedit}><EditOutlinedIcon style={{fontSize:'large'}}/>&ensp;EDIT</Button></Link>
                                 <Button variant="contained" size="small" sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontSize:'large'}}/>&ensp;Delete&ensp;</Button>
                                 <Button variant="contained" color="success" size="small"  sx={{ textTransform: 'Capitalize',padding:'2px'}}>&ensp;Default&ensp;</Button>
                              </StyledTableCell>
                           </StyledTableRow>  
                        </TableBody>
                      </Table>
                    </TableContainer>
            {/* Table end */}
                    </Box>
                </Box>
              </Box>
 );
}

function Barcodelist() {
    return(
        <Box sx={{display:'flex', }} >
          <Sidebar />
          <Box sx={{width:'100%',overflowX:'hidden'}}>
              <Box component="main" sx={{ padding: '30px',}}><br /><br />
                <Barcodelisttable /><br /><br />
                <Footer />
              </Box>
          </Box>
        </Box>
    );
}

export default Barcodelist;