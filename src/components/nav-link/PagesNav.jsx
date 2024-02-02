import React, { useState } from 'react'
import { FlexBox } from '../flex-box'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Link, } from 'react-router-dom';

const PagesNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <FlexBox
    alignItems='center'
>
<Button
    id="basic-button"
    onClick={handleClick}
    fontSize='30px'
>
        <Box  >
        Pages
        </Box>
    <ExpandMoreOutlinedIcon/>
 </Button>

<Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  
>
    <Link to='/search-page'>
    <MenuItem onClick={handleClose} >Search Page</MenuItem>
    </Link>
   
    
</Menu>
</FlexBox>
  )
}

export default PagesNav