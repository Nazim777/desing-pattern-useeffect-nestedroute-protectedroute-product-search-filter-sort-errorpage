import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then((resp)=>resp.json()).then((data)=>setProduct({...data}))

    },[id])
    
    
  return (
    <div>
        <h1>hello this is a single product page</h1>
        <div>
            <img src={product.thumbnail} style={{width:'300px',height:'auto',margin:'10px'}} /> 
            <h3>{product.title}</h3>
            <span>category: {product.category}</span>
            <h5>{product.description}</h5>
            <h4>price: ${product.price}</h4>
            <button>add to cart</button>
            
        </div>
      
    </div>
  )
}

export default SingleProduct
