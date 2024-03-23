import { Box, Button, Container, FormControl, InputLabel, Menu, MenuItem, Radio, RadioGroup, Select, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { FlexBox } from '../../../../../components/flex-box';
import { setSortOrder } from '../../../../../redux/slice/filterSlice';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../../../redux/slice/productsSlice';


const StyledLink = styled("div")(({ theme, active_route }) => ({
    position: "relative",
    transition: "color 150ms ease-in-out",
    color: active_route === "active" ? theme.palette.primary.main : "inherit",
    "&:hover": {
        color: `${theme.palette.primary.main} !important`
    }
}))
const SearchPageHeader = () => {
  
    const [sort, setSort] = useState('');
    const NavWrapper = styled(FlexBox)(({  }) => ({
        backgroundColor:'white',
        padding:'20px',
        marginTop:'50px',
        borderRadius:'8px',

    }))
    const dispatch = useDispatch()
    const handleFilterChange = (e,type) =>{
        // dispatch(setFilter({type,value:e.target.value}))
        console.log('abc');
    }
    const handleChange = (event) => {
        setSort(event.target.value);
        dispatch(setFilter({type:'sort',value:event.target.value}))

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
                        onChange={handleChange}
                        displayEmpty
                        value={sort}
                        >
                        <MenuItem value={'none'}>none</MenuItem>
                        <MenuItem value={'A-Z'}  >A-Z</MenuItem>
                        <MenuItem value={'Z-A'} >Z-A</MenuItem>
                        <MenuItem value={'Price'} >Price</MenuItem>
                        </Select>
                    </FormControl>
                </FlexBox>
                
            </FlexBox>
       </FlexBox>
    </NavWrapper>
   
  )
}

export default SearchPageHeader