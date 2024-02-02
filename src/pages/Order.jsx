import { Box, Container } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import OrderTable from '../components/data-table/OrderTable';

const Order = () => {
  return (
    <Container >
        <Box display='' >
           <Box display={'flex'} alignItems={'center'} gap={'10px'} mb={'20px'}>
              <ShoppingBagIcon color='error'></ShoppingBagIcon>
              <Box fontWeight={'700'} fontSize={'25px'}>My Orders</Box>
            </Box>
              <OrderTable></OrderTable>
        </Box>
    </Container>
  )
}

export default Order