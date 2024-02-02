import { Box, Container } from '@mui/material'
import React from 'react'
import Image from '../../../components/Image'
import alibaba from '../../../assets/brands/alibaba.png'
import levis from '../../../assets/brands/levis.png'
import lotto from '../../../assets/brands/lotto.png'
import raymond from '../../../assets/brands/raymond.png'
import samsung from '../../../assets/brands/samsung.png'
const FeaturedBrands = () => {
  return (
    <Container sx={{
        p:'0 !important',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'space-between  ',
        padding:'40px',
    }}>
        <Box width={'150px'} >
            <Image sx={{width:'100%'}} src={alibaba}></Image>
        </Box>
        <Box width={'150px'} >
            <Image sx={{width:'100%'}} src={levis}></Image>
        </Box>
        <Box width={'150px'} >
            <Image sx={{width:'100%'}} src={lotto}></Image>
        </Box>
        <Box width={'150px'} >
            <Image sx={{width:'100%'}} src={raymond}></Image>
        </Box>
        <Box width={'150px'} >
            <Image sx={{width:'100%'}} src={samsung}></Image>
        </Box>
        
    </Container>
  )
}

export default FeaturedBrands