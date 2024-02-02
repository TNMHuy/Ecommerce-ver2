import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeCardProduct from './HomeCardProduct';
import { getProduct } from '../../../apis/product';
import { SnackbarProvider } from 'notistack';
const BestSellers = ({text}) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const productsData = await getProduct()
            setProducts(productsData.data.products)

        } catch (error) {
            // console.log(error);
        }
    }

    fetchProducts()
}, [])
  return (
    <Container sx={{p:'0 !important',}}>
        <Box display={'flex'} justifyContent={'space-between'} mb={'40px'} >
            <Box sx={{
                fontSize:'20px',
                fontWeight:'700',
                color:'#2b3445',
            }}>{text}</Box>
            <Box sx={{
                color:'#222222',
                fontWeight:'600',
                fontSize:'14',
                display:'flex',
                alignItems:'center',
                gap:'10px',
                }} >
                <Box >More Product </Box>
                <ArrowForwardIcon fontSize='small'></ArrowForwardIcon>
            </Box>
        </Box>
        <Box display={'flex'} position={'relative'} gap={'20px'} justifyContent={'space-between'} overflow={'hidden'}>
            <SnackbarProvider>
                <HomeCardProduct products={products}></HomeCardProduct>
             </SnackbarProvider>
            <Button
                variant='outlined'
                size='small'
                sx={{
                    position:'absolute',
                    top:'40%',
                    backgroundColor:'#DAE1E7'
                }}>
                <ArrowBackIcon></ArrowBackIcon>
            </Button>
            <Button
                variant='outlined'
                size='small'
                sx={{
                    position:'absolute',
                    top:'40%',
                    right:'0',
                    backgroundColor:'#DAE1E7',
                }}>
                <ArrowForwardIcon></ArrowForwardIcon>
            </Button>
        </Box>
    </Container>
  )
}

export default BestSellers