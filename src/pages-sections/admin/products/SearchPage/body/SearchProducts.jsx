import styled from '@emotion/styled'
import { FlexBox } from '../../../../../components/flex-box'
import {  Box,  Rating,  } from '@mui/material'

import CardProduct from './CardProduct'
import { useSelector } from 'react-redux'
import { selectFilteredProducts } from '../../../../../redux/slice/productsSlice'
const BoxWrapper = styled("div")(() => ({
  backgroundColor:'white',
  padding:'20px',
  marginTop:'50px',
  borderRadius:'8px',
  width: "100%",
  height:'400px'
}))
const StyledLink = styled(Box)(({  active_route }) => ({
  
  "&:hover": {
      color: `orange`,
  }
}))
const SearchProducts = ({}) => {
  const products =  useSelector(selectFilteredProducts)
  
  return (
    <FlexBox flex={'4 1 auto'}  >
        <FlexBox width='100%' display='grid' gridTemplateColumns='auto auto auto' gap='25px'>

        {
          products?.map((item,index)=>{
           

        return <CardProduct item={item} key={index}/>
          })
        }
       
        </FlexBox>

    </FlexBox>
  )
}

export default SearchProducts