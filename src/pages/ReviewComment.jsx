import { Box, Rating } from '@mui/material'
import React from 'react'
import Image from '../components/Image'
import ava from '../assets/review.png'

const ReviewComment = ({ava,name,time}) => {
  return (
    <Box>
        <Box display={'flex'} gap={'20px'} mb={'20px'}>
            <Box width={'50px'}>
                <Image sx={{width:'100%'}} src={ava}></Image>
            </Box>
            <Box>
                <Box fontSize={'20px'} fontWeight={'600'}>{name}</Box>
                <Box display={'flex'} gap={'10px'}>
                    <Rating value={5} readOnly></Rating>
                    <Box fontWeight={'600'}> 4.7</Box>
                    <Box>{time}</Box>
                </Box>
            </Box>
        </Box>
        <Box width={'600px'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
            </Box>
</Box>
  )
}

export default ReviewComment