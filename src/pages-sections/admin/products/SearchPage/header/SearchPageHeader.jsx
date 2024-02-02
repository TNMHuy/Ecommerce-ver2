import { Box, Button, Container, FormControl, InputLabel, Menu, MenuItem, Select, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { FlexBox } from '../../../../../components/flex-box';


const StyledLink = styled("div")(({ theme, active_route }) => ({
    position: "relative",
    transition: "color 150ms ease-in-out",
    color: active_route === "active" ? theme.palette.primary.main : "inherit",
    "&:hover": {
        color: `${theme.palette.primary.main} !important`
    }
}))
const SearchPageHeader = () => {
  
    const [cate, setCate] = useState('');
    const NavWrapper = styled(FlexBox)(({  }) => ({
        backgroundColor:'white',
        padding:'20px',
        marginTop:'50px',
        borderRadius:'8px',

    }))
    const handleChange = (event) => {
        setCate(event.target.value)
      };
  return (
    
    <NavWrapper >
       <FlexBox  display='flex' justifyContent='space-between' alignItems='center' width='100%'  > 
            <FlexBox display='flex' flexDirection='column'   >
                
                <Box  fontSize={'20px'} fontWeight={'600'}>
                    Searching for products
                    </Box>
                {/* <Box>
                    48 results found
                </Box> */}
            </FlexBox>
            <FlexBox display='flex' alignItems='center' gap='30px'>
                <FlexBox display='flex' alignItems='center'>
                    <Box>Short by :</Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                        <Select
                        value={cate}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                         <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Relevance</MenuItem>
                        <MenuItem value={20}>Date</MenuItem>
                        <MenuItem value={30}>Price</MenuItem>
                        </Select>
                    </FormControl>
                </FlexBox>
                
            </FlexBox>
       </FlexBox>
    </NavWrapper>
   
  )
}

export default SearchPageHeader