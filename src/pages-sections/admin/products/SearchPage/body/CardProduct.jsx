import { Box, Button, Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../../../components/Image'
import styled from '@emotion/styled'
import img from '../../../../../assets/7.webp'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { reduceCart, removeCart, setCart } from '../../../../../redux/slice/addTocart'

const BoxWrapper = styled("div")(() => ({
    backgroundColor:'white',
    padding:'20px',
    marginTop:'50px',
    borderRadius:'8px',
    width: "100%",
    height:'500px'
  }))
  const StyledLink = styled(Box)(({  active_route }) => ({
    
    "&:hover": {
        color: `orange`,
    }
  }))
const CardProduct = ({item,index}) => {
    const { enqueueSnackbar } = useSnackbar()
    const cart = useSelector((state)=>state.addToCart)
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
        dispatch(setCart({product,quantity:1}))
        enqueueSnackbar('Added to Cart', { variant:'success' });
       }
      const handleReduceCart = (product)=>{
        quantity>1?dispatch(reduceCart({product,quantity:1})) :dispatch(removeCart({product})) 

        // dispatch(reduceCart({product,quantity:1}))
        
        enqueueSnackbar('Removed from Cart', { variant:'error' });

    
       }
    // const qtt  = useSelector(state => {
    //     const isProduct = state.addToCart.items.filter( item =>item.product.id === item.id)
    //     if()
    // })
    const quantity = useSelector(state=>{
        const arr = state.addToCart.items.filter( i=> i.product.id===item.id)
        if(arr.length>0) return arr[0].quantity
        return 0
    })
    // console.log(typeof (item.price.toLocaleString("en-US", {style:"currency", currency:"vnd"})));
  return (
    <BoxWrapper key={index}> 
                <Box width={'290px'} mb={'10px'} >
                    <Link to={'/card-detail'} >
                        <Image width={'100%'} height={'300px'} src={item.image}></Image>
                        <Box fontWeight={'600'} height={'72px'} mt={'20px'} >{item.title} </Box> 
                    </Link>
                <Rating name="read-only" value={item.rating.rate} readOnly />
                </Box>
            
            <Box  display={'flex'} color={'red'} alignItems={'center'} justifyContent={'space-between'}  >
                <Box  fontWeight={'600'} fontSize={'16px'} >{index}
                    {item.price.toLocaleString("en-US", {style:"currency", currency:"vnd"})}
                </Box>
                <Box position={'relative'} >
                    <StyledLink>
                        <Button variant='outlined'  onClick={()=>{handleAddToCart(item)}} sx={{
                                height:'28px',width:'28px',fontSize:'25px',}}>
                            <Box mt={'-4px'} >+</Box>
                            </Button>
                    </StyledLink>
                <Box position={'absolute'} top={'-50px'}>
                {
                    quantity>0 &&<StyledLink>
                    <Button variant='outlined' onClick={()=>handleReduceCart(item)}
                       
                    sx={{
                        height:'28px',width:'28px',fontSize:'25px',}}>
                        <Box mt={'-4px'} >-</Box>
                        </Button>
                                <Box textAlign={'center'}>{quantity}</Box>
                    </StyledLink>
                }
                </Box>
                
                
                </Box>
            </Box>
                



</BoxWrapper>
  )
}

export default CardProduct