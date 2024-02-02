import { Box, Container, TextField } from '@mui/material'
import React from 'react'

const CheckOut = () => {
  return (
    <Container sx={{height:'400px', mt:'50px'}}>
        <Box sx={{display:'flex',gap:'100px'}}>
            <Box sx={{flexGrow:'2',display:'flex',flexDirection:'column'}} id='thong tin thanh toan'>
                <Box sx={{borderBottom:'1px solid #DAE1E7', pb:'20px'}} >Customer Information</Box>
                <Box>
                    <Box mb={'5px'} > Full name *</Box>
                    <TextField type='text' placeholder='Your full name' fullWidth></TextField>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} gap={'20px'}>
                    <Box width={'100%'}>
                        <Box mb={'5px'} > Phone number *</Box>
                        <TextField type='number' placeholder='Your phone number' fullWidth></TextField>
                    </Box>
                    <Box width={'100%'}>
                        <Box mb={'5px'} > Email *</Box>
                        <TextField type='email' placeholder='Your email' fullWidth></TextField>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} gap={'20px'}>
                    <Box width={'100%'}>
                        <Box mb={'5px'} >City *</Box>
                        <TextField placeholder='' fullWidth></TextField>
                    </Box>
                    <Box width={'100%'}>
                        <Box mb={'5px'} >District*</Box>
                        <TextField placeholder='' fullWidth></TextField>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} gap={'20px'}>
                    <Box width={'100%'}>
                        <Box mb={'5px'} > Ward *</Box>
                        <TextField placeholder='' fullWidth></TextField>
                    </Box>
                    <Box width={'100%'}>
                        <Box mb={'5px'} >Address *</Box>
                        <TextField placeholder='E.g. 27 Hoa Que Trung 3 ' fullWidth></TextField>
                    </Box>
                </Box>
                <Box>
                    <Box>Order Note</Box>
                    <TextField variant="outlined" fullWidth  multiline rows={5} placeholder='Note about your order' />  

                </Box>
            </Box>
            <Box sx={{flexGrow:'1.5'}} id='don hang'>
                <Box>Order Information</Box>
            </Box>
        </Box>
    </Container>
  )
}

export default CheckOut