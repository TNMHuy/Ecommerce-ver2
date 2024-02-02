import { Box, Container } from '@mui/material'
import React from 'react'
import HomeBanner from './components/HomeBanner'
import HomeAdvantages from './components/HomeAdvantages'
import ScrollText from './components/ScrollText'
import BestSellers from './components/BestSellers'
import SubBanner1 from './components/SubBanner1'
import FeaturedBrands from './components/FeaturedBrands'
const Home = () => {
    return (
        <Container >
            <Box  mt={'50px'} display={'flex'} flexDirection={'column'} gap={'80px'}>
                <HomeBanner></HomeBanner>
                <HomeAdvantages></HomeAdvantages>
                <ScrollText></ScrollText>
                <BestSellers text={'Best Sellers'}></BestSellers>
                <SubBanner1></SubBanner1>
                <BestSellers text={'New Arrivals'}></BestSellers>
                <FeaturedBrands></FeaturedBrands>
                <BestSellers text={'Most Popular'}></BestSellers>

            </Box>
        </Container>
    )
}

export default Home