import React from 'react'
import { Link } from 'react-router-dom'
import { UserRole } from '../Utilis/Utilis'

const Navbar = () => {
  return (
    <div>
        <div style={{display:'flex',background:'orange'}}>
            <ul style={{display:'flex'}}>
              <Link className='navLink' to='/' style={{textDecoration:'none',color:'white',marginRight:'10px',fontSize:'20px',cursor:'pointer'}}>Home</Link>  
              <Link className='navLink' to='product' style={{textDecoration:'none',color:'white',fontSize:'20px',cursor:'pointer'}}> Product</Link>
              <Link className='navLink' to='login' style={{textDecoration:'none',marginLeft:'10px', color:'white',fontSize:'20px',cursor:'pointer'}}>Login</Link>
              {
                UserRole.role==='admin'&&
                <Link className='navLink' to='admin' style={{textDecoration:'none', marginLeft:'10px',color:'white',fontSize:'20px',cursor:'pointer'}}> Admin</Link>
              }
                
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
