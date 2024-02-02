import { Box, Button, Container } from '@mui/material'
import React from 'react'
import Marquee from 'react-fast-marquee'

const ScrollText = () => {
  return (
    <Container sx={{
            backgroundColor:'#434343',
            p:'0 !important',
            position:'relative',
            overflow:'hidden',
        }} >
        <Box sx={{display:'flex',
            fontSize:'30px',
            width:'100%',
            p:'5px',}}>

        <Box sx={{
            backgroundColor:'#e0e0e0',
            padding:'30px',
            position:'absolute',
            top:'0',
            left:'0',
            zIndex:'10',
            height:'100%',
            width:'30%',
            textTransform:'uppercase',
            fontWeight:'700',
            color:'#222222',
            display:'flex',
            alignItems:'center',

            }}>
                <Box>black friday sale!</Box>
            <Box sx={{
                rotate:'25deg',
                position:'absolute ',
                backgroundColor:'#e0e0e0',
                right:'-45px',
                height:'200px',
                width:'70px',
                zIndex:'5',
        }}></Box>
            </Box>
            
        <Box sx={{backgroundColor:'#434343',
                display:'flex',
                padding:'30px',
                width:'100%',
                border:'1px dashed #fff',
                }}>
                <Marquee  speed={'50'} >
                    <Box sx={{
                        overflow:'hidden',
                        textTransform:'uppercase',
                        
                        fontStyle:'italic',
                        color:'#ffffff',
                        display:'flex',
                        alignItems:'center',
                        gap:'10px'
                        }}>
                            <Box>pay only for</Box>
                            <Box fontWeight={'700'}>your loving electronics</Box>
                        
                    </Box>
                </Marquee>
                {/* <p id='marqueeText'>abcxyz</p> */}
            <Box sx={{
                
                color:'black',
                width:'140px',
                background:'white',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                ml:'20px',
            }}><Button sx={{fontSize:'20px'}}>Shop Now</Button></Box>
            </Box>
        </Box>
        
    </Container>
  )
}

export default ScrollText