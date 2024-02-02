import { Box, Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import UserDasboard from '../components/dashboard/UserDasBoard'

const User = () => {
    const { isLogin, user } = useSelector(state => state.auth)
    if (!isLogin) return <Navigate to='/login' />
    if (user.role === 'admin') return <Navigate to='/admin' />
    return (
        <Container>
            <Box display={'flex'} mt={'48px'} gap={'25px'}>
                 <UserDasboard/>
                 <Outlet />
            </Box>
        </Container>
    )
}

export default User