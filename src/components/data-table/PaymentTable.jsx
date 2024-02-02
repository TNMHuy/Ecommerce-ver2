import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import Image from '../Image';
function createData(name, id, date, img ) {
  return { name, id, date, img  };
}

const rows = [
  createData('Edward NewGate', '1234 **** **** ****', '08 / 2022', 'https://bazaar-eight.vercel.app/assets/images/payment-methods/Amex.svg' ),
  createData('Edward NewGate', '1234 **** **** ****', '10 / 2025','https://bazaar-eight.vercel.app/assets/images/payment-methods/Mastercard.svg'  ),
  createData('Edward NewGate', 'ui-lib@email.com', 'N/A','https://bazaar-eight.vercel.app/assets/images/payment-methods/PayPal.svg'  ),
  createData('Edward NewGate', 'ui-lib@email.com', '08 / 2022', 'https://bazaar-eight.vercel.app/assets/images/payment-methods/Visa.svg' ),
];
const StyledTableCell = styled(TableCell)(({  }) => ({
    backgroundColor:'white',
    borderRadius:'10px',
    padding:'10px',
    marginBottom:'40px'
}));
const PaymentTable =    () =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { bname: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
        <Image src={row.img}></Image>
              </StyledTableCell>
              <StyledTableCell sx={{fontWeight:'700',fontSize:'16px'}}>{row.name}</StyledTableCell>
              <StyledTableCell >{row.id}</StyledTableCell>
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell ><ModeEditIcon fontSize='small'></ModeEditIcon> <DeleteIcon fontSize='small'></DeleteIcon></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PaymentTable
