import { Box, Container } from '@mui/material'
import React from 'react'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AddressTable from '../components/data-table/AddressTable';

const Addresses = () => {
  return (
    <Container >
        <Box  >
          <Box display={'flex'} alignItems={'center'} gap={'10px'} mb={'50px'}>
                <MapsHomeWorkIcon color='error'></MapsHomeWorkIcon>
                <Box fontWeight={'700'} fontSize={'25px'}>My Addresses</Box>
              </Box>
          <AddressTable></AddressTable>
        </Box>
    </Container>
  )
}

export default Addresses