import React from 'react'
import { FlexRowCenter } from '../components/flex-box'
import ResetPassWord from '../components/sessions/ResetPassWord'


const ResetPassWordPage = () => {
    
    return (
        <FlexRowCenter sx={{ width: "100%" }} flexDirection="column" minHeight="100vh">
            <ResetPassWord></ResetPassWord>
        </FlexRowCenter>
    )
}

export default ResetPassWordPage