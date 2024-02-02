import React, { useState } from 'react'
import { FlexBox } from '../flex-box'
import { Button, Menu, MenuItem } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authSlice';

const UserAccountNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout = () => {
      dispatch(logout())
      navigate('/login')
  }
  return (
    <FlexBox
    alignItems='center'
>
          <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              
          >
              User Account
          <ExpandMoreOutlinedIcon/>

          </Button>

          <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            
          >
              <Link to='/user/profile'>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
            
              <MenuItem onClick={()=>handleLogout()} >Logout</MenuItem>
              
          </Menu>
</FlexBox>
  )
}

export default UserAccountNav