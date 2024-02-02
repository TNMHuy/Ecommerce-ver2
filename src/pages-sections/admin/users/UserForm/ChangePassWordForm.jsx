import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePassword } from '../../../../apis/user';
import { Box, Button, Dialog, TextField } from '@mui/material';
// import { changePassword } from '../../api/auth';

const ChangePasswordForm = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen =() =>{
        setOpen(true)
    }
    const handleClose=() =>{
        setOpen(false)
    }
    const toggleShowPassword = (passwordType) => {
        switch (passwordType) {
            case 'current':
                setShowCurrentPassword(!showCurrentPassword);
                break;
            case 'new':
                setShowNewPassword(!showNewPassword);
                break;
            case 'confirm':
                setShowConfirmPassword(!showConfirmPassword);
                break;
            default:
                break;
        }
    };

    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required('Required'),
            newPassword: Yup.string().required('Required').min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu xác nhận phải trùng khớp với mật khẩu mới')
                .required('Required'),
        }),
        onSubmit: async values => {
            try {
                const response = await changePassword(values);
                console.log(response);
            } catch (error) {
                console.error('Đã xảy ra lỗi khi thay đổi mật khẩu:', error);
            }
        },
    });

    return (
        <>
        <Button variant='contained' color='error' onClick={handleOpen}>Change Pass</Button>
        <Dialog open={open} onClose={handleClose} PaperProps={{
                 sx:{
                   p:'50px'
                     }}}>
         <Box sx={{display:'flex', flexDirection:'column', gap:'30px'}} >
             <Box >
                 <Box sx={{fontSize:'30px', fontWeight:'700'}}>Change Password</Box>
                 <Box sx={{fontSize:'20px', fontWeight:'500'}} >Enter your password</Box>
             </Box>
             <form onSubmit={formik.handleSubmit} >
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>

                 <Box sx={{display:'flex',  gap:'20px'}} >
                     <TextField
                         id="currentPassword"
                         name="currentPassword"
                         type={showCurrentPassword ? 'text' : 'password'}
                         placeholder="Current password"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.currentPassword}
                     />
                     <Button
                         variant='contained'
                         color='error'
                         onClick={() => toggleShowPassword('current')}
                     >
                         {showCurrentPassword ? 'Hide' : 'Show'}
                     </Button>
                     {formik.touched.currentPassword && formik.errors.currentPassword ? (
                         <p >{formik.errors.currentPassword}</p>
                     ) : null}
                 </Box>
                 <Box sx={{display:'flex',  gap:'20px'}}>
                     <TextField
                         id="newPassword"
                         name="newPassword"
                         type={showNewPassword ? 'text' : 'password'}
                         placeholder="New password"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.newPassword}
                     />
                     <Button
                          variant='contained'
                          color='error'
                         onClick={() => toggleShowPassword('new')}
                     >
                         {showNewPassword ? 'Hide' : 'Show'}
                     </Button>
                     {formik.touched.newPassword && formik.errors.newPassword ? (
                         <p >{formik.errors.newPassword}</p>
                     ) : null}
                 </Box>
                 <Box sx={{display:'flex',  gap:'20px'}} >
                     <TextField
                         id="confirmPassword"
                         name="confirmPassword"
                         type={showConfirmPassword ? 'text' : 'password'}
                         placeholder="Confirm new password"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.confirmPassword}
                     />
                     <Button
                         variant='contained'
                         color='error'
                         onClick={() => toggleShowPassword('confirm')}
                     >
                         {showConfirmPassword ? 'Hide' : 'Show'}
                     </Button>
                     {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                         <p >{formik.errors.confirmPassword}</p>
                     ) : null}
                 </Box>
                 <Button
                     variant='contained'
                     color='error'
                     type='submit'
                 >
                     Change
                 </Button>
                </Box>

             </form>
         </Box>
        </Dialog>
        </>
    );
};

export default ChangePasswordForm;
