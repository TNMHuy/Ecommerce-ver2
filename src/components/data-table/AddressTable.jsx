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
function createData(place, address, phone, ) {
  return { place, address, phone,  };
}

const rows = [
  createData('Office', '497 Erdman Passage, New Zoietown', '(213) 840-9416',  ),
  createData('Shop', '8000 Evans Brooks, Lake Jo', '345-510-1406',  ),
  createData('Garage', '978 Elton Springs, Eribertoview', '(932) 581-1393',  ),
  createData('Coffee House', '3899 Gutkowski Views, North Claudiamouth', '201.292.9655 x140',  ),
  createData('Italian Restaurant', '789 Spencer Lock, Lolitaberg', '445-946-3391',  ),
];
const StyledTableCell = styled(TableCell)(({  }) => ({
    backgroundColor:'white',
    borderRadius:'10px',
    padding:'10px',
    marginBottom:'40px'
}));
const AddressTable =    () =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.place}
              sx={{ '&:last-child td, &:last-child th': { bplace: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {row.place}
              </StyledTableCell>
              <StyledTableCell >{row.address}</StyledTableCell>
              <StyledTableCell >{row.phone}</StyledTableCell>
              <StyledTableCell ><ModeEditIcon fontSize='small'></ModeEditIcon> <DeleteIcon fontSize='small'></DeleteIcon></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AddressTable
