import { Box, Button, Container, Rating } from '@mui/material'
import React from 'react'
import Image from '../components/Image'
import img from '../assets/7.webp'
import styled from '@emotion/styled'
import NavLink from '../components/nav-link/NavLink'
import { Outlet } from 'react-router-dom'
import NavLink2 from '../components/nav-link/NavLink2'
import BestSellers from './home/components/BestSellers'
const StyledImg = styled("div")(({ active_route }) => ({
    // border:'2px solid rgb(218, 225, 231)',
    height:'64px',
    width:'64px',
    backgroundColor:'white',
    borderRadius:'8px',
    position: "relative",
    transition: "color 150ms ease-in-out",
    border: active_route === "active" ? '2px solid red' : '2px solid rgb(218, 225, 231)',
    "&:hover": {
        border:'2px solid red',

    }
}))
const CardDetail = (product) => {
  return (
    <Container sx={{mt:'50px'}}>
        
        <Box id='product-detail' display={'flex'} mb={'100px'}  >
            <Box  flexGrow={'1'} display={'flex'} flexDirection={'column'}  >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                <Image src={img} ></Image>
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                    <StyledImg active_route border={'2px solid rgb(218, 225, 231)'} height={'64px'} borderRadius={'8px'}  width={'64px'} bgcolor={'white'}>
                        <Image height={'100%'} src={img}  ></Image>
                    </StyledImg>
                    <StyledImg active_route border={'2px solid rgb(218, 225, 231)'} height={'64px'} borderRadius={'8px'}  width={'64px'} bgcolor={'white'}>
                        <Image height={'100%'} src={img}  ></Image>
                    </StyledImg>
                    <StyledImg active_route border={'2px solid rgb(218, 225, 231)'} height={'64px'} borderRadius={'8px'}  width={'64px'} bgcolor={'white'}>
                        <Image height={'100%'} src={img}  ></Image>
                    </StyledImg>
                </Box>
            </Box>
            <Box flexGrow={'1'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box fontWeight={'700'} fontSize={'30px'}>Police Gray Eyeglasses</Box>
                <Box>Brand : Xiaomi</Box>
                <Box display={'flex'} alignItems={'center'}  gap={'10px'}>
                    <Box>Rated</Box>
                    <Rating name="read-only" value={4} readOnly />(50)
                </Box>
                <Box color={'red'} fontWeight={'700'} fontSize={'25px'}>US$167.00</Box>
                <Box>Stock available</Box>
                <Button variant='contained' color='error' sx={{width:'120px'}} >Add To Cart</Button>
                <Box display={'flex'} gap={'10px'}>
                    <Box>Sold By:</Box>
                    <Box fontWeight={'600'}>Mobile Store</Box>
                </Box>
            </Box>
        </Box>
        <Box sx={{mb:'100px'}}>
            <Box display={'flex'} gap={'20px'} mb={'20px'} borderBottom={'1px solid #DAE1E7'}>
                <NavLink2  href={'/card-detail/description'}>Description</NavLink2>
                <NavLink2 href={'/card-detail/Review'}>Review(3)</NavLink2>
            </Box>
            <Outlet></Outlet>
        </Box>
        <BestSellers text={'Related Products'} ></BestSellers>
    </Container>
  )
}

export default CardDetail