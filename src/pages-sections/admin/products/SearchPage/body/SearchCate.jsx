import styled from '@emotion/styled'
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FlexBox } from '../../../../../components/flex-box'
import { getAllCategories } from '../../../../../apis/product'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../../../../redux/slice/filterSlice'


const BoxWrapper = styled("div")(() => ({
    backgroundColor:'white',
    padding:'25px',
    marginTop:'50px',
    borderRadius:'8px',
    width:'100%'
}))
const Subcate = styled("div")(() => ({
    fontWeight:'200',
    fontSize:'16px',
   
}))
const CateWrapper = styled("div")(() => ({
   display:'flex',
   flexDirection:'column',
   gap:'15px',
   borderBottom:'1px solid rgb(243, 245, 249);',
   paddingBottom:'20px',
   marginBottom:'30px'
}))
const SearchCate = ({filter}) => {
    // console.log(filter);
    const [categories,setCategories] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const getAllCate = async () => {
            const res = await getAllCategories()
            setCategories(res.data.data)
        }
        getAllCate()
    },[])
    const handleCategoryChange = (event) => {
        const selectedCategories = event.target.value;
        // Toggle the selected category in the array
        const updatedCategories = filter.category.includes(selectedCategories)
            ? filter.category.filter((category) => category !== selectedCategories)
            : [...filter.category, selectedCategories];

        dispatch(setCategory(updatedCategories));
    };
  return (
    <FlexBox flex={'0.5 1 auto'} >
      < BoxWrapper>
        <CateWrapper >
            <Box fontWeight={600}>Categories</Box>
           {
            categories.map((item,index)=>
             <FormControlLabel
            key={index}
            sx={{
                display: "flex",
            }}
            // onClick={handleFilterClick('brand', filter.brand ? [...filter.brand, item].join(',') : item)}
            label={<div >{item.name}</div>}
            control={<Checkbox size="small" color="secondary"
                checked={filter.category.includes(item._id)}
                onChange={handleCategoryChange}
                value={item._id} />}
        />)
           }
        </CateWrapper>
        <CateWrapper>
        <Box fontWeight={600}>Price Range </Box>

        </CateWrapper>
        <CateWrapper>
        <Box fontWeight={600}>Brands </Box>
            <FormControl>
                <RadioGroup
                    defaultValue="None"
                    name="brands"
                >
                    <FormControlLabel value="Marcs" control={<Radio />} label="Marcs" />
                    <FormControlLabel value="Karts" control={<Radio />} label="Karts" />
                    <FormControlLabel value="Baars" control={<Radio />} label="Baars" />
                    <FormControlLabel value="Bukks" control={<Radio />} label="Bukks" />
                    <FormControlLabel value="Luasis" control={<Radio />} label="Luasis" />
                </RadioGroup>
        </FormControl>
        </CateWrapper>
        
        <CateWrapper>
            <Box fontWeight={600}>Ratings </Box>
            <FormControl>
                    <RadioGroup
                        defaultValue="None"
                        name="brands"
                    >
                    </RadioGroup>
            </FormControl>
        </CateWrapper>
        <CateWrapper>
            <Box fontWeight={600}>Colors </Box>
            <FlexBox>
                <Box></Box>
            </FlexBox>
        </CateWrapper>
      </BoxWrapper>
    </FlexBox>
  )
}

export default SearchCate