import styled from '@emotion/styled'
import React, { useState } from 'react'
import { FlexBox } from '../../../../../components/flex-box'
import { Alert, Box, Button, Rating, Snackbar } from '@mui/material'
import { reduceCart, removeCart, setCart } from '../../../../../redux/slice/addTocart'
import { useDispatch, useSelector } from 'react-redux'
import img from '../../../../../assets/7.webp'
import Image from '../../../../../components/Image'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'
import CardProduct from './CardProduct'

const BoxWrapper = styled("div")(() => ({
  backgroundColor:'white',
  padding:'20px',
  marginTop:'50px',
  borderRadius:'8px',
  width: "100%",
  height:'400px'
}))
const StyledLink = styled(Box)(({  active_route }) => ({
  
  "&:hover": {
      color: `orange`,
  }
}))
const SearchProducts = ({products}) => {
  const { enqueueSnackbar } = useSnackbar()
  const cart = useSelector((state)=>state.addToCart)
  const dispatch = useDispatch()

  const handleAddToCart = (product,variant)=>{
    dispatch(setCart({product,quantity:1}))
    enqueueSnackbar('Added to Cart', { variant });

   }
  const handleReduceCart = (product,variant)=>{
    dispatch(reduceCart({product,quantity:1}))
    enqueueSnackbar('Removed from Cart', { variant });

   }
   const deleteCart=(product) =>{
    dispatch(removeCart(product))
    
}
  
  return (
    <FlexBox flex={'4 1 auto'}  >
        <FlexBox width='100%' display='grid' gridTemplateColumns='auto auto auto' gap='25px'>

        {
          products?.map((item,index)=>{
            // console.log(cart.items);
            // const quantity = useSelector(state=>state.addToCart)
            // console.log(quantity);
            // const array = cart.items.filter(cartItem=>{
            //   console.log(cartItem.product._id===item._id);
            //   cartItem.product._id=== item._id
            //  })
            //  const quantity = array.length >0 ? array[0].quantity : 0
            // console.log(quantity);
            // console.log(array);

        return <CardProduct item={item} key={index}/>
          })
        }
       
        </FlexBox>

    </FlexBox>
  )
}

export default SearchProducts