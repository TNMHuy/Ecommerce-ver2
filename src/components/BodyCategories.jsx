import { Box,  Container, } from '@mui/material'
import React from 'react'
import { FlexBox } from './flex-box'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import UserAccountNav from './nav-link/UserAccountNav';
import PagesNav from './nav-link/PagesNav';
import NavLink from './nav-link/NavLink';



const BodyCategories = () => {
 
  return (
    <>
    <Container
           sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent:'space-between',
            marginTop:'16px',
        }}
            
    >
        <FlexBox display='flex' justifyContent='space-between' width='300px'  >
            <Box 
                display={'flex'} gap={'5px'}>
            <CategoryOutlinedIcon/>
            Categories
            </Box>
            
                <KeyboardArrowRightIcon/>   
            
        </FlexBox>
        <Box display={'flex'} gap={3} alignItems={'center'}  >
            <NavLink>About</NavLink>
            <PagesNav/>
           <UserAccountNav/>
            
            
        </Box>
    </Container>
     </>
  )
}

export default BodyCategories