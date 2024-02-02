import { Box, Button, Container, FormControl, InputLabel, Menu, MenuItem, Select, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FlexBox } from '../../../../components/flex-box'
import styled from '@emotion/styled'
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchPageHeader from './header/SearchPageHeader';
import SearchCate from './body/SearchCate';
import SearchProducts from './body/SearchProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../apis/product';
import { SnackbarProvider } from 'notistack';




const SearchPage = () => {
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(null)
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const productsData = await getProduct()
            setProducts(productsData.data.products)
            setTotalPages(productsData.data.totalPages)
            setTotalProducts(productsData.data.totalProducts)

        } catch (error) {
            // console.log(error);
        }
    }

    fetchProducts()
}, [filter])
  return (
   <>
    <Container>
    <SearchPageHeader />
    <FlexBox display='flex' gap='20px' >
        <SearchCate filter ={filter}/>
        <SnackbarProvider>
         <SearchProducts products={products} />

        </SnackbarProvider>
    </FlexBox>
    </Container>
   </>
  )
}

export default SearchPage