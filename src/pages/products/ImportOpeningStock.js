import React from 'react';
import { Box, Paper, Button, Grid, Typography, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import { FaDownload } from 'react-icons/fa';
import { StyledTableRow, StyledTableCell } from '../../components/Table';
import { userStyle } from '../PageStyle';
import Sidebar from '../../components/header/Sidebar';
import Footer from '../../components/footer/Footer';

function ImportOpeningStocktable() {

  return (
    <Box>
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Import Opening Stock</Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Typography variant='h6'>File to import</Typography><br />
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Button variant="contained" sx={userStyle.uploadBtn}>
              Upload <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button variant="contained" sx={userStyle.buttonadd}>Submit</Button>
          </Grid>
        </Grid>
        <br /><br />
        <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize' }}><FaDownload />&ensp;Download template file</Button>
      </Box><br />
      <Box sx={userStyle.container}>
        <Typography sx={userStyle.importheadtext}>Instructions</Typography>
        <br />
        <Typography sx={userStyle.importsubheadtex}>Follow the instructions carefully before importing the file</Typography>
        <Typography sx={userStyle.importsubheadtext}>The columns of the file should be in the following order.</Typography>
        <br /><br />
        <TableContainer component={Paper} sx={{
          padding: 1,
          width: '100%',
          // height:400,
          margin: 'auto',
          overflow: 'auto',
          "&::-webkit-scrollbar": {
            width: 20
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: 'pink'
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: 'blue'
          }
        }} >
          <Table md={{ minWidth: 200, maxHeight: '5px', overflow: 'auto' }} aria-label="customized table">
            <TableHead >
              <StyledTableRow>
                <StyledTableCell sx={userStyle.tableHead}>Column Number</StyledTableCell>
                <StyledTableCell sx={userStyle.tableHead} align="left">Column Name</StyledTableCell>
                <StyledTableCell sx={userStyle.tableHead} align="left">Instruction</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">1</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>SKU</Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">2</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Location  </Typography> <Typography>(Optional)</Typography></Box>	<Typography>If blank first business location will be used	</Typography></StyledTableCell>
                <StyledTableCell align="left">Name of the business location</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">3</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Quantity </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">4</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Unit Cost (Before Tax)</Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">5</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Lot Number </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">6</StyledTableCell>
                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Expiry Date </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                <StyledTableCell align="left"><Typography sx={userStyle.importTabledata}>Stock expiry date in<Typography sx={userStyle.importTableBoldText}>Business date format mm/dd/yyyy </Typography></Typography> </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* content end */}
    </Box>
  );
}

function ImportOpeningStock() {
  return (
    <Box sx={{ display: 'flex' }} >
      <Sidebar />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <ImportOpeningStocktable /><br /><br />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default ImportOpeningStock;