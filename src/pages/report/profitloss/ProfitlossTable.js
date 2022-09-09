import React from 'react';
import { Typography,Table,TableBody,TableCell,tableCellClasses,TableContainer,TableHead,TableRow,Paper }  from '@mui/material';
import { StyledTableRow, StyledTableCell} from '../../../components/Table';
import { userStyle } from '../../PageStyle'

export default function Importcontacts() {
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
  <Table md={{ minWidth: 200,maxHeight:'5px',overflow: 'auto'}} aria-label="customized table">
    <TableBody>
        <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Closing stock</Typography><Typography sx={userStyle.reportTabletxt}>(By purchase price):</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 30.078.16</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Closing stock</Typography><Typography sx={userStyle.reportTabletxt}>(By sale price):</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 46,687.50</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total purchase:</Typography><Typography sx={userStyle.reportTabletxt}>(Exc. tax, Discount)</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Stock Adjustment:	</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Expense:	</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total purchase shipping charge:	</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Purchase additional expenses:		</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total transfer shipping charge:		</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Sell discount:</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total customer reward:	</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell><Typography sx={userStyle.reportTableBoldtxt}>Total Sell Return:</Typography></StyledTableCell>
                <StyledTableCell align="left">₹ 0.00</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
