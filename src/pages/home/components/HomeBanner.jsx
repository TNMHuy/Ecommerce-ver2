import { Box, Button } from '@mui/material'
import React from 'react'
import banner1 from'../../../assets/banner-15.jpg'
import banner2 from'../../../assets/banner-25.jpg'
import banner3 from'../../../assets/banner-17.jpg'
import banner4 from'../../../assets/banner-16.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../../../components/Image'
const HomeBanner = () => {
  return (
    <Box id='slider' display={'flex'} >

        <Box position={'relative'}>
            <Image width={'920px'} src={banner1} ></Image>
            <Box position={'absolute'} top={'100px'} left={'100px'}>
                <Box textTransform={'uppercase'} fontSize={'30px'} fontWeight={'400'}> lifestyle collection</Box>
                <Box fontSize={'60px'} fontWeight={'700'}>MEN</Box>
                <Box display={'flex'} textTransform={'uppercase'} fontSize={'30px'} fontWeight={'600'} gap={'10px'} >
                    <Box >sale up to</Box>
                    <Box color={'red'}> 30% off</Box>
                </Box>
                <Box fontSize={'18px'} fontWeight={'400'} mb={'20px'}>Get Free Shipping on orders over $99.00</Box>
                <Button variant='contained'sx={{backgroundColor:'black',color:'white'}} >Shop Now</Button>
            </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Box position={'relative'}>
                <Image   Image width={'300px'} height={'240px'} src={banner3} ></Image>
                <Box position={'absolute'} top={'50px'} left={'30px'}>
                    <Box fontSize={'13px'} fontWeight={'400'} textTransform={'uppercase'}>new arrivals</Box>
                    <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>summer</Box>
                    <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>sale 20% off</Box>
                    <Box>
                        <Button>Shop Now
                            <ArrowForwardIcon fontSize='small'></ArrowForwardIcon>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box position={'relative'}>
                <Image   Image width={'300px'} height={'240px'} src={banner4} ></Image>
                <Box position={'absolute'} top={'50px'} left={'30px'}>
                    <Box fontSize={'13px'} fontWeight={'400'} textTransform={'uppercase'}>gaming 4k</Box>
                    <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>desktops &</Box>
                    <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>laptops</Box>
                    <Box>
                        <Button>Shop Now
                            <ArrowForwardIcon fontSize='small'></ArrowForwardIcon>
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>
</Box>
  )
}

export default HomeBanner