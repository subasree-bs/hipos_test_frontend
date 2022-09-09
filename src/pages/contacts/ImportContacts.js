import React from 'react';
import { Button, Grid, Paper, Typography, Box, TableContainer, TableHead, Table, TableBody, } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { StyledTableRow, StyledTableCell } from '../../components/Table';
import Sidebar from '../../components/header/Sidebar';
import Footer from '../../components/footer/Footer';
import { userStyle } from '../PageStyle';

function ImportContactTable() {
    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Import Contacts</Typography>
            <Box sx={userStyle.container}>
                <Typography variant='h6' >File to import</Typography><br />
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Button variant="contained" component="label" sx={userStyle.uploadBtn}>
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Grid>
                    <Grid item md={4}>
                        <Button variant="contained" sx={userStyle.buttonadd}>Submit</Button>
                    </Grid>
                </Grid>
                <br /><br />
                <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize' }}><FileDownloadOutlinedIcon style={{ fontSize: 'large' }} />&ensp;Download template file&ensp;</Button>
            </Box>
            <br />
            {/* ****** Instructions Box ****** */}
            <Box sx={userStyle.container}>
                <Typography sx={userStyle.importheadtext}>Instructions</Typography>
                <br />
                <Typography sx={userStyle.importsubheadtex}>Follow the instructions carefully before importing the file</Typography>
                <Typography sx={userStyle.importsubheadtext}>The columns of the file should be in the following order.</Typography>
                <br /><br />
                <TableContainer component={Paper} sx={{
                    padding: 1, width: '100%', margin: 'auto', overflow: 'auto',
                    "&::-webkit-scrollbar": { width: 20 },
                    "&::-webkit-scrollbar-track": { backgroundColor: 'pink' },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: 'blue' }
                }} >
                    {/* ****** Table ****** */}
                    <Table md={{ minWidth: 200, maxHeight: '5px', overflow: 'auto' }} aria-label="customized table">
                        <TableHead >
                            <StyledTableRow>
                                <StyledTableCell >Column Number</StyledTableCell>
                                <StyledTableCell align="left">Column Name</StyledTableCell>
                                <StyledTableCell align="left">Instruction</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">1</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Contact type </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell align="left">Available Options:<br /> <Typography sx={userStyle.importTableBoldText}>1 = Customer,<br />2 = Supplier <br />3 = Both</Typography></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">2</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Prefix  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">3</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>First Name </Typography> <Typography>(Required)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">4</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Middle name   </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">5</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Last Name</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">6</StyledTableCell>
                                <StyledTableCell align="left"><Typography sx={userStyle.importTabledata}>Business Name </Typography> <Typography>(Required if contact type is supplier or both)</Typography></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">7</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Contact ID</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell align="left"><Typography sx={userStyle.importTabledata}>	Leave blank to auto generate Contact ID</Typography></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">8</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Tax number  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">9</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Opening Balance</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">10</StyledTableCell>
                                <StyledTableCell align="left"><Typography sx={userStyle.importTabledata}>Pay term</Typography> <Typography>(Required if contact type is supplier or both)</Typography></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">11</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Pay term period</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell><Typography sx={userStyle.importTableBoldText}>Available Options: days and months</Typography></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">12</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Credit Limit</Typography> <Typography>(Optional)</Typography>	</Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">13</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Email </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">14</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Mobile </Typography> <Typography>(Required)</Typography>	</Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">15</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Alternate contact number</Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">16</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Landline  </Typography> <Typography>(Optional)</Typography></Box>	</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">17</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>City </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">18</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>State  </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">19</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>Country  </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">20</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Address line 1 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">21</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Address line 2 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">22</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Zip Code </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">23</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Date of birth  </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"><Typography sx={userStyle.importTabledata}>	Format Y-m-d (2022-08-22)</Typography></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">24</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Custom Field 1 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">25</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Custom Field 2 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">26</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Custom Field 3 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">27</StyledTableCell>
                                <StyledTableCell align="left"><Box sx={{ display: 'flex', gap: '2px' }}><Typography sx={userStyle.importTabledata}>	Custom Field 4 </Typography> <Typography>(Optional)</Typography></Box></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                    {/* ****** Table Ends ****** */}
                </TableContainer>
                <br />
            </Box>
            {/* ****** Instructions Box Ends ****** */}
        </Box>
    );
}
function ImportContact() {
    return (
        <Box sx={{ display: 'flex', }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <ImportContactTable /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}
export default ImportContact;