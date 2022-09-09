import React from 'react';
import { Typography,Table,TableBody,TableCell,tableCellClasses,TableContainer,TableHead,TableRow,Paper }  from '@mui/material';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle';

export default function CloseStockTable() {
  return (
    <TableContainer component={Paper} sx={{
         padding:1,
      width:'100%',
      margin:'auto',
      overflow:'auto',
      boxShadow:'none',
       "&::-webkit-scrollbar":{
        width:20
      },
      "&::-webkit-scrollbar-track":{
        backgroundColor:'pink'
      },
      "&::-webkit-scrollbar-thumb":{
        backgroundColor:'blue'
      }
    }} >
        <Table style={{ minWidth: 200}} aria-label="customized table">
            <TableBody>        
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Opening  stock</Typography><Typography sx={userStyle.reportTabletxt}>(By purchase price):</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 37,109.42</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Opening stock</Typography><Typography sx={userStyle.reportTabletxt}>(By sale price):</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 37,109.42</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Sales:</Typography><Typography sx={userStyle.reportTabletxt}>(Exc. tax, Discount)</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 8,593.75</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total sell shipping charge:	</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 8,593.75</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Stock Recovered:</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Purchase Return:	</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Purchase discount:	</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total sell round off:	</Typography></StyledTableCell>
                    <StyledTableCell align="left">₹ 0.00</StyledTableCell>
                </StyledTableRow>
            </TableBody>
      </Table>
    </TableContainer>
  );
}
