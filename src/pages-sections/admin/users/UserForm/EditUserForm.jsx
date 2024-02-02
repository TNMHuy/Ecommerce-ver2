import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Alert, Button, TextField } from '@mui/material';
import { FlexBox } from '../../../../components/flex-box';
import CloseIcon from '@mui/icons-material/Close';
import { updateCurrentUser } from '../../../../apis/user';
import ChangePasswordForm from './ChangePassWordForm';

const EditUserForm = ({formSchema,initialValues}) => {
    const [success,setSuccess] = useState(false)
    const handleFormSubmit = async (data)=>{
        console.log(data);
        const res = await updateCurrentUser(data)
        setSuccess(true)
        setTimeout(()=>setSuccess(false),3000)
      }
    
    const { values, handleBlur, handleChange, handleSubmit,errors } =
        useFormik({
            initialValues,
            onSubmit: handleFormSubmit,
            validationSchema: formSchema,
        });
  
  return (
    <>
    <form onSubmit={handleSubmit}>
              <FlexBox display={'flex'} gap={6}>
              <TextField
                              name="username"
                              label="username"
                              value={values.username}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={errors.username} 
                              helperText={errors.username}        
               />
              <TextField
                              name="email"
                              label="Email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}

               />
              {/* <TextField
                              name="mobile"
                              label="Mobile"
                              value={values.mobile}
                              onChange={handleChange}
                              onBlur={handleBlur}

               /> */}
              
            <FlexBox mr='20px'> <Button type='submit' onClick={handleFormSubmit}  variant='contained' color='error' > Save Changes</Button></FlexBox>
            
              </FlexBox>
              {
                success  &&
                <FlexBox display='flex' bottom='0' position='absolute' left ='0'>
            <Alert severity="success" >Saved successfully</Alert> 
            <CloseIcon fontSize='small' cursor='pointer' onClick={()=>setSuccess(false)}></CloseIcon>
            </FlexBox>
            
              }
            </form>
            <ChangePasswordForm></ChangePasswordForm>
     </>
    
  )
}

export default EditUserForm