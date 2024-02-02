import { Box, Button, Container } from '@mui/material'
import React from 'react'
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentTable from '../components/data-table/PaymentTable';

const PayMethods = () => {
  return (
    <Container >
        <Box display='flex' justifyContent={'space-between'} alignItems={'center'} mb={'50px'} >
          <Box display={'flex'} alignItems={'center'} gap={'10px'} >
                <PaymentIcon color='error'></PaymentIcon>
                <Box fontWeight={'700'} fontSize={'25px'}>Payment methods</Box>
              </Box>
          <Box>
          <Button sx={{color:'#f27474',backgroundColor:'rgb(252, 233, 236)'}}>Add New Payment Method</Button>

          </Box>

        </Box>
        <Box>
          <PaymentTable></PaymentTable>
        </Box>
    </Container>
  )
}

export default PayMethods