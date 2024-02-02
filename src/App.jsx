import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Public from './layouts/Public'
import Admin from './layouts/Admin'
import { useTheme } from '@mui/material'
import SignUp from './pages/SignUp'
import LoginPage from './pages/Login'
import User from './pages/User'
import Dashboard from './pages/admin/Dashboard'
import AccountSetting from './pages/admin/AccountSetting'
import CreateProduct from './pages/admin/products/CreateProduct'
import ProductList from './pages/admin/products/ProductList'
import Categories from './pages/admin/products/Categories'
import NotFound404 from './pages/NotFound404'
import Brands from './pages/admin/products/Brands'
import UserList from './pages/admin/users/UserList'
import UserProfile from './pages-sections/admin/users/UserProfile'
import SearchPage from './pages-sections/admin/products/SearchPage/SearchPage'
import CartReview from './pages/CartReview'
import CardDetail from './pages/CardDetail'
import Order from './pages/Order'
import WishList from './pages/WishList'
import SupportTickets from './pages/SupportTickets'
import Addresses from './pages/Addresses'
import PayMethods from './pages/PayMethods'
import Home from './pages/home/Home'
import Description from './pages/Description'
import Review from './pages/Review'
import CheckOut from './pages/CheckOut'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassWordPage from './pages/ResetPassWordPage'


function App() {
  const theme = useTheme()
  // console.log(theme); 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Public topbarBgColor={theme.palette.grey[900]} />}>
            <Route path='' element={<Home />} />
            <Route path='user' element={<User />} >
              <Route path='/user/profile' element={<UserProfile />} />  
              <Route path='/user/order' element={<Order />} />  
              <Route path='/user/wish' element={<WishList />} />  
              <Route path='/user/support-tickets' element={<SupportTickets />} />  
              <Route path='/user/addresses' element={<Addresses />} />  
              <Route path='/user/payment' element={<PayMethods />} />  
            </Route>
            <Route path='/checkout' element={<CheckOut />} />  
            <Route path='/search-page' element={<SearchPage />} />  
            <Route path='/cart' element={<CartReview />} />
            <Route path='/card-detail' element={<CardDetail />} >
              <Route path='/card-detail/description' element={<Description />} />
              <Route path='/card-detail/review' element={<Review />} />
              
            </Route>
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:id' element={<ResetPassWordPage />} />
          <Route path='/admin/' element={<Admin />}>
            <Route path='' element={<Dashboard />} />
            <Route path='products' element={<ProductList />} />
            <Route path='products/create' element={<CreateProduct />} />
            <Route path='products/categories' element={<Categories />} />
            <Route path='products/brands' element={<Brands />} />
            <Route path='account-setting' element={<AccountSetting />} />
            <Route path='users' element={<UserList />} />
          </Route>
          <Route path='/*' element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
