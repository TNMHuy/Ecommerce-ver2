import { Box, Button, Rating } from '@mui/material'
import React from 'react'
import img from '../../../assets/1.webp'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../../redux/slice/addTocart'
import Image from '../../../components/Image'
import { Link } from 'react-router-dom'
const HomeCardProduct = ({products}) => {
    const { enqueueSnackbar } = useSnackbar()
    const cart = useSelector((state)=>state.addToCart)
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
        dispatch(setCart({product,quantity:1}))
        enqueueSnackbar('Added to Cart', { variant:'success' });
       }
  return (
    <>
         {     
        products.map((item,index)=>{
            return  <Box 
                        key={index}
                        sx={{
                            backgroundColor:'white',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            p:'15px',
                            gap:'10px'
                        }}>
                <Link to={'/card-detail'}>
                <Image sx={{width:'200px',height:'100%'}} src={img}></Image>
                </Link>
                <Box>{item.name}</Box>
                <Box sx={{fontSize:'17px', fontWeight:'700'}}>{item.price.toLocaleString("en-US", {style:"currency", currency:"vnd"})}</Box>
                <Box display={'flex'}>
                <Rating name="read-only" value={4} readOnly />

                    <Box>(0)</Box>
                </Box>
                <Button
                    onClick={()=>{handleAddToCart(item)}}
                    sx={{width:'100%',height:'50px'}}
                    variant='outlined'>Add To Cart</Button>
           </Box>
        })
       
    }
    </>
   
   
  )
}

export default HomeCardProduct