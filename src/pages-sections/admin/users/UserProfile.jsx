import { Box, Button, Container,  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import avatar from '../../../assets/user.jpg'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import * as yup from 'yup'
// import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { FlexBox } from '../../../components/flex-box';
import Image from '../../../components/Image';
import EditUserForm from './UserForm/EditUserForm';
import { viewCurrentUserProfile } from '../../../apis/user';

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // const axiosPrivate = useAxiosPrivate()

  useEffect (()=>{
    const getUser = async () => {
         const response = await viewCurrentUserProfile()
          setUser(response)
          // console.log(response);
    }
    getUser()
  },[isEdit])
  const initialValues = {
    username: user.username,
    email: user.email,
    // mobile: user.mobile,
  };
  const formSchema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    // mobile: yup.number()
  });
 
  
  return (
    <Container
          sx={{
            display: 'flex',
            gap:'100px',
        }}
      >
     {
      !isEdit ? 
      <FlexBox display='flex'
              flexDirection='column'
              gap={6}>
           <FlexBox fontWeight={'700'} fontSize={'30px'} display={'flex'} justifyContent='space-between' >
            <FlexBox display='flex' gap='10px' alignItems='center'>
              <PersonSharpIcon fontSize='large' sx={{
                color:'red'
              }} />
              <Box>My Profile</Box>
            </FlexBox>

          
              <Button onClick={()=>setIsEdit(true)}><Box color={'red'}>Edit Profile</Box> </Button>
           
            </FlexBox>
            <FlexBox display='flex' alignItems='center' gap={7}>
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <Image src={avatar} height={'64px'} />
                <Box>
                  <Box>Nick DuBuque</Box>
                  <Box>Balance : US$500.00</Box>
                </Box>
              </Box>
              <Box textTransform='uppercase' letterSpacing='5px'>
                silver user
              </Box>
              <Box textAlign={'center'}>
                 <Box color={'red'} fontSize={'20px'} fontWeight='600'>16</Box>
                  <Box>All</Box>
                  <Box>Orders</Box>
              </Box >
              <Box textAlign={'center'} width={'50px'}>
                  <Box color={'red'} fontSize={'20px'} fontWeight='600'>02</Box>  

                  <Box>Awaiting Payments</Box>
              </Box>
              <Box textAlign={'center'} width={'50px'}>
                  <Box color={'red'} fontSize={'20px'} fontWeight='600'>01</Box>

                  <Box>Awaiting Shipments</Box>
              </Box>
              <Box textAlign={'center'} width={'50px'}>
                  <Box color={'red'} fontSize={'20px'} fontWeight='600'>00</Box>

                  <Box>Awaiting Delivery</Box>
              </Box>
              
            </FlexBox>
            <FlexBox display={'flex'} gap={12}>
              <Box>
               <Box   color={'#7d879c'}>ID</Box>
                  
                <Box>{user._id}</Box>
              </Box>
              <Box>
              <Box color={'#7d879c'}>Name</Box>
               
                 
                 <Box>{user.username}</Box>
              </Box>
              <Box>
               <Box color={'#7d879c'}>Email</Box>

                
                <Box> {user.email}</Box>
              </Box>
              <Box>
               <Box color={'#7d879c'}>Mobile</Box>

                 
                 {/* <Box>{user.mobile}</Box> */}
              </Box>
            </FlexBox>

     </FlexBox>
     :
    <FlexBox display='flex'
              flexDirection='column'
              gap={6}
              width='100% '
              >
        <FlexBox fontWeight={'700'} fontSize={'30px'} display={'flex'} justifyContent='space-between' >
          <FlexBox display='flex' gap='10px' alignItems='center'>
            <PersonSharpIcon fontSize='large' sx={{
              color:'red'
            }} />
            <Box>My Profile</Box>
          </FlexBox>

      
          <Button onClick={()=>setIsEdit(false)}><Box color={'red'}>Back To Profile</Box> </Button>
        
        </FlexBox>
   
        <Box><Image src={avatar} height={'64px'} /></Box>
        <FlexBox>
        <EditUserForm formSchema={formSchema} initialValues={initialValues}/>
        </FlexBox>
       
    </FlexBox>

     }

          
    </Container>
  )
}

export default UserProfile