import {  Container } from '@mui/material'
import React, { useEffect } from 'react'
import { FlexBox } from '../../../../components/flex-box'
import SearchPageHeader from './header/SearchPageHeader';
import SearchCate from './body/SearchCate';
import SearchProducts from './body/SearchProducts';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../../apis/product';
import { SnackbarProvider } from 'notistack';
import {  setProducts } from '../../../../redux/slice/productsSlice';

const SearchPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts()
          dispatch(setProducts(productsData))
    }
    fetchProducts()
    }, [])
  return (
   <>
    <Container>
    <SearchPageHeader />
    <FlexBox display='flex' gap='20px' >
        <SearchCate  />
        <SnackbarProvider>
         <SearchProducts  />
         {/* <SearchProducts products={products} /> */}
        </SnackbarProvider>
    </FlexBox>
    </Container>
   </>
  )
}

export default SearchPage