import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/topbar/Topbar'
import Header from '../components/header/Header'
import BodyCategories from '../components/BodyCategories'
import Footer from '../components/footer/Footer'

const Public = ({ topbarBgColor, showTopbar = true }) => {
    return (
        <>
            {showTopbar && <Topbar bgcolor={topbarBgColor} />}
            <Header />
            <BodyCategories/>
            <Outlet />
            
            <Footer/>
            
        </>
    )
}

export default Public