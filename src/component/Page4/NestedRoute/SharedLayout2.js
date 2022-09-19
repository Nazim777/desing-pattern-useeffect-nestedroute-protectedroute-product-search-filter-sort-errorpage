import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const SharedLayout2 = () => {
  return (
    <div>
        <div style={{display:'flex',background:'orangered',justifyContent:'center',alignItems:'center'}}>
            <ul style={{display:'flex'}}>
            <Link to='search' style={{textDecoration:'none',color:'white',marginRight:'10px',fontSize:'20px',cursor:'pointer'}}>Search</Link>  
              <Link to='productlist' style={{textDecoration:'none',color:'white',fontSize:'20px',cursor:'pointer'}}> ProductList</Link>
              <Link to='user' style={{textDecoration:'none',marginLeft:'10px',color:'white',fontSize:'20px',cursor:'pointer'}}> User</Link>

            </ul>

        </div>
        <Outlet/>
      
    </div>
  )
}

export default SharedLayout2
