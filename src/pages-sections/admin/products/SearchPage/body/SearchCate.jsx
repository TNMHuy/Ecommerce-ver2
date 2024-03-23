import styled from '@emotion/styled'
import { Box,  FormControl, FormControlLabel,  Radio, RadioGroup, Rating } from '@mui/material'
import React from 'react'
import { FlexBox } from '../../../../../components/flex-box'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters, setFilter,  } from '../../../../../redux/slice/productsSlice'

const BoxWrapper = styled("div")(() => ({
    backgroundColor:'white',
    padding:'25px',
    marginTop:'50px',
    borderRadius:'8px',
    width:'100%'
}))

const CateWrapper = styled("div")(() => ({
   display:'flex',
   flexDirection:'column',
   gap:'15px',
   borderBottom:'1px solid rgb(243, 245, 249);',
   paddingBottom:'20px',
   marginBottom:'30px'
}))
const SearchCate = () => {
   
    const dispatch = useDispatch()
    const handleFilterChange = (e,type) =>{
        dispatch(setFilter({type,value:e.target.value}))
    }
    const filters = useSelector(selectFilters)
   
  return (
    <FlexBox flex={'0.5 1 auto'} >
      < BoxWrapper>
       
        
        <CateWrapper>
        <Box fontWeight={600}>Brands </Box>
            <FormControl>
                <RadioGroup
                    onChange={(e)=>handleFilterChange(e,'category')}
                    defaultValue="None"
                    name="category"
                >
                    <FormControlLabel checked={filters.category === 'all'} value="all" control={<Radio />} label="all" />
                    <FormControlLabel checked={filters.category === "men's clothing"} value="men's clothing" control={<Radio />} label="men's clothing" />
                    <FormControlLabel checked={filters.category === "jewelery"} value="jewelery" control={<Radio />} label="jewelery" />
                    <FormControlLabel checked={filters.category === "electronics"} value="electronics" control={<Radio />} label="electronics" />
                    <FormControlLabel checked={filters.category === "women's clothing"} value="women's clothing" control={<Radio />} label="women's clothing" />
                </RadioGroup>
        </FormControl>
        </CateWrapper>
        
        <CateWrapper>
            <Box fontWeight={600}>Ratings </Box>
            <FormControl>
                    <RadioGroup
                    onChange={(e)=>handleFilterChange(e,'rating')}
                        defaultValue="None"
                        name="rating"
                    >
                    <FormControlLabel checked={filters.rating >= '1' && filters.rating<'2'}  value="1" control={<Radio />} label={<Rating name="read-only" value={1} readOnly />}/>
                    <FormControlLabel checked={filters.rating >= '2' && filters.rating<'3'}  value="2" control={<Radio />} label={<Rating name="read-only" value={2} readOnly />}/>
                    <FormControlLabel checked={filters.rating >= '3' && filters.rating<'4'}  value="3" control={<Radio />} label={<Rating name="read-only" value={3} readOnly />}/>
                    <FormControlLabel checked={filters.rating >= '4' && filters.rating<'5'}  value="4" control={<Radio />} label={<Rating name="read-only" value={4} readOnly />}/>
                    <FormControlLabel checked={filters.rating == '5' }  value="5" control={<Radio />} label={<Rating name="read-only" value={5} readOnly />}/>
                    <FormControlLabel checked={filters.rating === 'all' }  value="all" control={<Radio />} label={<Rating name="read-only" value={0} readOnly />}/>
                   

                    </RadioGroup>
            </FormControl>
        </CateWrapper>
        {/* <CateWrapper>
            <Box fontWeight={600}>Colors </Box>
            <FlexBox>
                <Box></Box>
            </FlexBox>
        </CateWrapper> */}
      </BoxWrapper>
    </FlexBox>
  )
}

export default SearchCate