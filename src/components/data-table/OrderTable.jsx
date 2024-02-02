import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EastIcon from '@mui/icons-material/East';
function createData(order, status, date, total, ) {
  return { order, status, date, total,  };
}

const rows = [
  createData('Frozen yoghurt', 'Pending', 'Nov 10, 2022', 'US$350.00', ),
  createData('Ice cream sandwich', 'Processing', 'Nov 10, 2022', 'US$350.00', ),
  createData('Eclair', 'Delivered', 'Nov 10, 2022', 'US$350.00', ),
  createData('Cupcake', 'Dlivered', 'Nov 10, 2022', 'US$350.00', ),
  createData('Gingerbread', 'Cancled', 'Nov 10, 2022', 'US$350.00', ),
];

const OrderTable =    () =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color:'#7d879c',fontSize:'18px'}}>Order#</TableCell>
            <TableCell sx={{color:'#7d879c',fontSize:'18px'}}>Status</TableCell>
            <TableCell sx={{color:'#7d879c',fontSize:'18px'}}>Date purchased</TableCell>
            <TableCell sx={{color:'#7d879c',fontSize:'18px'}}>Total</TableCell>
            <TableCell sx={{color:'#7d879c',fontSize:'18px'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.order}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight:'700',fontSize:'20px'}}>
                {row.order}
              </TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.total}</TableCell>
              <TableCell ><EastIcon></EastIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderTable
