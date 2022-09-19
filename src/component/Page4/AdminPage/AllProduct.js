import React, { useEffect, useState } from 'react'
import { AllProducts} from '../Utilis/Utilis'
import shortid from 'shortid'





const AllProduct = () => {

  const [allData,setAllData] =useState([])
  
  useEffect(()=>{
    setAllData([...AllProducts])
  },[])




  const initialState ={
    id: shortid.generate(),
    name:'',
    price:''

  }
  const [data,setData] = useState(initialState)
  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
      

    })

  }
  const hanldeClick=(e)=>{
    e.preventDefault()
    setAllData([...allData,{...data}])
    setData(initialState)
   
   
    
  }

const deleteProduct=(id)=>{
  const newData = allData.filter((item)=>item.id!==id)
 setAllData([...newData])
}



  return (
    <div>
        {
          allData&& allData.map((item)=><div key={item.id}>
            <div>name: {item.name}</div>
            <div> price: {item.price}</div>
            <button onClick={()=>deleteProduct(item.id)}>delete</button>
          </div>)
        }


       <h1>add more product</h1>
       <form>
        <label htmlFor="name">product name: </label> 
      <input type="text" id='name' name='name'  onChange={handleChange} value={data.name} placeholder='name' /> <br />
      <label htmlFor="price">product price: </label> 
      <input type="text" id='price' name='price' onChange={handleChange} value={data.price}  placeholder='price' /> <br /> <br />
      <button type='submit' onClick={hanldeClick}>submit</button>
    </form>
       
      
    </div>
  )
}

export default AllProduct
