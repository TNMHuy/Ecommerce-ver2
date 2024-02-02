import React from 'react'
import { FlexRowCenter } from '../components/flex-box'
import ForgotPassWordForm from '../components/sessions/ForgotPassWordForm'


const ForgotPassword = () => {
    
    return (
        <FlexRowCenter sx={{ width: "100%" }} flexDirection="column" minHeight="100vh">
            <ForgotPassWordForm></ForgotPassWordForm>
        </FlexRowCenter>
    )
}

export default ForgotPassword