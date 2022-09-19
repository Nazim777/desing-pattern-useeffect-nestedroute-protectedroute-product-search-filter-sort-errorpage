import React,{useEffect, useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './NestedRoute/Home'
import Product from './NestedRoute/Product'
import Navbar from './NestedRoute/Navbar'
import Search from './NestedRoute/Search'
import ProductList from './NestedRoute/ProductList'
import User from './NestedRoute/User'
import Admin from './AdminPage/Admin'
import {UserRole} from './Utilis/Utilis'
import AllProduct from './AdminPage/AllProduct'
import AllSummary from './AdminPage/AllSummary'
import Order from './AdminPage/Order'
import Users from './AdminPage/Users'
import SharedLayout from './AdminPage/SharedLayout'
import Error from './NestedRoute/Error'
import SharedLayout2 from './NestedRoute/SharedLayout2'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Login from './ProtectedRoute/Login'
import Dashboard from './ProtectedRoute/Dashboard'
import SingleProduct from './NestedRoute/ProductList/SingleProduct'
const Page4 = () => {
 const [user,setUser] = useState(null)
  return (
    <div>
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*'  element={<Error/>}/>
            <Route path='login' element={<Login setUser={setUser} />}/>
            <Route path='dashboard' element={<ProtectedRoute user={user}><Dashboard user={user}/></ProtectedRoute>}/>
            {/* <Route path='dashboard' element={<Dashboard user={user}/>}/> */}
            <Route path='/product' element={<SharedLayout2/>}>
                <Route index element={<Product/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='productlist' element={<ProductList/>}/>
                <Route path='user' element={<User/>}/>
                {/* //not optimized for the sinlgeproduct page its need to create another SharedLayout page on ProductList page */}
                <Route path='/product/productlist/sinlgeproduct/:id' element={<SingleProduct/>}/> 

            </Route>
            {
              UserRole.role=='admin'&&

              <Route path='admin' element={<SharedLayout/>}>
                <Route index element={<Admin/>}/>
                <Route path='allproduct' element={<AllProduct/>}/>
                <Route path='summary' element={<AllSummary/>} />
                <Route path='order' element={<Order/>}/>
                <Route path='users' element={<Users/>}/>
                
            </Route>
            }
        </Routes>
        
        
        </BrowserRouter>
      
    </div>
  )
}

export default Page4
