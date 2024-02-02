import { Box, Container } from '@mui/material'
import React from 'react'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EastIcon from '@mui/icons-material/East';
import Feedback from '../components/Feedback';

const SupportTickets = () => {
  return (
    <Container >
        <Box  >
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                  <ContactSupportIcon color='error'/>
                  <Box fontWeight={'700'} fontSize={'25px'}>Support Tickets</Box>
                </Box>
        </Box>
        <Feedback></Feedback>
    </Container>
  )
}

export default SupportTickets