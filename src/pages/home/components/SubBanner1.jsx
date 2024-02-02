import { Box, Button, Container } from '@mui/material'
import React from 'react'
import Image from '../../../components/Image'
import banner1 from '../../../assets/sub-banner/banner-1.jpg'
import banner2 from '../../../assets/sub-banner/banner-2.jpg'
import banner3 from '../../../assets/sub-banner/banner-3.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SubBanner1 = () => {
  return (
    <Container sx={{p:'0 !important', }}>
        <Box display={'flex'} justifyContent={'space-between'} gap={'30px'} >
            
            <Box position={'relative'} width={'100%'}>
                <Image    width={'100%'}  src={banner1} ></Image>
                <Box sx={{
                          position:'absolute',
                          top:'20px',
                          left:'30px',
                          display:'flex',
                          flexDirection:'column',
                          gap:'10px',
                    }}>
                    <Box fontSize={'13px'} fontWeight={'400'} textTransform={'uppercase'}>new arrivals</Box>
                    <Box>

                      <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>ski clothes sale</Box>
                      <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'} color={'red'}>up to 35% off </Box>
                    </Box>
                    <Box>
                        <Button>
                            <Box mr={'10px'}>Shop Now</Box>
                            <ArrowForwardIcon fontSize='small'></ArrowForwardIcon>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box position={'relative'} width={'100%'} color={'white'}>
                <Image    width={'100%'}  src={banner2} ></Image>
                <Box sx={{
                          position:'absolute',
                          top:'20px',
                          left:'30px',
                          display:'flex',
                          flexDirection:'column',
                          gap:'10px',
                    }}>
                    <Box fontSize={'13px'} fontWeight={'400'} textTransform={'uppercase'}>best sellers</Box>
                    <Box>

                      <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>trending women</Box>
                      <Box fontSize={'20px'} fontWeight={'400'} textTransform={'uppercase'} >sunglasses </Box>
                    </Box>
                    <Box>
                        <Button>
                            <Box mr={'10px'}>Shop Now</Box>
                            <ArrowForwardIcon fontSize='small'></ArrowForwardIcon>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box position={'relative'} width={'100%'}>
                <Image    width={'100%'}  src={banner3} ></Image>
                <Box sx={{
                          position:'absolute',
                          top:'20px',
                          left:'30px',
                          display:'flex',
                          flexDirection:'column',
                          gap:'10px',
                    }}>
                    <Box fontSize={'13px'} fontWeight={'400'} textTransform={'uppercase'}>new arrivals</Box>
                    <Box>

                      <Box fontSize={'20px'} fontWeight={'600'} textTransform={'uppercase'}>new latest bag</Box>
                      <Box fontSize={'20px'} fontWeight={'400'} textTransform={'uppercase'} >collection </Box>
                    </Box>
                    <Box>
                        <Button>
                            <Box mr={'10px'}>Shop Now</Box>
                            <ArrowForwardIcon fontSize='small'></ArrowForwardIcon>
                        </Button>
                    </Box>
                </Box>
            </Box>
          
            
            
        </Box>
    </Container>
  )
}

export default SubBanner1