import React,{useState,useEffect} from 'react'
import AllProductListDetail from './AllProductListDetail'

const AllProductList = () => {
    const [Product,setProduct] = useState([])
    const [productArray,setProductArray] = useState([])
    const [isLoading,setIsLoading] = useState(true)
useEffect(()=>{
  let isCancelled = false
fetch('https://dummyjson.com/products').then((resp)=>resp.json()).then((data)=>{
  setProduct([...data.products])
  setProductArray([...data.products])
  setIsLoading(false)
})
return(()=>{
  isCancelled = true
})
},[])


// search product
const [searchValue,setSearchValue] = useState('')
let searchedProduct = []

useEffect(()=>{
 
  if(searchValue){
    searchedProduct= Product.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
 setProduct([...searchedProduct])

  }else if(!searchValue || searchValue===''){
    setProduct([...productArray])

  }
},[searchValue])


// filter product
const productCategory = ['all','smartphones','laptops','fragrances','skincare','groceries','home-decoration']
const [seletctValue,setSelectValue] = useState('all')


let selectedProductArray = []
const handleSelect = (e)=>{
  setSelectValue(e.target.value)
}
useEffect(()=>{
  
 
    selectedProductArray = Product.filter((item)=>item.category==seletctValue)
    setProduct([...selectedProductArray])
  if(seletctValue==='' || seletctValue==='all'){
    setProduct([...productArray])
  }

},[seletctValue])


// sort product
const [sortValue,setSortValue] = useState('reset')
const handleSort = (e)=>{
  setSortValue(e.target.value)

}

useEffect(()=>{
  if(sortValue==='price'){
    const sortProduct = Product.sort((a,b)=>a.price-b.price)
    setProduct([...sortProduct])

  }else if(sortValue==='name'){
     const sortProduct2 = Product.sort((a,b)=>a.title>b.title?1:-1)
    setProduct([...sortProduct2])
    
  }else if(sortValue==='' || sortValue ==='reset'){
    setProduct([...productArray])
  }

},[sortValue])



if(isLoading){
  return <h1>Loading...</h1>
}
  return (
    <div>

      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',marginBottom:'30px'}}>


      <div>
        <h4>search product</h4>
        <input type="text" value={searchValue} placeholder='search product by title' onChange={(e)=>setSearchValue(e.target.value)}/>
      </div>
      <div>
       <h4> filter product</h4>
        <select value={seletctValue} onChange={handleSelect}>
          <option value="">please select category</option>
          {productCategory.map((item)=><option value={item}>{item}</option>)}

        </select>
      </div>

      <div>
        <h4>sort product</h4>
        <select value={sortValue} onChange={handleSort}>
          <option value="">plese select option</option>
          <option value="reset">reset</option>
          <option value="price">price</option>
          <option value="name">name</option>
        </select>
      </div>

      </div>

      

        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
            {Product&&Product.map((item)=><AllProductListDetail item={item}/>)}

        </div>
      
    </div>
  )
}

export default AllProductList
