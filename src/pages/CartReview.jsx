import styled from '@emotion/styled'
import { Autocomplete, Box, Button, Container, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layoutConstant } from '../utils/constants'
import CartImg from '../assets/cart.png'
import Image from '../components/Image'
import { reduceCart, removeCart, setCart } from '../redux/slice/addTocart'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
const country = [
    { label: 'America',  },
    { label: 'Belgium',  },
    { label: 'Canada',  },
    { label: 'Denmark',  },
    { label: 'Egypt',  },
    { label: "France",  },
    { label: 'Germany', },
]
const state = [
    { label: 'Texas',  },
    { label: 'Hawaii',  },
    { label: 'Colorado',  },
    { label: 'California',  },
    { label: 'Alaska',  },
    { label: "Nevada",  },
    { label: 'Missouri', },
]

const StyledLink = styled("div")(({ theme, active_route }) => ({
    position: "relative",
    transition: "color 150ms ease-in-out",
    color: active_route === "active" ? theme.palette.primary.main : "inherit",
    "&:hover": {
        color: `${theme.palette.primary.main} !important`
    }
}))
export const CartWrapper = styled(Box)(({ theme }) => ({
    zIndex: 3,
    // position: "absolute",
    transition: "height 250ms ease-in-out",
    background: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
        height: layoutConstant.mobileHeaderHeight
    }
}))
const CartReview = () => {
    const product = useSelector((state)=>state.addToCart.items)
    const dispatch = useDispatch()
    // console.log(product);
    let total = 0 
    const pay = product.map((item,index)=>{
        const sum = item.product.price * item.quantity
        return total += sum
    })
    const handleAddToCart = (product)=>{
        dispatch(setCart({product,quantity:1}))
       }
    const handleReduceCart=(product) =>{
        dispatch(reduceCart(product))
        
    }
    const deleteCart=(product) =>{
        dispatch(removeCart(product))
        
    }

  return (
    <Container>
        
        <Box display={'flex'} gap={'40px'} >
        <Box >
           {
            product.map((item,index)=>{
                console.log(item);
                const cartSum = item.product.price * item.quantity
                return <Box mt={'30px'} boxShadow={'5px 5px 10px 0px grey '} borderRadius={'20px'}  key={index}>
                <CartWrapper display={'flex'} alignItems={'center'}  >
                    <Image src={CartImg} width={'150px'}></Image>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'end'} >
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'650px'}>
                            <Box fontWeight={'500'}>{item.product.name}</Box>  
                            <StyledLink>
                                    <Button onClick={()=>deleteCart(item)}>
                                        <CloseIcon  ></CloseIcon>
                                    </Button>
                                </StyledLink>
                        </Box>
                        <Box mt={'15px'} mb={'15px'} fontWeight={'100'} display={'flex'} gap={'10px'}>${item.product.price} x {item.quantity}   <Box color={'red'} fontWeight={600}>${cartSum}</Box></Box>
                        <Box>
                    <Box display={'flex'}  textAlign={'center'} alignItems={'center'}  gap={'10px'}>
                                
                                <StyledLink>
                                    {
                                        item.quantity>1
                                        ?<Button onClick={()=>handleReduceCart(item)}  variant='outlined' sx={{ width:'30px',height:'30px', fontWeight:'400',fontSize:'20px',textAlign:'center'}}  size='small' >-</Button>
                                        :<Button onClick={()=>handleReduceCart(item)}  variant='outlined' disabled sx={{ width:'30px',height:'30px', fontWeight:'400',fontSize:'20px',textAlign:'center'}}  size='small' >-</Button>
                                        
                                    }

                                </StyledLink>
                                    <Box>{item.quantity}</Box>
                                    <StyledLink>
                                <Button  variant='outlined'
                                            onClick={()=>handleAddToCart(item.product)} 
                                            sx={{
                                                
                                                width:'30px',
                                                height:'30px',
                                                fontWeight:'400',
                                                fontSize:'20px',
                                                textAlign:'center',
                                                }} size='small' >+
                                    </Button>
                                </StyledLink>
                               
                            </Box>
                            
                    </Box>
                    </Box>
                   
                       
                   
                </CartWrapper>
            </Box>
            })
           }
        </Box>
        <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Box  display={'flex'} justifyContent={'space-between'}  >
                <Box fontSize={'20px'} >Total:</Box>
                <Box fontWeight={'600'} fontSize={'25px'} >${total}</Box>
            </Box>
            <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                <Box fontWeight={'600'} fontSize={'20px'}> Additonal Comments</Box>
                <Box color={'red'}>Note</Box>
            </Box>
           
            <TextField variant="outlined" fullWidth  multiline rows={5} />  
                
         
           <Box mt={'20px'} mb={'20px'}>
             <TextField sx={{marginBottom:'10px'}} label='Voucher' placeholder='Voucher' variant="outlined" fullWidth   />
             <Button fullWidth variant='outlined'color='error'>Apply Voucher</Button>
           </Box>
           <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box >Shipping Estimates</Box>
                <Autocomplete 
                        renderInput={(params) => <TextField {...params} label="Country"/>}
                        disablePortal
                        options={country}
                />
                <Autocomplete 
                        renderInput={(params) => <TextField {...params} label="State"/>}
                        disablePortal
                        options={state}
                />
                <TextField label='Zip Code'/>
                <Button variant='outlined'color='error'> Calculate Shipping</Button>
                <Link to={'/checkout'}>
                    <Button variant='contained' sx={{width:'100%'}} color='error'>Checkout Now</Button>
                </Link>
           </Box>
        </Box>
        </Box>
    </Container>
  )
}

export default CartReview