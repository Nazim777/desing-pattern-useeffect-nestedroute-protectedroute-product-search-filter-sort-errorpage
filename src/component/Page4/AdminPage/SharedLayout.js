import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
      <div className='div1'>
            <div className='div2'>
                <div className='div3'>
                    <ul>
                       <Link className='link' to='allproduct'>Product</Link>
                       <Link className='link' to='summary'>Summary</Link>
                       <Link className='link' to='order'>Order</Link>
                       <Link className='link' to='users'>Users</Link>
                        

                    </ul>

                </div>
               

            </div>
            
            <Outlet/>
        </div>
        
    </div>
  )
}

export default SharedLayout
