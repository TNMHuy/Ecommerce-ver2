import { Badge, Box, Button, Container, Dialog, IconButton, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { layoutConstant } from '../../utils/constants'
import { FlexBox } from '../flex-box'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../Image'
import SearchBox from '../search-box/SearchBox'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from 'react-redux'
import CartImg from '../../assets/cart.png'
import CloseIcon from '@mui/icons-material/Close';
import { reduceCart, removeCart, setCart } from '../../redux/slice/addTocart'
const StyledLink = styled("div")(({ theme, active_route }) => ({
    position: "relative",
    transition: "color 150ms ease-in-out",
    color: active_route === "active" ? theme.palette.primary.main : "inherit",
    "&:hover": {
        color: `${theme.palette.primary.main} !important`
    }
}))
export const HeaderWrapper = styled(Box)(({ theme }) => ({
    zIndex: 3,
    // position: "absolute",
    height: layoutConstant.headerHeight,
    transition: "height 250ms ease-in-out",
    background: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
        height: layoutConstant.mobileHeaderHeight
    }
}))

const Header = () => {
    const theme = useTheme();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [sidenavOpen, setSidenavOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const downMd = useMediaQuery(theme.breakpoints.down(1150));
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()
    const toggleDialog = () => setDialogOpen(!dialogOpen);
    const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
    const cart = useSelector((state)=> state.addToCart.totalQuantity)
    const product = useSelector((state)=>state.addToCart)
    const dispatch = useDispatch()
    // console.log(product);
    const handleOpen =() =>{
        setOpen(true)
    }
    const handleClose=() =>{
        setOpen(false)
    }
    const handleAddToCart = (product)=>{
        dispatch(setCart({product,quantity:1}))
       }
    const handleReduceCart=(product) =>{
        dispatch(reduceCart(product))
        
    }
    const deleteCart=(product) =>{
        dispatch(removeCart(product))
        
    }
    let total = 0 
    const pay = product.items.map((item,index)=>{
        // console.log(item);
        const sum = item.product.price * item.quantity
        return total += sum
    })
    return (
        <HeaderWrapper>
            <Container
                sx={{
                    gap: 2,
                    height: "100%",
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <FlexBox
                    mr={2}
                    minWidth="170px"
                    alignItems="center"
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    }}
                >
                    <Link to="/">
                        <Image height={44} src='https://bazaar-eight.vercel.app/assets/images/logo2.svg' alt="logo" />
                    </Link>
                </FlexBox>
                <FlexBox justifyContent="center" flex="1 1 0">
                    <SearchBox />
                </FlexBox>
                <FlexBox
                    alignItems="center"
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    }}
                >
                    <Box
                        component={IconButton}
                        p={1.25}
                        bgcolor="grey.200"
                        onClick={auth.isLogin ? () => navigate('/user') : toggleDialog}
                    >
                        <PersonOutlinedIcon />
                    </Box>
                    <Badge badgeContent={cart} color='primary' onClick={handleOpen}>
                        <Box
                            ml={2.5}
                            p={1.25}
                            bgcolor={"grey.200"}
                            component={IconButton}
                            
                        >
                            <ShoppingBagOutlinedIcon />
                            
                        </Box>
                    </Badge>
                </FlexBox>
                
                {/* {!auth.isLogin && <Dialog
                    scroll="body"
                    open={dialogOpen}
                    fullWidth={isMobile}
                    onClose={toggleDialog}
                >
                    <Login />
                </Dialog>} */}
            </Container>
            <Dialog open={open} onClose={handleClose} scroll="body" PaperProps={{
                 sx:{
                    position:'fixed',
                    right:'0',
                    m:'0',
                    height:'100%',
                    width:'370px',
                    borderRadius:'0',
                     }}} >
                    <FlexBox padding={'20px'} display={'flex'} flexDirection={'column'} justifyContent={'e'} >
                        <Box display={'flex'} alignItems={'center'} marginBottom={'30px'}>
                            <ShoppingBagOutlinedIcon />
                            <Box fontWeight={'600'} fontSize={'16px'}> {cart} items</Box>
                        </Box>
                       {
                        product.items.length>0
                        ?
                       
                        product.items.map((item,index)=>{
                            const total = item.product.price * item.quantity
                            return  <Box key={index} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={'30px'}>
                            <Box display={'flex'} flexDirection={'column'} textAlign={'center'} >
                                <StyledLink>
                                <Button  variant='outlined'
                                            onClick={()=>handleAddToCart(item.product)} 
                                            sx={{
                                                borderRadius:'100%',
                                                width:'30px',
                                                height:'30px',
                                                fontWeight:'400',
                                                fontSize:'20px',
                                                textAlign:'center',
                                                }} size='small' >+
                                    </Button>
                                </StyledLink>
                                <Box>{item.quantity}</Box>
                                <StyledLink>
                                    {
                                        item.quantity>1
                                        ?<Button onClick={()=>handleReduceCart(item)}  variant='outlined' sx={{borderRadius:'100%', width:'30px',height:'30px', fontWeight:'400',fontSize:'20px',textAlign:'center'}}  size='small' >-</Button>
                                        :<Button onClick={()=>handleReduceCart(item)}  variant='outlined' disabled sx={{borderRadius:'100%', width:'30px',height:'30px', fontWeight:'400',fontSize:'20px',textAlign:'center'}}  size='small' >-</Button>

                                    }

                                </StyledLink>
                            </Box>
                            <Image src={CartImg} width={'90px'}></Image>
                            <Box display={'flex'} flexDirection={'column'} gap={'3px'} >
                                <Box fontWeight={'600'}>{item.product.name}</Box>
                                <Box fontWeight={'100'} fontSize={'12px'}>US${item.product.price} x {item.quantity}</Box>
                                <Box fontWeight={'600'} color={'red'}>US${total}</Box>
                            </Box>
                            <StyledLink>
                                <Button onClick={()=>deleteCart(item)}>
                                    <CloseIcon  ></CloseIcon>
                                </Button>
                            </StyledLink>
                    </Box>
                            
                        }
                        
                        )
                       
                    :
                    <Box>
                        Your shopping bag is empty. Start shopping
                    </Box>
                       }
                        <Box display={'flex'} flexDirection={'column'} gap={'10px'} position={'fixed'} bottom={'20px'}>
                            <Link to={'/checkout'}>
                                <Button variant='contained'sx={{width:'100%'}} color='error' >Checkout Now (${total})</Button>
                            </Link>
                                <Link to={'/cart'}>
                            <Button variant='outlined'sx={{color:'red',width:'332px'}} onClick={()=>handleClose()}  >
                                View Cart
                                </Button>
                                </Link>
                        </Box>
                    </FlexBox>
                </Dialog>
        </HeaderWrapper>
    )
}

export default Header