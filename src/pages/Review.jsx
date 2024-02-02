import { Box, Button, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import ava1 from '../assets/review.png'
import ava2 from '../assets/review2.png'
import ava3 from '../assets/review3.png'
import ReviewComment from './ReviewComment'
const Review = () => {
    const [value, setValue] = useState(2);
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:'30px'
    }}>
        <ReviewComment name={'Jannie Schumm'} time={'3 months ago'} ava={ava1}></ReviewComment>
        <ReviewComment name={'Joe Kenan'} time={'1 year ago'} ava={ava2}></ReviewComment>
        <ReviewComment name={'Jenifer Tulio'} time={'2 years ago'} ava={ava3}></ReviewComment>
        
        <Box sx={{fontSize:'25px',fontWeight:'600'}}>
        Write a Review for this product
        </Box>
        <Box sx={{fontSize:'16px',fontWeight:'600', display:'flex',gap:'10px'}}>
            <Box>Your Rating</Box> 
            <Box color={'red'}>*</Box>
        </Box>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
        }}
      />
        <Box sx={{fontSize:'16px',fontWeight:'600', display:'flex',gap:'10px'}}>
            <Box>Your Review</Box> 
            <Box color={'red'}>*</Box>
        </Box>
        <TextField 
                required
                variant="outlined" 
                placeholder='Write a review here...' 
                fullWidth  
                multiline 
                rows={8} />  
        <Button sx={{width:'100px'}} variant='contained' color='error'>Summit</Button>
        
    </Box>
  )
}

export default Review