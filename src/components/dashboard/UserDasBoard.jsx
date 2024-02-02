import React from 'react'
import { Box } from '@mui/material'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FlexBox } from '../flex-box';
import NavLink from '../nav-link/NavLink';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PaymentIcon from '@mui/icons-material/Payment';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
const UserDasboard = () => {
  // const {pathname} = useLocation()
  // console.log(pathname);
  return (
    <FlexBox sx={{
        display: 'flex',
        flex:'300px 0 0',
        flexDirection:'column',
        gap:'60px',
        backgroundColor:'white',
        padding:'25px',
        paddingBottom:'50px',
    }} >
      <Box display={'flex'} flexDirection={'column'} gap={3}>
          <Box color={'#7d879c'} textTransform={'uppercase'}>
          Dashboard
            </Box >         
            <NavLink display={'flex'} alignItems={'center'} justifyContent={'space-between'} href={'/user/order'}>
              <Box display={'flex'} gap={1} >
              <ShoppingBagOutlinedIcon fontSize='small'/>
                Order
                </Box>
              <Box> 5</Box>
            </NavLink>
          
            
              <NavLink display={'flex'} alignItems={'center'} justifyContent={'space-between'} href={'/user/wish'}>
                <Box display={'flex'} gap={1} >
                <FavoriteBorderOutlinedIcon fontSize='small'/>
                  Wish List
                  </Box>
                <Box> 20</Box>
            </NavLink>
              <NavLink display={'flex'} alignItems={'center'} justifyContent={'space-between'} href={'/user/support-tickets'}>
                <Box display={'flex'} gap={1} >
                <ContactSupportIcon fontSize='small'/>
                  Support Tickets
                  </Box>
                <Box> 20</Box>
            </NavLink>
             
            
            
           
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={3}>
          <Box color={'#7d879c'} textTransform={'uppercase'}>
          Account Settings
            </Box >
              <NavLink display={'flex'} alignItems={'center'} justifyContent={'space-between'} href={'/user/profile'}>
                <Box display={'flex'} gap={1} >
                <PersonSharpIcon fontSize='small' />
                  Profile Info
                  </Box>
                <Box> 3</Box>
            </NavLink>
              <NavLink display={'flex'} alignItems={'center'} justifyContent={'space-between'} href={'/user/addresses'}>
                <Box display={'flex'} gap={1} >
                <MapsHomeWorkIcon fontSize='small' />
                Addresses
                  </Box>
                <Box> 3</Box>
            </NavLink>
              <NavLink display={'flex'} alignItems={'center'} justifyContent={'space-between'} href={'/user/payment'}>
                <Box display={'flex'} gap={1} >
                <PaymentIcon fontSize='small' />
                Payment Methods
                  </Box>
                <Box> 3</Box>
            </NavLink>
            
           
           
            
            
      </Box>
        
 </FlexBox>
  )
}

export default UserDasboard