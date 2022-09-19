import React from 'react'
import { Link } from 'react-router-dom'

const AllProductListDetail = ({item}) => {
  return (
    <div>
        <div style={{width:'300px',height:'400px',margin:'10px'}} key={item.id}>
           <div>
           <img src={item.thumbnail} alt="" style={{width:'100%',maxWidth:'250px',height:'240px'}} />
           <h4>{item.title}</h4>
           <span>price: ${item.price}</span> <br />
           <Link to={`sinlgeproduct/${item.id}`}>detail</Link>
           </div>

               

        </div>
      
    </div>
  )
}

export default AllProductListDetail
